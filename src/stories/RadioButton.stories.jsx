import React from 'react';
import { RadioButton, RadioButtonGroup } from '@carbon/react';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
};

export const Default = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Radio Button Group</h3>
    <RadioButtonGroup legendText="Select an option" name="radio-group-1" defaultSelected="radio-1">
      <RadioButton labelText="Option 1" value="radio-1" id="radio-1" />
      <RadioButton labelText="Option 2" value="radio-2" id="radio-2" />
      <RadioButton labelText="Option 3" value="radio-3" id="radio-3" />
    </RadioButtonGroup>
  </div>
);

export const Vertical = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Vertical Radio Group</h3>
    <RadioButtonGroup legendText="Choose one" name="radio-group-2" orientation="vertical">
      <RadioButton labelText="First choice" value="choice-1" id="choice-1" />
      <RadioButton labelText="Second choice" value="choice-2" id="choice-2" />
      <RadioButton labelText="Third choice" value="choice-3" id="choice-3" />
    </RadioButtonGroup>
  </div>
);

export const WithDisabled = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Radio Group with Disabled Option</h3>
    <RadioButtonGroup legendText="Options" name="radio-group-3">
      <RadioButton labelText="Enabled option" value="enabled" id="enabled-1" />
      <RadioButton labelText="Disabled option" value="disabled" id="disabled-1" disabled />
      <RadioButton labelText="Another enabled" value="enabled-2" id="enabled-2" />
    </RadioButtonGroup>
  </div>
);
