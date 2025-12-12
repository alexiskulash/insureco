import React from 'react';
import { Loading } from '@carbon/react';

export default {
  title: 'Components/Loading',
  component: Loading,
};

export const Default = () => (
  <div style={{ padding: '2rem', height: '200px', position: 'relative' }}>
    <h3>Default Loading</h3>
    <Loading />
  </div>
);

export const WithDescription = () => (
  <div style={{ padding: '2rem', height: '200px', position: 'relative' }}>
    <h3>Loading with Description</h3>
    <Loading description="Loading data..." withOverlay={false} />
  </div>
);

export const Small = () => (
  <div style={{ padding: '2rem', height: '100px', position: 'relative' }}>
    <h3>Small Loading</h3>
    <Loading small withOverlay={false} />
  </div>
);
