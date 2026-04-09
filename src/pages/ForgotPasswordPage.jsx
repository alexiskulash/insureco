import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Column,
  Form,
  TextInput,
  Button,
  Tile,
  Heading,
  Stack,
  Link,
  InlineNotification,
} from '@carbon/react';
import { Password, ArrowRight, ArrowLeft } from '@carbon/icons-react';
import './ForgotPasswordPage.scss';

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Grid className="forgot-password-page">
      <Column sm={4} md={8} lg={{ span: 8, offset: 4 }} xlg={{ span: 6, offset: 5 }}>
        <div className="forgot-password-container">
          <Tile className="forgot-password-card">
            <div className="forgot-password-icon">
              <div className="forgot-password-icon-circle">
                <Password size={32} />
              </div>
            </div>

            <Stack gap={6} className="forgot-password-content">
              <div className="forgot-password-header">
                <Heading className="forgot-password-title">
                  Forgot Password
                </Heading>
                <p className="forgot-password-subtitle">
                  {submitted
                    ? 'Check your inbox for reset instructions.'
                    : 'Enter your email and we\'ll send you a reset link.'}
                </p>
              </div>

              {submitted ? (
                <Stack gap={5}>
                  <InlineNotification
                    kind="success"
                    title="Reset link sent"
                    subtitle={`If an account exists for ${email}, you'll receive an email shortly.`}
                    hideCloseButton
                  />
                  <Button
                    kind="secondary"
                    size="lg"
                    renderIcon={ArrowLeft}
                    className="forgot-password-button"
                    onClick={() => navigate('/login')}
                  >
                    Back to Sign In
                  </Button>
                </Stack>
              ) : (
                <Form onSubmit={handleSubmit} className="forgot-password-form">
                  <Stack gap={5}>
                    <TextInput
                      id="email"
                      labelText="Email Address"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      required
                    />

                    <Button
                      type="submit"
                      kind="primary"
                      size="lg"
                      renderIcon={ArrowRight}
                      className="forgot-password-button"
                    >
                      Send Reset Link
                    </Button>
                  </Stack>
                </Form>
              )}

              <div className="forgot-password-footer">
                <p className="back-to-login-prompt">
                  Remember your password?{' '}
                  <Link
                    href="/login"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/login');
                    }}
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </Stack>
          </Tile>
        </div>
      </Column>
    </Grid>
  );
}
