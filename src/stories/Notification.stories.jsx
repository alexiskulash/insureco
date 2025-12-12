import React from 'react';
import { ToastNotification, InlineNotification, ActionableNotification } from '@carbon/react';

export default {
  title: 'Components/Notification',
};

export const Toast = () => (
  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <h3>Toast Notifications</h3>
    <ToastNotification
      title="Success"
      subtitle="Your changes have been saved"
      kind="success"
      timeout={0}
    />
    <ToastNotification
      title="Information"
      subtitle="Here's some helpful information"
      kind="info"
      timeout={0}
    />
    <ToastNotification
      title="Warning"
      subtitle="Please review this warning"
      kind="warning"
      timeout={0}
    />
    <ToastNotification
      title="Error"
      subtitle="An error occurred"
      kind="error"
      timeout={0}
    />
  </div>
);

export const Inline = () => (
  <div style={{ padding: '2rem', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <h3>Inline Notifications</h3>
    <InlineNotification
      title="Success notification"
      subtitle="Your changes have been applied"
      kind="success"
    />
    <InlineNotification
      title="Info notification"
      subtitle="Here's some information"
      kind="info"
    />
    <InlineNotification
      title="Warning notification"
      subtitle="Please check this"
      kind="warning"
    />
    <InlineNotification
      title="Error notification"
      subtitle="Something went wrong"
      kind="error"
    />
  </div>
);

export const Actionable = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Actionable Notification</h3>
    <ActionableNotification
      title="Action required"
      subtitle="Click the button to perform an action"
      kind="warning"
      actionButtonLabel="Take action"
      onActionButtonClick={() => alert('Action clicked')}
    />
  </div>
);
