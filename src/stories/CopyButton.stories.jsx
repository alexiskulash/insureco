import React from 'react';
import { CopyButton } from '@carbon/react';

export default {
  title: 'Components/CopyButton',
  component: CopyButton,
};

export const Default = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Copy Button</h3>
    <CopyButton feedback="Copied!" feedbackTimeout={2000} />
  </div>
);

export const WithCustomFeedback = () => (
  <div style={{ padding: '2rem', display: 'flex', gap: '1rem' }}>
    <CopyButton feedback="Text copied!" />
    <CopyButton feedback="Done!" />
    <CopyButton feedback="✓ Copied" />
  </div>
);
