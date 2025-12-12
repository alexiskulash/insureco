import React, { useState } from 'react';
import { Modal, Button } from '@carbon/react';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div style={{ padding: '2rem' }}>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        onRequestClose={() => setOpen(false)}
        modalHeading="Modal heading"
        primaryButtonText="Confirm"
        secondaryButtonText="Cancel"
      >
        <p>This is modal content. You can add any content here.</p>
      </Modal>
    </div>
  );
};

export const PassiveModal = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div style={{ padding: '2rem' }}>
      <Button onClick={() => setOpen(true)}>Open Passive Modal</Button>
      <Modal
        open={open}
        onRequestClose={() => setOpen(false)}
        modalHeading="Passive modal"
        passiveModal
      >
        <p>Passive modals have no footer buttons.</p>
      </Modal>
    </div>
  );
};

export const DangerModal = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div style={{ padding: '2rem' }}>
      <Button kind="danger" onClick={() => setOpen(true)}>Open Danger Modal</Button>
      <Modal
        open={open}
        danger
        onRequestClose={() => setOpen(false)}
        modalHeading="Delete item?"
        primaryButtonText="Delete"
        secondaryButtonText="Cancel"
      >
        <p>Are you sure you want to delete this item? This action cannot be undone.</p>
      </Modal>
    </div>
  );
};
