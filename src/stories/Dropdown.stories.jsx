import React from 'react';
import { Dropdown } from '@carbon/react';

const items = [
  { id: 'option-1', text: 'Option 1' },
  { id: 'option-2', text: 'Option 2' },
  { id: 'option-3', text: 'Option 3' },
  { id: 'option-4', text: 'Option 4' },
];

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Dropdown</h3>
    <Dropdown
      id="dropdown-1"
      titleText="Select an option"
      helperText="Choose one option"
      label="Choose an option"
      items={items}
      itemToString={(item) => (item ? item.text : '')}
    />
  </div>
);

export const Sizes = () => (
  <div style={{ padding: '2rem', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Dropdown
      id="dropdown-sm"
      size="sm"
      titleText="Small"
      label="Small dropdown"
      items={items}
      itemToString={(item) => (item ? item.text : '')}
    />
    <Dropdown
      id="dropdown-md"
      size="md"
      titleText="Medium"
      label="Medium dropdown"
      items={items}
      itemToString={(item) => (item ? item.text : '')}
    />
    <Dropdown
      id="dropdown-lg"
      size="lg"
      titleText="Large"
      label="Large dropdown"
      items={items}
      itemToString={(item) => (item ? item.text : '')}
    />
  </div>
);
