import React from 'react';
import { Toggle } from '@carbon/react';

export default {
  title: 'Components/Toggle',
  component: Toggle,
};

export const Default = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Toggle</h3>
    <Toggle labelText="Toggle" id="toggle-1" />
  </div>
);

export const Toggled = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Default Toggled On</h3>
    <Toggle labelText="Enabled by default" id="toggle-2" defaultToggled />
  </div>
);

export const Sizes = () => (
  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Toggle labelText="Small toggle" id="toggle-sm" size="sm" />
    <Toggle labelText="Medium toggle" id="toggle-md" size="md" />
  </div>
);

export const Disabled = () => (
  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Toggle labelText="Disabled off" id="toggle-disabled-off" disabled />
    <Toggle labelText="Disabled on" id="toggle-disabled-on" disabled defaultToggled />
  </div>
);

export const WithLabels = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Toggle with Custom Labels</h3>
    <Toggle 
      labelText="Notifications" 
      labelA="Off" 
      labelB="On" 
      id="toggle-labels" 
      defaultToggled 
    />
  </div>
);
