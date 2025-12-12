import React from 'react';
import { MultiSelect, FilterableMultiSelect } from '@carbon/react';

const items = [
  { id: 'option-1', text: 'Option 1' },
  { id: 'option-2', text: 'Option 2' },
  { id: 'option-3', text: 'Option 3' },
  { id: 'option-4', text: 'Option 4' },
  { id: 'option-5', text: 'Option 5' },
];

export default {
  title: 'Components/MultiSelect',
  component: MultiSelect,
};

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>MultiSelect</h3>
    <MultiSelect
      id="multi-select-1"
      label="Choose options"
      titleText="Select multiple items"
      items={items}
      itemToString={(item) => (item ? item.text : '')}
    />
  </div>
);

export const Filterable = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Filterable MultiSelect</h3>
    <FilterableMultiSelect
      id="filterable-multi-select-1"
      titleText="Select items"
      placeholder="Filter items"
      items={items}
      itemToString={(item) => (item ? item.text : '')}
    />
  </div>
);

export const WithHelperText = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>MultiSelect with Helper Text</h3>
    <MultiSelect
      id="multi-select-2"
      label="Select options"
      titleText="Multiple selection"
      helperText="You can select multiple items"
      items={items}
      itemToString={(item) => (item ? item.text : '')}
    />
  </div>
);
