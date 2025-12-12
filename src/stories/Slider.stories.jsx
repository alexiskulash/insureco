import React from 'react';
import { Slider } from '@carbon/react';

export default {
  title: 'Components/Slider',
  component: Slider,
};

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Slider</h3>
    <Slider
      labelText="Slider label"
      id="slider-1"
      min={0}
      max={100}
      value={50}
    />
  </div>
);

export const WithStep = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Slider with Step</h3>
    <Slider
      labelText="Volume"
      id="slider-2"
      min={0}
      max={100}
      step={10}
      value={50}
    />
  </div>
);

export const Disabled = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Disabled Slider</h3>
    <Slider
      labelText="Disabled slider"
      id="slider-3"
      min={0}
      max={100}
      value={30}
      disabled
    />
  </div>
);

export const WithInputField = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Slider with Input Field</h3>
    <Slider
      labelText="Price range"
      id="slider-4"
      min={0}
      max={1000}
      value={500}
      stepMultiplier={10}
      hideTextInput={false}
    />
  </div>
);
