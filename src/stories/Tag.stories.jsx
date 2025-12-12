import React from 'react';
import { Tag } from '@carbon/react';

export default {
  title: 'Components/Tag',
  component: Tag,
};

export const Default = () => (
  <div style={{ padding: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <Tag>Default</Tag>
    <Tag type="red">Red</Tag>
    <Tag type="magenta">Magenta</Tag>
    <Tag type="purple">Purple</Tag>
    <Tag type="blue">Blue</Tag>
    <Tag type="cyan">Cyan</Tag>
    <Tag type="teal">Teal</Tag>
    <Tag type="green">Green</Tag>
    <Tag type="gray">Gray</Tag>
    <Tag type="cool-gray">Cool Gray</Tag>
    <Tag type="warm-gray">Warm Gray</Tag>
  </div>
);

export const Sizes = () => (
  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <div>
      <h4>Small</h4>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Tag size="sm">Small tag</Tag>
        <Tag size="sm" type="blue">Small blue</Tag>
      </div>
    </div>
    <div>
      <h4>Medium</h4>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Tag size="md">Medium tag</Tag>
        <Tag size="md" type="green">Medium green</Tag>
      </div>
    </div>
  </div>
);

export const Filter = () => (
  <div style={{ padding: '2rem', display: 'flex', gap: '1rem' }}>
    <Tag filter onClose={() => console.log('Tag closed')}>
      Filterable tag
    </Tag>
    <Tag filter type="blue" onClose={() => {}}>
      Blue filter
    </Tag>
    <Tag filter type="green" onClose={() => {}}>
      Green filter
    </Tag>
  </div>
);

export const HighContrast = () => (
  <div style={{ padding: '2rem', display: 'flex', gap: '1rem' }}>
    <Tag>Default</Tag>
    <Tag type="high-contrast">High contrast</Tag>
    <Tag type="outline">Outline</Tag>
  </div>
);
