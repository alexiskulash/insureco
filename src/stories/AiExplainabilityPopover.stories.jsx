import React from 'react';
import {
  AiExplainabilityPopover,
  AiCallout,
} from '../components/AiExplainabilityPopover';

export default {
  title: 'Components/AiExplainabilityPopover',
  component: AiExplainabilityPopover,
};

// ---------------------------------------------------------------------------
// Default – Primary explanation popover
// ---------------------------------------------------------------------------
export const PrimaryExplanation = () => (
  <div style={{ padding: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
    <AiExplainabilityPopover
      title="Name of feature"
      description="High level 1-2 sentence description of how the AI is being used in the UI."
      howItWorks={[
        { keyword: 'Key word.', description: 'Description of key word.' },
        { keyword: 'Key word.', description: 'Description of key word.' },
        { keyword: 'Key word.', description: 'Description of key word.' },
      ]}
      dataTypes={[
        { name: 'Data type 1.', description: "Explain how it's used." },
        { name: 'Data type 2.', description: "Explain how it's used." },
        { name: 'Data type 3.', description: "Explain how it's used." },
      ]}
      aiModel={{ name: 'granite.13b.v2.instruct', url: 'https://www.ibm.com/granite' }}
      additionalDetails="Additional information about data used to fine tune and/or train the model"
      trainingDataSet={{ name: 'IBM Security data piles', url: '#' }}
      onViewDetails={() => alert('View details clicked')}
      caretOffset="right"
    />
  </div>
);

PrimaryExplanation.storyName = 'Primary Explanation';

// ---------------------------------------------------------------------------
// Secondary – Compact AI callout
// ---------------------------------------------------------------------------
export const SecondaryExplanation = () => (
  <div style={{ padding: '2rem' }}>
    <AiCallout message="AI was used to generate this response" />
  </div>
);

SecondaryExplanation.storyName = 'Secondary Explanation (Callout)';

// ---------------------------------------------------------------------------
// Both variants side by side (mirrors the Figma frame)
// ---------------------------------------------------------------------------
export const BothVariants = () => (
  <div
    style={{
      padding: '2rem',
      display: 'flex',
      gap: '2rem',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    }}
  >
    <AiExplainabilityPopover
      title="Name of feature"
      description="High level 1-2 sentence description of how the AI is being used in the UI."
      howItWorks={[
        { keyword: 'Key word.', description: 'Description of key word.' },
        { keyword: 'Key word.', description: 'Description of key word.' },
        { keyword: 'Key word.', description: 'Description of key word.' },
      ]}
      dataTypes={[
        { name: 'Data type 1.', description: "Explain how it's used." },
        { name: 'Data type 2.', description: "Explain how it's used." },
        { name: 'Data type 3.', description: "Explain how it's used." },
      ]}
      aiModel={{ name: 'granite.13b.v2.instruct', url: 'https://www.ibm.com/granite' }}
      additionalDetails="Additional information about data used to fine tune and/or train the model"
      trainingDataSet={{ name: 'IBM Security data piles', url: '#' }}
      onViewDetails={() => alert('View details clicked')}
    />

    <AiCallout message="AI was used to generate this response" />
  </div>
);

BothVariants.storyName = 'Both Variants';

// ---------------------------------------------------------------------------
// Caret positions
// ---------------------------------------------------------------------------
export const CaretPositions = () => (
  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
    {['left', 'center', 'right'].map((pos) => (
      <div key={pos}>
        <p style={{ marginBottom: '0.5rem', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '12px', color: '#525252' }}>
          caretOffset=&quot;{pos}&quot;
        </p>
        <AiExplainabilityPopover
          title="Name of feature"
          description="High level 1-2 sentence description."
          howItWorks={[{ keyword: 'Key word.', description: 'Description.' }]}
          dataTypes={[{ name: 'Data type 1.', description: "Explain." }]}
          aiModel={{ name: 'granite.13b.v2.instruct', url: '#' }}
          additionalDetails="Additional details."
          trainingDataSet={{ name: 'IBM Security data piles', url: '#' }}
          caretOffset={pos}
        />
      </div>
    ))}
  </div>
);

CaretPositions.storyName = 'Caret Positions';
