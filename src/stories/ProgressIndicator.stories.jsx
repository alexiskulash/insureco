import React from 'react';
import { ProgressIndicator, ProgressStep } from '@carbon/react';

export default {
  title: 'Components/ProgressIndicator',
  component: ProgressIndicator,
};

export const Default = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Progress Indicator</h3>
    <ProgressIndicator currentIndex={1}>
      <ProgressStep label="First step" description="Step 1" />
      <ProgressStep label="Second step" description="Step 2" />
      <ProgressStep label="Third step" description="Step 3" />
      <ProgressStep label="Fourth step" description="Step 4" />
    </ProgressIndicator>
  </div>
);

export const Vertical = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Vertical Progress Indicator</h3>
    <ProgressIndicator currentIndex={2} vertical>
      <ProgressStep label="First step" description="Completed" />
      <ProgressStep label="Second step" description="Completed" />
      <ProgressStep label="Third step" description="In progress" />
      <ProgressStep label="Fourth step" description="Not started" />
    </ProgressIndicator>
  </div>
);

export const Spaced = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Spaced Progress Indicator</h3>
    <ProgressIndicator currentIndex={1} spaceEqually>
      <ProgressStep label="Step 1" />
      <ProgressStep label="Step 2" />
      <ProgressStep label="Step 3" />
    </ProgressIndicator>
  </div>
);
