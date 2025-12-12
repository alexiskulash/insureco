import React from 'react';
import { Menu, MenuItem, MenuItemDivider } from '@carbon/react';

export default {
  title: 'Components/Menu',
  component: Menu,
};

export const Default = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Menu</h3>
    <Menu open label="Options">
      <MenuItem label="Option 1" />
      <MenuItem label="Option 2" />
      <MenuItem label="Option 3" />
      <MenuItemDivider />
      <MenuItem label="Delete" kind="danger" />
    </Menu>
  </div>
);

export const WithSubmenu = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Menu with Submenu</h3>
    <Menu open label="File">
      <MenuItem label="New" />
      <MenuItem label="Open" />
      <MenuItem label="Save" />
      <MenuItemDivider />
      <MenuItem label="Export" />
      <MenuItemDivider />
      <MenuItem label="Exit" />
    </Menu>
  </div>
);
