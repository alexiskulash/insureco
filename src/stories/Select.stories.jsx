import React from 'react';
import { Select, SelectItem } from '@carbon/react';

export default {
  title: 'Components/Select',
  component: Select,
};

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Select</h3>
    <Select id="select-1" labelText="Select an option" helperText="Choose one">
      <SelectItem text="Choose an option" value="placeholder" />
      <SelectItem text="Option 1" value="option-1" />
      <SelectItem text="Option 2" value="option-2" />
      <SelectItem text="Option 3" value="option-3" />
      <SelectItem text="Option 4" value="option-4" />
    </Select>
  </div>
);

export const Inline = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Inline Select</h3>
    <Select id="select-2" inline labelText="Inline select">
      <SelectItem text="Option 1" value="option-1" />
      <SelectItem text="Option 2" value="option-2" />
      <SelectItem text="Option 3" value="option-3" />
    </Select>
  </div>
);

export const Sizes = () => (
  <div style={{ padding: '2rem', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Select id="select-sm" size="sm" labelText="Small">
      <SelectItem text="Option 1" value="1" />
      <SelectItem text="Option 2" value="2" />
    </Select>
    <Select id="select-md" size="md" labelText="Medium">
      <SelectItem text="Option 1" value="1" />
      <SelectItem text="Option 2" value="2" />
    </Select>
    <Select id="select-lg" size="lg" labelText="Large">
      <SelectItem text="Option 1" value="1" />
      <SelectItem text="Option 2" value="2" />
    </Select>
  </div>
);
