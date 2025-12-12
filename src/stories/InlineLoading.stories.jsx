import React from 'react';
import { InlineLoading } from '@carbon/react';

export default {
  title: 'Components/InlineLoading',
  component: InlineLoading,
};

export const Active = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Active Loading</h3>
    <InlineLoading status="active" description="Loading data..." />
  </div>
);

export const Finished = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Finished Loading</h3>
    <InlineLoading status="finished" description="Data loaded!" />
  </div>
);

export const Error = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Error State</h3>
    <InlineLoading status="error" description="Failed to load data" />
  </div>
);

export const AllStates = () => (
  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <InlineLoading status="inactive" description="Not started" />
    <InlineLoading status="active" description="Loading..." />
    <InlineLoading status="finished" description="Complete!" />
    <InlineLoading status="error" description="Error occurred" />
  </div>
);
