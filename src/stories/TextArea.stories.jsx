import React from 'react';
import { TextArea } from '@carbon/react';

export default {
  title: 'Components/TextArea',
  component: TextArea,
};

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Text Area</h3>
    <TextArea
      id="textarea-1"
      labelText="Comments"
      placeholder="Enter your comments here..."
      rows={4}
    />
  </div>
);

export const WithHelperText = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Text Area with Helper Text</h3>
    <TextArea
      id="textarea-2"
      labelText="Feedback"
      helperText="Please provide detailed feedback"
      placeholder="Type here..."
      rows={4}
    />
  </div>
);

export const Invalid = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Invalid Text Area</h3>
    <TextArea
      id="textarea-3"
      labelText="Description"
      invalid
      invalidText="This field is required"
      rows={4}
    />
  </div>
);

export const Disabled = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Disabled Text Area</h3>
    <TextArea
      id="textarea-4"
      labelText="Disabled"
      placeholder="Disabled text area"
      disabled
      rows={4}
    />
  </div>
);
