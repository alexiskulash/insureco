import React from 'react';
import { Tooltip, Button } from '@carbon/react';
import { Information } from '@carbon/icons-react';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

export const Default = () => (
  <div style={{ padding: '4rem' }}>
    <h3>Tooltip</h3>
    <Tooltip label="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  </div>
);

export const Alignments = () => (
  <div style={{ padding: '4rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
    <Tooltip label="Top aligned" align="top">
      <Button>Top</Button>
    </Tooltip>
    <Tooltip label="Right aligned" align="right">
      <Button>Right</Button>
    </Tooltip>
    <Tooltip label="Bottom aligned" align="bottom">
      <Button>Bottom</Button>
    </Tooltip>
    <Tooltip label="Left aligned" align="left">
      <Button>Left</Button>
    </Tooltip>
  </div>
);

export const WithIcon = () => (
  <div style={{ padding: '4rem' }}>
    <h3>Tooltip with Icon</h3>
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      More information
      <Tooltip label="This provides additional context">
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }}>
          <Information />
        </button>
      </Tooltip>
    </p>
  </div>
);
