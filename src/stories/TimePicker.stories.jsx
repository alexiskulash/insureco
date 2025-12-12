import React from 'react';
import { TimePicker, TimePickerSelect, SelectItem } from '@carbon/react';

export default {
  title: 'Components/TimePicker',
  component: TimePicker,
};

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Time Picker</h3>
    <TimePicker id="time-picker-1" labelText="Select a time">
      <TimePickerSelect id="time-picker-select-1" labelText="Timezone">
        <SelectItem value="et" text="Eastern Time" />
        <SelectItem value="ct" text="Central Time" />
        <SelectItem value="mt" text="Mountain Time" />
        <SelectItem value="pt" text="Pacific Time" />
      </TimePickerSelect>
    </TimePicker>
  </div>
);

export const WithoutTimezone = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Time Picker Without Timezone</h3>
    <TimePicker id="time-picker-2" labelText="Time" />
  </div>
);
