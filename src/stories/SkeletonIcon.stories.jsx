import React from 'react';
import { SkeletonIcon } from '@carbon/react';

export default {
  title: 'Components/SkeletonIcon',
  component: SkeletonIcon,
};

export const Default = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Skeleton Icon</h3>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <SkeletonIcon />
      <SkeletonIcon style={{ width: '24px', height: '24px' }} />
      <SkeletonIcon style={{ width: '32px', height: '32px' }} />
      <SkeletonIcon style={{ width: '48px', height: '48px' }} />
    </div>
  </div>
);
