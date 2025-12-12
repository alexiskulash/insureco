import React from 'react';
import { Layer, Button } from '@carbon/react';

export default {
  title: 'Components/Layer',
  component: Layer,
};

const LayerDemo = () => (
  <div style={{ padding: '1rem', background: 'var(--background-secondary)', border: '1px solid var(--border-subtle)' }}>
    <p>This content is in a layer</p>
    <Button size="sm">Button in layer</Button>
  </div>
);

export const Default = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Layer Component</h3>
    <Layer>
      <LayerDemo />
    </Layer>
  </div>
);

export const Nested = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Nested Layers</h3>
    <Layer>
      <div style={{ padding: '1rem', background: 'var(--background-secondary)' }}>
        <p>Layer 1</p>
        <Layer>
          <div style={{ padding: '1rem', background: 'var(--background-tertiary)' }}>
            <p>Layer 2</p>
          </div>
        </Layer>
      </div>
    </Layer>
  </div>
);
