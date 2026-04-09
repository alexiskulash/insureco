import React from 'react';
import AIExplainer from '../components/AIExplainer';

export default {
  title: 'Components/AIExplainer',
  component: AIExplainer,
  parameters: {
    docs: {
      description: {
        component:
          'IBM Carbon for AI — AI Explainability Popover. Appears when a user interacts with an AI label to learn how AI was used to generate content. Two variants: **primary** (full popover) and **secondary** (compact callout banner).',
      },
    },
  },
};

export const Default = () => (
  <div style={{ padding: '3rem', display: 'flex', justifyContent: 'center' }}>
    <AIExplainer variant="primary" />
  </div>
);

export const PrimaryExplanation = () => (
  <div style={{ padding: '3rem', display: 'flex', justifyContent: 'center' }}>
    <AIExplainer
      variant="primary"
      title="Risk Score Assessment"
      description="AI analyzes your policy details, location data, and historical claims to calculate a personalized risk score."
      howItWorks={[
        { keyword: 'Data collection.', description: 'Policy and location data is gathered securely.' },
        { keyword: 'Pattern analysis.', description: 'Historical claims are compared against similar profiles.' },
        { keyword: 'Score generation.', description: 'A risk score between 0–100 is produced and explained.' },
      ]}
      dataTypes={[
        { label: 'Policy details.', description: 'Coverage type, limits, and deductibles.' },
        { label: 'Location data.', description: 'Regional weather and crime statistics.' },
        { label: 'Claims history.', description: 'Past claims on your account and similar profiles.' },
      ]}
      modelName="granite.13b.v2.instruct"
      modelHref="https://www.ibm.com/products/watsonx-ai"
      additionalDetails="Model fine-tuned on 10 years of InsureCo claims data across 42 states. Retrained quarterly."
      trainingDataLabel="IBM Security data piles"
      trainingDataHref="https://www.ibm.com/security"
      onViewDetails={() => alert('View details clicked')}
    />
  </div>
);

export const SecondaryExplanation = () => (
  <div style={{ padding: '3rem', display: 'flex', justifyContent: 'center' }}>
    <AIExplainer variant="secondary" />
  </div>
);

export const SecondaryCustomMessage = () => (
  <div style={{ padding: '3rem', display: 'flex', justifyContent: 'center' }}>
    <AIExplainer
      variant="secondary"
      message="This quote was generated using AI based on your profile information."
    />
  </div>
);

export const MinimalSections = () => (
  <div style={{ padding: '3rem', display: 'flex', justifyContent: 'center' }}>
    <AIExplainer
      variant="primary"
      title="Quote Estimate"
      description="AI generates an estimated premium based on your submitted details."
      showFunctionDetails={false}
      showModelDetails={false}
      showTrainingData={true}
      trainingDataLabel="InsureCo actuarial tables"
      trainingDataHref="#"
    />
  </div>
);

export const BothVariants = () => (
  <div style={{ padding: '3rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'flex-start' }}>
    <div>
      <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        Primary — Full Popover
      </p>
      <AIExplainer variant="primary" />
    </div>
    <div>
      <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        Secondary — Callout Banner
      </p>
      <AIExplainer variant="secondary" />
    </div>
  </div>
);

export const NoActionsFooter = () => (
  <div style={{ padding: '3rem', display: 'flex', justifyContent: 'center' }}>
    <AIExplainer
      variant="primary"
      title="Fraud Detection"
      description="AI monitors claim patterns in real time to flag potentially fraudulent activity."
      showActions={false}
    />
  </div>
);
