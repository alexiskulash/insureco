import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

export const Default = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Tabs</h3>
    <Tabs>
      <TabList aria-label="List of tabs">
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>Content for tab 1</p>
        </TabPanel>
        <TabPanel>
          <p>Content for tab 2</p>
        </TabPanel>
        <TabPanel>
          <p>Content for tab 3</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
);

export const Contained = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Contained Tabs</h3>
    <Tabs>
      <TabList contained aria-label="Contained tabs">
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
      </TabList>
      <TabPanels>
        <TabPanel><p>First tab content</p></TabPanel>
        <TabPanel><p>Second tab content</p></TabPanel>
        <TabPanel><p>Third tab content</p></TabPanel>
      </TabPanels>
    </Tabs>
  </div>
);

export const WithDisabled = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Tabs with Disabled Tab</h3>
    <Tabs>
      <TabList aria-label="Tabs with disabled">
        <Tab>Enabled</Tab>
        <Tab disabled>Disabled</Tab>
        <Tab>Enabled</Tab>
      </TabList>
      <TabPanels>
        <TabPanel><p>First panel</p></TabPanel>
        <TabPanel><p>Disabled panel</p></TabPanel>
        <TabPanel><p>Third panel</p></TabPanel>
      </TabPanels>
    </Tabs>
  </div>
);
