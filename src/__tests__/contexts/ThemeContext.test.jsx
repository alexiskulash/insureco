import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider, useTheme } from "../../contexts/ThemeContext";

// Helper component to surface theme context values in the DOM
function ThemeDisplay() {
  const { theme, isDark, toggleTheme, setLightTheme, setDarkTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="is-dark">{String(isDark)}</span>
      <button onClick={toggleTheme}>toggle</button>
      <button onClick={setLightTheme}>set-light</button>
      <button onClick={setDarkTheme}>set-dark</button>
    </div>
  );
}

// =============================================================================
// Setup: clear localStorage before each test
// =============================================================================

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute("data-carbon-theme");
  vi.restoreAllMocks();
});

// =============================================================================
// Default theme
// =============================================================================

describe("ThemeProvider — default theme", () => {
  it("defaults to 'white' when localStorage is empty", () => {
    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme")).toHaveTextContent("white");
  });

  it("isDark is false when default theme is white", () => {
    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>
    );
    expect(screen.getByTestId("is-dark")).toHaveTextContent("false");
  });
});

// =============================================================================
// localStorage persistence
// =============================================================================

describe("ThemeProvider — localStorage", () => {
  it("loads theme from localStorage on mount", () => {
    localStorage.setItem("insureco-theme", "g100");
    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme")).toHaveTextContent("g100");
  });

  it("saves theme to localStorage when toggled", async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>
    );
    await user.click(screen.getByRole("button", { name: "toggle" }));
    expect(localStorage.getItem("insureco-theme")).toBe("g100");
  });
});

// =============================================================================
// toggleTheme
// =============================================================================

describe("ThemeProvider — toggleTheme", () => {
  it("switches from white to g100 on first toggle", async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>
    );
    await user.click(screen.getByRole("button", { name: "toggle" }));
    expect(screen.getByTestId("theme")).toHaveTextContent("g100");
  });

  it("switches back to white on second toggle", async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>
    );
    await user.click(screen.getByRole("button", { name: "toggle" }));
    await user.click(screen.getByRole("button", { name: "toggle" }));
    expect(screen.getByTestId("theme")).toHaveTextContent("white");
  });

  it("sets isDark to true after toggling to g100", async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>
    );
    await user.click(screen.getByRole("button", { name: "toggle" }));
    expect(screen.getByTestId("is-dark")).toHaveTextContent("true");
  });
});

// =============================================================================
// setLightTheme / setDarkTheme
// =============================================================================

describe("ThemeProvider — setLightTheme / setDarkTheme", () => {
  it("setDarkTheme sets theme to g100", async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>
    );
    await user.click(screen.getByRole("button", { name: "set-dark" }));
    expect(screen.getByTestId("theme")).toHaveTextContent("g100");
  });

  it("setLightTheme sets theme back to white", async () => {
    localStorage.setItem("insureco-theme", "g100");
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>
    );
    await user.click(screen.getByRole("button", { name: "set-light" }));
    expect(screen.getByTestId("theme")).toHaveTextContent("white");
  });
});

// =============================================================================
// useTheme error guard
// =============================================================================

describe("useTheme", () => {
  it("throws when used outside of ThemeProvider", () => {
    // Suppress the expected React error boundary output
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<ThemeDisplay />)).toThrow(
      "useTheme must be used within a ThemeProvider"
    );
    consoleError.mockRestore();
  });
});
