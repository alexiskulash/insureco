import React from 'react';
import { SkeletonPlaceholder } from '@carbon/react';

export default {
  title: 'Components/SkeletonPlaceholder',
  component: SkeletonPlaceholder,
};

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Skeleton Placeholder</h3>
    <SkeletonPlaceholder />
  </div>
);

export const MultipleBlocks = () => (
  <div style={{ padding: '2rem', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <h3>Multiple Placeholders</h3>
    <SkeletonPlaceholder />
    <SkeletonPlaceholder />
    <SkeletonPlaceholder style={{ height: '100px' }} />
  </div>
);
