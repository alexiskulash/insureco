import React from 'react';
import { ChatButton } from '@carbon/react';
import { Add } from '@carbon/icons-react';

export default {
  title: 'Components/ChatButton',
  component: ChatButton,
};

export const Default = () => (
  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <h3>Chat Button Sizes</h3>
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ChatButton size="sm">Small</ChatButton>
      <ChatButton size="md">Medium</ChatButton>
      <ChatButton size="lg">Large</ChatButton>
    </div>
  </div>
);

export const Kinds = () => (
  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <h3>Chat Button Kinds</h3>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <ChatButton kind="primary">Primary</ChatButton>
      <ChatButton kind="secondary">Secondary</ChatButton>
      <ChatButton kind="tertiary">Tertiary</ChatButton>
      <ChatButton kind="ghost">Ghost</ChatButton>
      <ChatButton kind="danger">Danger</ChatButton>
    </div>
  </div>
);

export const WithIcon = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Chat Button with Icon</h3>
    <ChatButton renderIcon={Add}>Add Chat</ChatButton>
  </div>
);

export const QuickAction = () => (
  <div style={{ padding: '2rem', display: 'flex', gap: '1rem' }}>
    <h3>Quick Actions</h3>
    <ChatButton isQuickAction>Quick Action</ChatButton>
    <ChatButton isQuickAction isSelected>Selected</ChatButton>
    <ChatButton isQuickAction disabled>Disabled</ChatButton>
  </div>
);
