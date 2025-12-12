import React from 'react';
import { TextInput, PasswordInput } from '@carbon/react';

export default {
  title: 'Components/TextInput',
  component: TextInput,
};

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Text Input</h3>
    <TextInput
      id="text-input-1"
      labelText="Name"
      placeholder="Enter your name"
    />
  </div>
);

export const Types = () => (
  <div style={{ padding: '2rem', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <TextInput
      id="text"
      type="text"
      labelText="Text"
      placeholder="Text input"
    />
    <TextInput
      id="email"
      type="email"
      labelText="Email"
      placeholder="email@example.com"
    />
    <TextInput
      id="number"
      type="number"
      labelText="Number"
      placeholder="123"
    />
    <PasswordInput
      id="password"
      labelText="Password"
      placeholder="Enter password"
    />
  </div>
);

export const WithHelperText = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Text Input with Helper Text</h3>
    <TextInput
      id="text-input-helper"
      labelText="Username"
      helperText="Your username must be unique"
      placeholder="Enter username"
    />
  </div>
);

export const Invalid = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Invalid Text Input</h3>
    <TextInput
      id="text-input-invalid"
      labelText="Email"
      invalid
      invalidText="Please enter a valid email"
      placeholder="email@example.com"
    />
  </div>
);

export const Sizes = () => (
  <div style={{ padding: '2rem', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <TextInput id="sm" size="sm" labelText="Small" placeholder="Small" />
    <TextInput id="md" size="md" labelText="Medium" placeholder="Medium" />
    <TextInput id="lg" size="lg" labelText="Large" placeholder="Large" />
  </div>
);
