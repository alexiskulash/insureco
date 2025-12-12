import React from 'react';
import { FeatureFlags } from '@carbon/react';

export const WithFeatureFlags = ({ children, flags = {} }) => {
  return (
    <FeatureFlags flags={flags}>
      {children}
    </FeatureFlags>
  );
};
