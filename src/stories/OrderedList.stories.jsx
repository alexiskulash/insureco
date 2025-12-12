import React from 'react';
import { OrderedList, ListItem } from '@carbon/react';

export default {
  title: 'Components/OrderedList',
  component: OrderedList,
};

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Ordered List</h3>
    <OrderedList>
      <ListItem>First item in the list</ListItem>
      <ListItem>Second item in the list</ListItem>
      <ListItem>Third item in the list</ListItem>
      <ListItem>Fourth item in the list</ListItem>
    </OrderedList>
  </div>
);

export const Nested = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Nested Ordered List</h3>
    <OrderedList>
      <ListItem>
        First level item
        <OrderedList nested>
          <ListItem>Nested item 1</ListItem>
          <ListItem>Nested item 2</ListItem>
        </OrderedList>
      </ListItem>
      <ListItem>Second level item</ListItem>
      <ListItem>Third level item</ListItem>
    </OrderedList>
  </div>
);
