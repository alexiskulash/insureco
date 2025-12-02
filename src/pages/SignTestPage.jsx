import React, { useState } from 'react';
import {
  Grid,
  Column,
  Form,
  Stack,
  TextInput,
  Button,
  Heading,
  Tile,
  DatePickerInput,
  DatePicker,
} from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import './SignTestPage.scss';

export default function SignTestPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const isFormValid = () => {
    return formData.firstName && formData.lastName && formData.email && formData.phone;
  };

  return (
    <Grid className="sign-test-page sign-test-container">
      <Column sm={4} md={8} lg={{ span: 12, offset: 2 }} xlg={{ span: 10, offset: 3 }}>
        <header className="sign-test-header">
          <Heading className="sign-test-title">Sign Up for InsureCo</Heading>
          <p className="sign-test-subtitle">
            Get started with your insurance coverage in just a few steps
          </p>
        </header>

        <Tile className="sign-test-progress">
          <div className="progress-label">Step 1 of 5</div>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: '25%' }}></div>
          </div>
        </Tile>

        <Form className="sign-test-form" onSubmit={handleSubmit}>
          <Stack gap={7} className="sign-test-form-content">
            <header className="form-section-header">
              <Heading className="form-section-title">Personal Information</Heading>
              <p className="form-section-description">
                Let's start with some basic information about you.
              </p>
            </header>

            <Stack gap={6}>
              <TextInput
                id="firstName"
                labelText="First Name"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={(e) => updateFormData('firstName', e.target.value)}
                required
              />

              <TextInput
                id="lastName"
                labelText="Last Name"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(e) => updateFormData('lastName', e.target.value)}
                required
              />

              <TextInput
                id="email"
                labelText="Email Address"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                required
              />

              <TextInput
                id="phone"
                labelText="Phone Number"
                type="tel"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                required
              />

              <DatePicker
                datePickerType="single"
                onChange={(dates) => updateFormData('dateOfBirth', dates[0])}
              >
                <DatePickerInput
                  id="dateOfBirth"
                  labelText="Date of Birth"
                  placeholder="mm/dd/yyyy"
                  value={formData.dateOfBirth}
                />
              </DatePicker>
            </Stack>
          </Stack>

          <Button
            type="submit"
            className="sign-test-submit"
            disabled={!isFormValid()}
            renderIcon={ArrowRight}
            iconDescription="Continue"
          >
            Button
          </Button>
        </Form>
      </Column>
    </Grid>
  );
}
