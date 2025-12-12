import React from 'react';
import { Link } from '@carbon/react';
import { Launch } from '@carbon/icons-react';

export default {
  title: 'Components/Link',
  component: Link,
};

export const Default = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Link</h3>
    <Link href="#">Default link</Link>
  </div>
);

export const Inline = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Inline Link</h3>
    <p>
      This is a paragraph with an <Link href="#" inline>inline link</Link> embedded in the text.
      The inline variant is designed to be used within paragraphs.
    </p>
  </div>
);

export const WithIcon = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Link with Icon</h3>
    <Link href="#" renderIcon={Launch}>
      External link
    </Link>
  </div>
);

export const Disabled = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Disabled Link</h3>
    <Link href="#" disabled>
      Disabled link
    </Link>
  </div>
);

export const Sizes = () => (
  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Link href="#" size="sm">Small link</Link>
    <Link href="#" size="md">Medium link</Link>
    <Link href="#" size="lg">Large link</Link>
  </div>
);
