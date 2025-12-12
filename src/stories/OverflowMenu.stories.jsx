import React from 'react';
import { OverflowMenu, OverflowMenuItem } from '@carbon/react';

export default {
  title: 'Components/OverflowMenu',
  component: OverflowMenu,
};

export const Default = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Overflow Menu</h3>
    <OverflowMenu>
      <OverflowMenuItem itemText="Option 1" />
      <OverflowMenuItem itemText="Option 2" />
      <OverflowMenuItem itemText="Option 3" />
      <OverflowMenuItem itemText="Option 4" hasDivider />
      <OverflowMenuItem itemText="Delete" isDelete />
    </OverflowMenu>
  </div>
);

export const Sizes = () => (
  <div style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
    <div>
      <h4>Small</h4>
      <OverflowMenu size="sm">
        <OverflowMenuItem itemText="Option 1" />
        <OverflowMenuItem itemText="Option 2" />
      </OverflowMenu>
    </div>
    <div>
      <h4>Medium</h4>
      <OverflowMenu size="md">
        <OverflowMenuItem itemText="Option 1" />
        <OverflowMenuItem itemText="Option 2" />
      </OverflowMenu>
    </div>
    <div>
      <h4>Large</h4>
      <OverflowMenu size="lg">
        <OverflowMenuItem itemText="Option 1" />
        <OverflowMenuItem itemText="Option 2" />
      </OverflowMenu>
    </div>
  </div>
);

export const WithIcons = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Overflow Menu with Danger Action</h3>
    <OverflowMenu>
      <OverflowMenuItem itemText="Edit" />
      <OverflowMenuItem itemText="Duplicate" />
      <OverflowMenuItem itemText="Share" />
      <OverflowMenuItem hasDivider />
      <OverflowMenuItem itemText="Delete" isDelete />
    </OverflowMenu>
  </div>
);
