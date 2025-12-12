import React from 'react';
import { Layer } from '@carbon/react';

export const WithLayer = ({ children }) => {
  if (typeof children === 'function') {
    return (
      <Layer>
        {(layer) => children(layer)}
      </Layer>
    );
  }
  
  return <Layer>{children}</Layer>;
};
