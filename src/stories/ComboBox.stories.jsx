import React from 'react';
import { ComboBox } from '@carbon/react';

const items = [
  { id: 'option-1', text: 'Option 1' },
  { id: 'option-2', text: 'Option 2' },
  { id: 'option-3', text: 'Option 3' },
  { id: 'option-4', text: 'Option 4' },
  { id: 'option-5', text: 'Option 5' },
];

export default {
  title: 'Components/ComboBox',
  component: ComboBox,
};

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>ComboBox</h3>
    <ComboBox
      id="combobox-1"
      items={items}
      itemToString={(item) => (item ? item.text : '')}
      titleText="Select an option"
      helperText="Start typing to filter options"
    />
  </div>
);

export const WithPlaceholder = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>ComboBox with Placeholder</h3>
    <ComboBox
      id="combobox-2"
      items={items}
      itemToString={(item) => (item ? item.text : '')}
      titleText="Choose item"
      placeholder="Filter..."
    />
  </div>
);

export const Disabled = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Disabled ComboBox</h3>
    <ComboBox
      id="combobox-3"
      items={items}
      itemToString={(item) => (item ? item.text : '')}
      titleText="Disabled"
      disabled
    />
  </div>
);
