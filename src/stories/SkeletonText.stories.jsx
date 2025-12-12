import React from 'react';
import { SkeletonText } from '@carbon/react';

export default {
  title: 'Components/SkeletonText',
  component: SkeletonText,
};

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Skeleton Text</h3>
    <SkeletonText />
  </div>
);

export const Heading = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Skeleton Heading</h3>
    <SkeletonText heading />
  </div>
);

export const MultipleLines = () => (
  <div style={{ padding: '2rem', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <h3>Multiple Text Lines</h3>
    <SkeletonText lineCount={4} />
  </div>
);
