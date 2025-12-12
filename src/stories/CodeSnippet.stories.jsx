import React from 'react';
import { CodeSnippet } from '@carbon/react';

export default {
  title: 'Components/CodeSnippet',
  component: CodeSnippet,
};

export const Inline = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Inline Code Snippet</h3>
    <p>
      Run <CodeSnippet type="inline">npm install</CodeSnippet> to install dependencies.
    </p>
  </div>
);

export const SingleLine = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Single Line Code Snippet</h3>
    <CodeSnippet type="single" feedback="Copied!">
      npm install @carbon/react
    </CodeSnippet>
  </div>
);

export const MultiLine = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Multi-line Code Snippet</h3>
    <CodeSnippet type="multi" feedback="Copied!">
      {`{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "@carbon/react": "^1.0.0",
    "react": "^19.0.0"
  }
}`}
    </CodeSnippet>
  </div>
);
