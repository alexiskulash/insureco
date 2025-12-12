import React from 'react';
import { ContentSwitcher, Switch } from '@carbon/react';

export default {
  title: 'Components/ContentSwitcher',
  component: ContentSwitcher,
};

export const Default = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Content Switcher</h3>
    <ContentSwitcher onChange={() => {}}>
      <Switch name="first" text="First section" />
      <Switch name="second" text="Second section" />
      <Switch name="third" text="Third section" />
    </ContentSwitcher>
  </div>
);

export const Sizes = () => (
  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <div>
      <h4>Small</h4>
      <ContentSwitcher size="sm">
        <Switch name="one" text="One" />
        <Switch name="two" text="Two" />
      </ContentSwitcher>
    </div>
    <div>
      <h4>Medium</h4>
      <ContentSwitcher size="md">
        <Switch name="one" text="One" />
        <Switch name="two" text="Two" />
      </ContentSwitcher>
    </div>
    <div>
      <h4>Large</h4>
      <ContentSwitcher size="lg">
        <Switch name="one" text="One" />
        <Switch name="two" text="Two" />
      </ContentSwitcher>
    </div>
  </div>
);
