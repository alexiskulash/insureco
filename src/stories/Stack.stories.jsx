import React from 'react';
import { Stack, Button } from '@carbon/react';

const ExampleBox = ({ children }) => (
  <div style={{ 
    padding: '1rem', 
    background: 'var(--background-secondary)', 
    border: '1px solid var(--border-subtle)',
    borderRadius: '4px'
  }}>
    {children}
  </div>
);

export default {
  title: 'Components/Stack',
  component: Stack,
};

export const Default = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Vertical Stack</h3>
    <Stack gap={5}>
      <ExampleBox>Item 1</ExampleBox>
      <ExampleBox>Item 2</ExampleBox>
      <ExampleBox>Item 3</ExampleBox>
    </Stack>
  </div>
);

export const Horizontal = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Horizontal Stack</h3>
    <Stack orientation="horizontal" gap={5}>
      <ExampleBox>Item 1</ExampleBox>
      <ExampleBox>Item 2</ExampleBox>
      <ExampleBox>Item 3</ExampleBox>
    </Stack>
  </div>
);

export const WithButtons = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Stack with Buttons</h3>
    <Stack gap={3}>
      <Button>Primary Action</Button>
      <Button kind="secondary">Secondary Action</Button>
      <Button kind="tertiary">Tertiary Action</Button>
    </Stack>
  </div>
);

export const DifferentGaps = () => (
  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
    <div>
      <h4>Gap 3</h4>
      <Stack gap={3}>
        <ExampleBox>Small gap</ExampleBox>
        <ExampleBox>Small gap</ExampleBox>
      </Stack>
    </div>
    <div>
      <h4>Gap 5</h4>
      <Stack gap={5}>
        <ExampleBox>Medium gap</ExampleBox>
        <ExampleBox>Medium gap</ExampleBox>
      </Stack>
    </div>
    <div>
      <h4>Gap 7</h4>
      <Stack gap={7}>
        <ExampleBox>Large gap</ExampleBox>
        <ExampleBox>Large gap</ExampleBox>
      </Stack>
    </div>
  </div>
);
