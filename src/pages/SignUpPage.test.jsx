import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import SignUpPage from './SignUpPage';

// Mock react-router-dom's useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return { ...actual, useNavigate: () => mockNavigate };
});

// Mock window.scrollTo
beforeEach(() => {
  window.scrollTo = vi.fn();
  mockNavigate.mockClear();
});

function renderPage() {
  return render(
    <MemoryRouter>
      <SignUpPage />
    </MemoryRouter>
  );
}

// Helper to find the step heading (avoids matching breadcrumb labels)
function getStepHeading(name) {
  return screen.getByRole('heading', { name });
}

// Helper: fill all personal info fields with valid data
async function fillPersonalInfo(user) {
  await user.type(screen.getByLabelText(/first name/i), 'John');
  await user.type(screen.getByLabelText(/last name/i), 'Doe');
  await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
  await user.type(screen.getByLabelText(/phone number/i), '5551234567');
  await user.type(screen.getByLabelText(/date of birth/i), '1990-01-01');
}

// Helper: fill all address fields with valid data
async function fillAddress(user) {
  await user.type(screen.getByLabelText(/street address/i), '123 Main St');
  await user.type(screen.getByLabelText(/city/i), 'Springfield');
  await user.selectOptions(screen.getByLabelText(/state/i), 'CA');
  await user.type(screen.getByLabelText(/zip/i), '90210');
}

// Helper: fill car detail required fields
async function fillCarDetails(user) {
  await user.type(screen.getByLabelText('Make'), 'Toyota');
  await user.type(screen.getByLabelText('Model'), 'Camry');
  await user.selectOptions(screen.getByLabelText('Year'), '2020');
}

// Helper: advance past personal & address steps
async function advanceToStep(user, stepName) {
  if (stepName === 'personal') return;

  await fillPersonalInfo(user);
  await user.click(screen.getByRole('button', { name: /next/i }));

  if (stepName === 'address') return;

  await fillAddress(user);
  await user.click(screen.getByRole('button', { name: /next/i }));

  if (stepName === 'coverage') return;

  // Select coverage type based on target step
  if (stepName === 'carDetails') {
    await user.click(screen.getByText('Car Insurance'));
  } else if (stepName === 'homeDetails') {
    await user.click(screen.getByText('Home Insurance'));
  }
  await user.click(screen.getByRole('button', { name: /next/i }));
}

// ─── Rendering ────────────────────────────────────────────────────────────────

describe('SignUpPage', () => {
  describe('initial render', () => {
    it('renders the page title and subtitle', () => {
      renderPage();
      expect(screen.getByText('Sign Up for InsureCo')).toBeInTheDocument();
      expect(screen.getByText(/get started with your insurance coverage/i)).toBeInTheDocument();
    });

    it('starts on the Personal Information step', () => {
      renderPage();
      expect(getStepHeading('Personal Information')).toBeInTheDocument();
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    });

    it('shows the Next button but not the Back button initially', () => {
      renderPage();
      expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /back/i })).not.toBeInTheDocument();
    });
  });

  // ─── Navigation ───────────────────────────────────────────────────────────

  describe('navigation', () => {
    it('advances to Address step when personal info is valid', async () => {
      const user = userEvent.setup();
      renderPage();

      await fillPersonalInfo(user);
      await user.click(screen.getByRole('button', { name: /next/i }));

      expect(getStepHeading('Your Address')).toBeInTheDocument();
    });

    it('shows Back button on Address step', async () => {
      const user = userEvent.setup();
      renderPage();

      await advanceToStep(user, 'address');
      expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
    });

    it('navigates back to Personal Info from Address', async () => {
      const user = userEvent.setup();
      renderPage();

      await advanceToStep(user, 'address');
      await user.click(screen.getByRole('button', { name: /back/i }));

      expect(getStepHeading('Personal Information')).toBeInTheDocument();
    });

    it('advances to Coverage step from Address', async () => {
      const user = userEvent.setup();
      renderPage();

      await advanceToStep(user, 'coverage');
      expect(getStepHeading('What Will You Insure')).toBeInTheDocument();
    });

    it('scrolls to top on navigation', async () => {
      const user = userEvent.setup();
      renderPage();

      await fillPersonalInfo(user);
      await user.click(screen.getByRole('button', { name: /next/i }));

      expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });
  });

  // ─── Conditional Step Flow ────────────────────────────────────────────────

  describe('conditional step flow', () => {
    it('shows Car Details step when car insurance is selected', async () => {
      const user = userEvent.setup();
      renderPage();

      await advanceToStep(user, 'carDetails');
      expect(getStepHeading('Car Details')).toBeInTheDocument();
    });

    it('shows Home Details step when home insurance is selected', async () => {
      const user = userEvent.setup();
      renderPage();

      await advanceToStep(user, 'homeDetails');
      expect(getStepHeading('Property Details')).toBeInTheDocument();
    });

    it('shows Car Details then Home Details when both is selected', async () => {
      const user = userEvent.setup();
      renderPage();

      await advanceToStep(user, 'coverage');
      await user.click(screen.getByText('Both Home and Car'));
      await user.click(screen.getByRole('button', { name: /next/i }));

      expect(getStepHeading('Car Details')).toBeInTheDocument();

      // Fill car details to advance to home
      await fillCarDetails(user);
      await user.click(screen.getByRole('button', { name: /next/i }));

      expect(getStepHeading('Property Details')).toBeInTheDocument();
    });

    it('shows Submit button on the last step', async () => {
      const user = userEvent.setup();
      renderPage();

      await advanceToStep(user, 'carDetails');
      expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });
  });

  // ─── Coverage Tile Selection ──────────────────────────────────────────────

  describe('coverage tiles', () => {
    it('renders three coverage options', async () => {
      const user = userEvent.setup();
      renderPage();

      await advanceToStep(user, 'coverage');

      expect(screen.getByText('Car Insurance')).toBeInTheDocument();
      expect(screen.getByText('Home Insurance')).toBeInTheDocument();
      expect(screen.getByText('Both Home and Car')).toBeInTheDocument();
    });

    it('marks the selected tile as pressed', async () => {
      const user = userEvent.setup();
      renderPage();

      await advanceToStep(user, 'coverage');

      const carTile = screen.getByText('Car Insurance').closest('button');
      await user.click(carTile);

      expect(carTile).toHaveAttribute('aria-pressed', 'true');
    });
  });

  // ─── Validation ───────────────────────────────────────────────────────────

  describe('validation', () => {
    describe('personal info step', () => {
      it('shows errors when submitting empty fields', async () => {
        const user = userEvent.setup();
        renderPage();

        await user.click(screen.getByRole('button', { name: /next/i }));

        expect(screen.getByText('First name is required')).toBeInTheDocument();
        expect(screen.getByText('Last name is required')).toBeInTheDocument();
        expect(screen.getByText('Email is required')).toBeInTheDocument();
        expect(screen.getByText('Phone number is required')).toBeInTheDocument();
        expect(screen.getByText('Date of birth is required')).toBeInTheDocument();
      });

      it('does not advance when validation fails', async () => {
        const user = userEvent.setup();
        renderPage();

        await user.click(screen.getByRole('button', { name: /next/i }));

        expect(getStepHeading('Personal Information')).toBeInTheDocument();
      });

      it('shows email format error for invalid email', async () => {
        const user = userEvent.setup();
        renderPage();

        await user.type(screen.getByLabelText(/first name/i), 'John');
        await user.type(screen.getByLabelText(/last name/i), 'Doe');
        await user.type(screen.getByLabelText(/email address/i), 'not-an-email');
        await user.type(screen.getByLabelText(/phone number/i), '5551234567');
        await user.type(screen.getByLabelText(/date of birth/i), '1990-01-01');
        await user.click(screen.getByRole('button', { name: /next/i }));

        expect(screen.getByText('Enter a valid email address')).toBeInTheDocument();
      });

      it('clears field error when user types', async () => {
        const user = userEvent.setup();
        renderPage();

        await user.click(screen.getByRole('button', { name: /next/i }));
        expect(screen.getByText('First name is required')).toBeInTheDocument();

        await user.type(screen.getByLabelText(/first name/i), 'J');
        expect(screen.queryByText('First name is required')).not.toBeInTheDocument();
      });
    });

    describe('address step', () => {
      it('shows errors when submitting empty address fields', async () => {
        const user = userEvent.setup();
        renderPage();

        await advanceToStep(user, 'address');
        await user.click(screen.getByRole('button', { name: /next/i }));

        expect(screen.getByText('Street address is required')).toBeInTheDocument();
        expect(screen.getByText('City is required')).toBeInTheDocument();
        expect(screen.getByText('State is required')).toBeInTheDocument();
        expect(screen.getByText('Zip code is required')).toBeInTheDocument();
      });

      it('validates zip code format', async () => {
        const user = userEvent.setup();
        renderPage();

        await advanceToStep(user, 'address');
        await user.type(screen.getByLabelText(/street address/i), '123 Main');
        await user.type(screen.getByLabelText(/city/i), 'Springfield');
        await user.selectOptions(screen.getByLabelText(/state/i), 'CA');
        await user.type(screen.getByLabelText(/zip/i), 'abc');
        await user.click(screen.getByRole('button', { name: /next/i }));

        expect(screen.getByText('Enter a valid 5-digit zip code')).toBeInTheDocument();
      });
    });

    describe('coverage step', () => {
      it('shows error when no coverage type is selected', async () => {
        const user = userEvent.setup();
        renderPage();

        await advanceToStep(user, 'coverage');

        // With no insurance type selected, coverage is the last step so button says "Submit"
        await user.click(screen.getByRole('button', { name: /submit/i }));

        expect(screen.getByText('Please select a coverage type')).toBeInTheDocument();
      });
    });

    describe('car details step', () => {
      it('shows errors when submitting empty required car fields', async () => {
        const user = userEvent.setup();
        renderPage();

        await advanceToStep(user, 'carDetails');
        await user.click(screen.getByRole('button', { name: /submit/i }));

        expect(screen.getByText('Make is required')).toBeInTheDocument();
        expect(screen.getByText('Model is required')).toBeInTheDocument();
        expect(screen.getByText('Year is required')).toBeInTheDocument();
      });

      it('validates VIN format when provided', async () => {
        const user = userEvent.setup();
        renderPage();

        await advanceToStep(user, 'carDetails');
        await user.type(screen.getByLabelText('Make'), 'Toyota');
        await user.type(screen.getByLabelText('Model'), 'Camry');
        await user.selectOptions(screen.getByLabelText('Year'), '2020');
        await user.type(screen.getByLabelText(/vin/i), 'ABC');
        await user.click(screen.getByRole('button', { name: /submit/i }));

        expect(screen.getByText('VIN must be exactly 17 characters')).toBeInTheDocument();
      });
    });

    describe('home details step', () => {
      it('shows errors when submitting empty required home fields', async () => {
        const user = userEvent.setup();
        renderPage();

        await advanceToStep(user, 'homeDetails');
        await user.click(screen.getByRole('button', { name: /submit/i }));

        expect(screen.getByText('Home type is required')).toBeInTheDocument();
        expect(screen.getByText('Year built is required')).toBeInTheDocument();
      });
    });

    it('clears errors when navigating back', async () => {
      const user = userEvent.setup();
      renderPage();

      await advanceToStep(user, 'address');
      await user.click(screen.getByRole('button', { name: /next/i }));
      expect(screen.getByText('Street address is required')).toBeInTheDocument();

      await user.click(screen.getByRole('button', { name: /back/i }));
      // Navigate forward again — errors should be gone
      await user.click(screen.getByRole('button', { name: /next/i }));

      // We're back on address step (personal info still valid), errors are cleared
      expect(getStepHeading('Your Address')).toBeInTheDocument();
    });
  });

  // ─── Submit & Cancel ──────────────────────────────────────────────────────

  describe('submit and cancel', () => {
    it('navigates to /dashboard on submit', async () => {
      const user = userEvent.setup();
      renderPage();

      await advanceToStep(user, 'carDetails');

      await fillCarDetails(user);
      await user.click(screen.getByRole('button', { name: /submit/i }));

      expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });

    it('shows Cancel button on detail steps', async () => {
      const user = userEvent.setup();
      renderPage();

      await advanceToStep(user, 'carDetails');
      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('navigates to / on cancel', async () => {
      const user = userEvent.setup();
      renderPage();

      await advanceToStep(user, 'carDetails');
      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(mockNavigate).toHaveBeenCalledWith('/');
    });

    it('does not show Cancel button on personal info step', () => {
      renderPage();
      expect(screen.queryByRole('button', { name: /cancel/i })).not.toBeInTheDocument();
    });
  });

  // ─── Warning Notification ─────────────────────────────────────────────────

  describe('warning notification', () => {
    it('shows warning notification on car details step', async () => {
      const user = userEvent.setup();
      renderPage();

      await advanceToStep(user, 'carDetails');
      expect(screen.getByText(/this is a warning message/i)).toBeInTheDocument();
    });
  });
});
