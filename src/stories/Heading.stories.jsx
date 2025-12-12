import React from 'react';
import { Heading } from '@carbon/react';

export default {
  title: 'Components/Heading',
  component: Heading,
};

export const Default = () => (
  <div style={{ padding: '2rem' }}>
    <Heading>Default Heading</Heading>
  </div>
);

export const AllLevels = () => (
  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <h3>Heading Levels</h3>
    <Heading as="h1">Heading 1</Heading>
    <Heading as="h2">Heading 2</Heading>
    <Heading as="h3">Heading 3</Heading>
    <Heading as="h4">Heading 4</Heading>
    <Heading as="h5">Heading 5</Heading>
    <Heading as="h6">Heading 6</Heading>
  </div>
);
