import React from 'react';
import { Checkbox, CheckboxGroup } from '@carbon/react';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export const Default = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Checkbox</h3>
    <Checkbox labelText="Checkbox label" id="checkbox-1" />
    <Checkbox labelText="Checked checkbox" id="checkbox-2" defaultChecked />
    <Checkbox labelText="Disabled checkbox" id="checkbox-3" disabled />
    <Checkbox labelText="Disabled checked" id="checkbox-4" disabled defaultChecked />
  </div>
);

export const Group = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Checkbox Group</h3>
    <CheckboxGroup legendText="Select options">
      <Checkbox labelText="Option 1" id="checkbox-group-1" />
      <Checkbox labelText="Option 2" id="checkbox-group-2" />
      <Checkbox labelText="Option 3" id="checkbox-group-3" />
    </CheckboxGroup>
  </div>
);

export const WithHelperText = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Checkbox with Helper Text</h3>
    <Checkbox 
      labelText="Accept terms and conditions" 
      id="checkbox-helper" 
      helperText="You must accept to continue"
    />
  </div>
);
