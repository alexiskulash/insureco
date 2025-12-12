import React from 'react';
import { Form, TextInput, Button, Stack } from '@carbon/react';

export default {
  title: 'Components/Form',
  component: Form,
};

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Form</h3>
    <Form>
      <Stack gap={5}>
        <TextInput
          id="text-input-1"
          labelText="First name"
          placeholder="Enter first name"
        />
        <TextInput
          id="text-input-2"
          labelText="Last name"
          placeholder="Enter last name"
        />
        <TextInput
          id="text-input-3"
          type="email"
          labelText="Email"
          placeholder="Enter email"
        />
        <Button type="submit">Submit</Button>
      </Stack>
    </Form>
  </div>
);
