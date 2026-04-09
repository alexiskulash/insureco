import React from 'react';
import AIExplainer from '../components/AIExplainer';

export default {
  title: 'Components/AIExplainer',
  component: AIExplainer,
  parameters: {
    docs: {
      description: {
        component:
          'IBM Carbon for AI — AI Explainability Popover. Surfaces when a user interacts with an AI label to understand how AI was used to generate content. Follows the [IBM Carbon for AI explainability guidelines](https://w3.ibm.com/w3publisher/design-for-ai/carbon-for-ai/ai-explainability-popover).\n\nTwo variants:\n- **primary** — Full popover with feature title, how-it-works steps, data types used, AI model info, additional details, training data source, and a "View details" footer action.\n- **secondary** — Compact callout banner for inline use (e.g. "AI was used to generate this response").',
      },
    },
  },
  argTypes: {
    variant: {
      description: 'Selects between the full explainability popover (`primary`) or the compact inline callout banner (`secondary`).',
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    title: {
      description: 'Name of the AI-powered feature being explained. Displayed as the popover heading. *(Primary only)*',
      control: 'text',
      table: {
        defaultValue: { summary: 'Risk Score Assessment' },
      },
    },
    description: {
      description: 'One or two sentences explaining how AI is being used in this specific UI context. Shown beneath the title. *(Primary only)*',
      control: 'text',
    },
    showFunctionDetails: {
      description: 'Toggles the "How it works" and "Data types used" section. *(Primary only)*',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    howItWorks: {
      description: 'Ordered list of steps describing how the AI feature works. Each item has a `keyword` (bold) and a `description`. *(Primary only)*',
      control: 'object',
    },
    dataTypes: {
      description: 'Dash-separated list of data types the AI uses. Each item has a `label` (bold) and a `description`. *(Primary only)*',
      control: 'object',
    },
    showModelDetails: {
      description: 'Toggles the "AI model" and "Additional details" section. *(Primary only)*',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    modelName: {
      description: 'Display name of the AI model. Rendered as an external link. *(Primary only)*',
      control: 'text',
      table: {
        defaultValue: { summary: 'granite.13b.v2.instruct' },
      },
    },
    modelHref: {
      description: 'URL linking to the AI model documentation or product page. *(Primary only)*',
      control: 'text',
    },
    additionalDetails: {
      description: 'Free-text field for extra context about the data used to fine-tune or train the model. *(Primary only)*',
      control: 'text',
    },
    showTrainingData: {
      description: 'Toggles the "Training data set" section. *(Primary only)*',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    trainingDataLabel: {
      description: 'Display name of the training data source. Rendered as an external link. *(Primary only)*',
      control: 'text',
      table: {
        defaultValue: { summary: 'IBM Security data piles' },
      },
    },
    trainingDataHref: {
      description: 'URL linking to the training dataset documentation or source. *(Primary only)*',
      control: 'text',
    },
    showActions: {
      description: 'Toggles the "View details" footer button. Disable when a full details page is not available. *(Primary only)*',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    onViewDetails: {
      description: 'Callback fired when the "View details" footer button is clicked. *(Primary only)*',
      action: 'viewDetails clicked',
    },
    message: {
      description: 'Short message shown inside the secondary callout banner. *(Secondary only)*',
      control: 'text',
      table: {
        defaultValue: { summary: 'AI was used to generate this response' },
      },
    },
  },
  args: {
    variant: 'primary',
    title: 'Risk Score Assessment',
    description:
      'AI analyzes your policy details, location data, and historical claims to calculate a personalized risk score for your coverage.',
    showFunctionDetails: true,
    howItWorks: [
      { keyword: 'Data collection.', description: 'Policy details and location data are gathered securely from your profile.' },
      { keyword: 'Pattern analysis.', description: 'Historical claims are compared against similar risk profiles across 42 states.' },
      { keyword: 'Score generation.', description: 'A risk score between 0–100 is produced and used to tailor your premium.' },
    ],
    dataTypes: [
      { label: 'Policy details.', description: 'Coverage type, limits, and current deductibles.' },
      { label: 'Location data.', description: 'Regional weather events, crime statistics, and zip-code risk factors.' },
      { label: 'Claims history.', description: 'Past claims filed on your account and anonymized comparable profiles.' },
    ],
    showModelDetails: true,
    modelName: 'granite.13b.v2.instruct',
    modelHref: 'https://www.ibm.com/products/watsonx-ai',
    additionalDetails:
      'Model fine-tuned on 10 years of InsureCo claims data across 42 states. Evaluated quarterly for accuracy and fairness drift.',
    showTrainingData: true,
    trainingDataLabel: 'IBM Security data piles',
    trainingDataHref: 'https://www.ibm.com/security',
    showActions: true,
    message: 'AI was used to generate this response',
  },
};

export const Default = (args) => (
  <div style={{ padding: '3rem', display: 'flex', justifyContent: 'center' }}>
    <AIExplainer {...args} />
  </div>
);

export const PrimaryExplanation = () => (
  <div style={{ padding: '3rem', display: 'flex', justifyContent: 'center' }}>
    <AIExplainer
      variant="primary"
      title="Risk Score Assessment"
      description="AI analyzes your policy details, location data, and historical claims to calculate a personalized risk score for your coverage."
      howItWorks={[
        { keyword: 'Data collection.', description: 'Policy details and location data are gathered securely from your profile.' },
        { keyword: 'Pattern analysis.', description: 'Historical claims are compared against similar risk profiles across 42 states.' },
        { keyword: 'Score generation.', description: 'A risk score between 0–100 is produced and used to tailor your premium.' },
      ]}
      dataTypes={[
        { label: 'Policy details.', description: 'Coverage type, limits, and current deductibles.' },
        { label: 'Location data.', description: 'Regional weather events, crime statistics, and zip-code risk factors.' },
        { label: 'Claims history.', description: 'Past claims filed on your account and anonymized comparable profiles.' },
      ]}
      modelName="granite.13b.v2.instruct"
      modelHref="https://www.ibm.com/products/watsonx-ai"
      additionalDetails="Model fine-tuned on 10 years of InsureCo claims data across 42 states. Evaluated quarterly for accuracy and fairness drift."
      trainingDataLabel="IBM Security data piles"
      trainingDataHref="https://www.ibm.com/security"
    />
  </div>
);
PrimaryExplanation.storyName = 'Primary — Risk Score';

export const PrimaryFraudDetection = () => (
  <div style={{ padding: '3rem', display: 'flex', justifyContent: 'center' }}>
    <AIExplainer
      variant="primary"
      title="Fraud Detection"
      description="AI monitors claim submission patterns in real time to flag activity that may indicate fraudulent behavior."
      howItWorks={[
        { keyword: 'Submission review.', description: 'Each claim is checked against known fraud indicators at submission.' },
        { keyword: 'Behavioral analysis.', description: 'Account activity is compared to typical patterns for similar policyholders.' },
        { keyword: 'Risk flagging.', description: 'High-risk claims are queued for manual review by the claims team.' },
      ]}
      dataTypes={[
        { label: 'Claim metadata.', description: 'Date, time, location, and category of each claim submission.' },
        { label: 'Account history.', description: 'Frequency and value of prior claims on your policy.' },
        { label: 'Network signals.', description: 'Anonymized cross-account patterns used to detect organized fraud rings.' },
      ]}
      modelName="granite.13b.v2.instruct"
      modelHref="https://www.ibm.com/products/watsonx-ai"
      additionalDetails="Model trained on InsureCo's adjudicated claims database. Compliant with state insurance fraud reporting requirements."
      trainingDataLabel="IBM Security data piles"
      trainingDataHref="https://www.ibm.com/security"
    />
  </div>
);
PrimaryFraudDetection.storyName = 'Primary — Fraud Detection';

export const SecondaryExplanation = () => (
  <div style={{ padding: '3rem', display: 'flex', justifyContent: 'center' }}>
    <AIExplainer variant="secondary" />
  </div>
);
SecondaryExplanation.storyName = 'Secondary — Default';

export const SecondaryCustomMessage = () => (
  <div style={{ padding: '3rem', display: 'flex', justifyContent: 'center' }}>
    <AIExplainer
      variant="secondary"
      message="This premium estimate was generated using AI based on your submitted profile information."
    />
  </div>
);
SecondaryCustomMessage.storyName = 'Secondary — Custom Message';

export const MinimalSections = () => (
  <div style={{ padding: '3rem', display: 'flex', justifyContent: 'center' }}>
    <AIExplainer
      variant="primary"
      title="Quote Estimate"
      description="AI generates an estimated premium based on your profile and coverage selections."
      showFunctionDetails={false}
      showModelDetails={false}
      showTrainingData
      trainingDataLabel="InsureCo actuarial tables"
      trainingDataHref="https://www.insureco.com/actuarial"
    />
  </div>
);
MinimalSections.storyName = 'Primary — Minimal (Training Data Only)';

export const NoActionsFooter = () => (
  <div style={{ padding: '3rem', display: 'flex', justifyContent: 'center' }}>
    <AIExplainer
      variant="primary"
      title="Coverage Recommendation"
      description="AI reviews your asset profile and suggests coverage levels tailored to your risk exposure."
      howItWorks={[
        { keyword: 'Asset review.', description: 'Your home, vehicle, and personal property values are assessed.' },
        { keyword: 'Gap analysis.', description: 'Current coverage is compared against recommended minimums for your profile.' },
        { keyword: 'Recommendation.', description: 'Coverage adjustments are suggested with plain-language explanations.' },
      ]}
      dataTypes={[
        { label: 'Asset values.', description: 'Declared property and vehicle values from your policy.' },
        { label: 'Coverage limits.', description: 'Current deductibles and liability caps across active policies.' },
      ]}
      modelName="granite.13b.v2.instruct"
      modelHref="https://www.ibm.com/products/watsonx-ai"
      additionalDetails="Recommendations are non-binding and subject to underwriting review."
      showTrainingData={false}
      showActions={false}
    />
  </div>
);
NoActionsFooter.storyName = 'Primary — No Footer Action';

export const BothVariants = () => (
  <div style={{ padding: '3rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'flex-start' }}>
    <div>
      <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        Primary — Full Popover
      </p>
      <AIExplainer
        variant="primary"
        title="Risk Score Assessment"
        description="AI analyzes your policy details, location data, and historical claims to calculate a personalized risk score."
        howItWorks={[
          { keyword: 'Data collection.', description: 'Policy details and location data are gathered securely from your profile.' },
          { keyword: 'Pattern analysis.', description: 'Historical claims are compared against similar risk profiles.' },
          { keyword: 'Score generation.', description: 'A risk score between 0–100 is produced and used to tailor your premium.' },
        ]}
        dataTypes={[
          { label: 'Policy details.', description: 'Coverage type, limits, and current deductibles.' },
          { label: 'Location data.', description: 'Regional weather events, crime statistics, and zip-code risk factors.' },
          { label: 'Claims history.', description: 'Past claims filed on your account and anonymized comparable profiles.' },
        ]}
        modelName="granite.13b.v2.instruct"
        modelHref="https://www.ibm.com/products/watsonx-ai"
        additionalDetails="Model fine-tuned on 10 years of InsureCo claims data across 42 states."
        trainingDataLabel="IBM Security data piles"
        trainingDataHref="https://www.ibm.com/security"
      />
    </div>
    <div>
      <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        Secondary — Callout Banner
      </p>
      <AIExplainer
        variant="secondary"
        message="This premium estimate was generated using AI based on your submitted profile information."
      />
    </div>
  </div>
);
BothVariants.storyName = 'Both Variants';
