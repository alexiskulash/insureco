import React from 'react';
import { NumberInput } from '@carbon/react';

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
};

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Number Input</h3>
    <NumberInput
      id="number-input-1"
      label="Number input"
      helperText="Enter a number"
      min={0}
      max={100}
      value={50}
    />
  </div>
);

export const WithStep = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Number Input with Step</h3>
    <NumberInput
      id="number-input-2"
      label="Price"
      helperText="Increments of 0.5"
      min={0}
      max={100}
      step={0.5}
      value={10}
    />
  </div>
);

export const Sizes = () => (
  <div style={{ padding: '2rem', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <NumberInput id="num-sm" size="sm" label="Small" />
    <NumberInput id="num-md" size="md" label="Medium" />
    <NumberInput id="num-lg" size="lg" label="Large" />
  </div>
);

export const Disabled = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Disabled Number Input</h3>
    <NumberInput
      id="number-input-disabled"
      label="Disabled"
      value={50}
      disabled
    />
  </div>
);
