import React from 'react';
import { IconButton } from '@carbon/react';
import { Add, TrashCan, Edit, Settings, Close } from '@carbon/icons-react';

export default {
  title: 'Components/IconButton',
  component: IconButton,
};

export const Default = () => (
  <div style={{ padding: '2rem', display: 'flex', gap: '1rem' }}>
    <IconButton label="Add"><Add /></IconButton>
    <IconButton label="Edit"><Edit /></IconButton>
    <IconButton label="Delete"><TrashCan /></IconButton>
    <IconButton label="Settings"><Settings /></IconButton>
    <IconButton label="Close"><Close /></IconButton>
  </div>
);

export const Kinds = () => (
  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <div>
      <h4>Primary</h4>
      <IconButton kind="primary" label="Add"><Add /></IconButton>
    </div>
    <div>
      <h4>Secondary</h4>
      <IconButton kind="secondary" label="Add"><Add /></IconButton>
    </div>
    <div>
      <h4>Tertiary</h4>
      <IconButton kind="tertiary" label="Add"><Add /></IconButton>
    </div>
    <div>
      <h4>Ghost</h4>
      <IconButton kind="ghost" label="Add"><Add /></IconButton>
    </div>
    <div>
      <h4>Danger</h4>
      <IconButton kind="danger" label="Delete"><TrashCan /></IconButton>
    </div>
  </div>
);

export const Sizes = () => (
  <div style={{ padding: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <IconButton size="sm" label="Add"><Add /></IconButton>
    <IconButton size="md" label="Add"><Add /></IconButton>
    <IconButton size="lg" label="Add"><Add /></IconButton>
  </div>
);
