import React from 'react';
import { ProgressBar } from '@carbon/react';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
};

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Progress Bar</h3>
    <ProgressBar label="Progress" value={75} max={100} />
  </div>
);

export const Indeterminate = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Indeterminate Progress</h3>
    <ProgressBar label="Loading..." />
  </div>
);

export const WithHelperText = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Progress Bar with Helper Text</h3>
    <ProgressBar 
      label="Upload progress" 
      helperText="75 of 100 MB uploaded"
      value={75} 
      max={100} 
    />
  </div>
);

export const Sizes = () => (
  <div style={{ padding: '2rem', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <div>
      <h4>Small</h4>
      <ProgressBar label="Small progress" size="small" value={50} max={100} />
    </div>
    <div>
      <h4>Big (Default)</h4>
      <ProgressBar label="Big progress" size="big" value={50} max={100} />
    </div>
  </div>
);
