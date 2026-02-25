import React from 'react';
import AIExplainabilityPopover from '../components/AIExplainabilityPopover';

export default {
  title: 'Components/AIExplainabilityPopover',
  component: AIExplainabilityPopover,
  parameters: {
    docs: {
      description: {
        component:
          'The AI Explainability Popover surfaces transparent information about how AI is used in the UI. ' +
          'It appears when users interact with an AI label. ' +
          'Reference: https://w3.ibm.com/w3publisher/design-for-ai/carbon-for-ai/ai-explainability-popover',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Which variant to render',
    },
    featureName: {
      control: 'text',
      description: 'Heading text for the AI feature (primary only)',
    },
    description: {
      control: 'text',
      description: 'Short description of AI usage (primary only)',
    },
    calloutText: {
      control: 'text',
      description: 'Text shown in the secondary callout',
    },
    additionalDetails: {
      control: 'text',
      description: 'Extra model/training detail text (primary only)',
    },
  },
};

const defaultHowItWorks = [
  { keyword: 'Keyword.', description: 'Description of key word.' },
  { keyword: 'Keyword.', description: 'Description of key word.' },
  { keyword: 'Keyword.', description: 'Description of key word.' },
];

const defaultDataTypes = [
  { label: 'Data type 1.', description: "Explain how it's used." },
  { label: 'Data type 2.', description: "Explain how it's used." },
  { label: 'Data type 3.', description: "Explain how it's used." },
];

const defaultArgs = {
  variant: 'primary',
  featureName: 'Name of feature',
  description:
    'High level 1-2 sentence description of how the AI is being used in the UI.',
  howItWorks: defaultHowItWorks,
  dataTypes: defaultDataTypes,
  aiModel: { name: 'granite.13b.v2.instruct', url: '#' },
  additionalDetails:
    'Additional information about data used to fine tune and/or train the model',
  trainingDataSet: { name: 'IBM Security data piles', url: '#' },
  calloutText: 'AI was used to generate this response',
};

// ── Stories ────────────────────────────────────────────────────────────────

export const PrimaryExplanation = {
  args: { ...defaultArgs, variant: 'primary' },
  render: (args) => (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'flex-start' }}>
      <AIExplainabilityPopover {...args} onViewDetails={() => alert('View details clicked')} />
    </div>
  ),
};

export const SecondaryExplanation = {
  args: { ...defaultArgs, variant: 'secondary' },
  render: (args) => (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'flex-start' }}>
      <AIExplainabilityPopover {...args} />
    </div>
  ),
};

export const BothVariantsSideBySide = {
  args: defaultArgs,
  name: 'Both variants – side by side',
  render: () => (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        gap: '2rem',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      <AIExplainabilityPopover {...defaultArgs} variant="primary" onViewDetails={() => {}} />
      <AIExplainabilityPopover {...defaultArgs} variant="secondary" />
    </div>
  ),
};

export const CustomContent = {
  args: {
    ...defaultArgs,
    featureName: 'Risk Score Prediction',
    description:
      'AI analyzes historical claims data, location risk factors, and property attributes to calculate an accurate risk score.',
    howItWorks: [
      { keyword: 'Data analysis.', description: 'Historical claims are processed to identify patterns.' },
      { keyword: 'Geospatial scoring.', description: 'Location risk is evaluated against regional claim rates.' },
      { keyword: 'Model inference.', description: 'The granite model combines signals to produce a final score.' },
    ],
    dataTypes: [
      { label: 'Claims history.', description: 'Past 5 years of claim records are used.' },
      { label: 'Property data.', description: 'Square footage, age, and construction type.' },
      { label: 'Location data.', description: 'ZIP-level weather and crime statistics.' },
    ],
    aiModel: { name: 'granite.13b.v2.instruct', url: '#' },
    additionalDetails:
      'The model was fine-tuned on 3 million InsureCo property claims from 2018–2023.',
    trainingDataSet: { name: 'InsureCo Claims Dataset 2023', url: '#' },
  },
  render: (args) => (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'flex-start' }}>
      <AIExplainabilityPopover {...args} onViewDetails={() => {}} />
    </div>
  ),
};
