import React from 'react';
import { DatePicker, DatePickerInput } from '@carbon/react';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
};

export const Simple = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Simple Date Picker</h3>
    <DatePicker datePickerType="simple">
      <DatePickerInput
        id="date-picker-simple"
        labelText="Date"
        placeholder="mm/dd/yyyy"
      />
    </DatePicker>
  </div>
);

export const Single = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Single Date Picker</h3>
    <DatePicker datePickerType="single">
      <DatePickerInput
        id="date-picker-single"
        labelText="Start date"
        placeholder="mm/dd/yyyy"
      />
    </DatePicker>
  </div>
);

export const Range = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Range Date Picker</h3>
    <DatePicker datePickerType="range">
      <DatePickerInput
        id="date-picker-range-start"
        labelText="Start date"
        placeholder="mm/dd/yyyy"
      />
      <DatePickerInput
        id="date-picker-range-end"
        labelText="End date"
        placeholder="mm/dd/yyyy"
      />
    </DatePicker>
  </div>
);
