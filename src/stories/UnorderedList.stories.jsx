import React from 'react';
import { UnorderedList, ListItem } from '@carbon/react';

export default {
  title: 'Components/UnorderedList',
  component: UnorderedList,
};

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Unordered List</h3>
    <UnorderedList>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
    </UnorderedList>
  </div>
);

export const Nested = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Nested Unordered List</h3>
    <UnorderedList>
      <ListItem>
        Parent item
        <UnorderedList nested>
          <ListItem>Nested item</ListItem>
          <ListItem>Nested item</ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem>Another parent item</ListItem>
    </UnorderedList>
  </div>
);
