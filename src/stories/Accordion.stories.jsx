import React from 'react';
import { Accordion, AccordionItem } from '@carbon/react';

export default {
  title: 'Components/Accordion',
  component: Accordion,
};

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '800px' }}>
    <h3>Default Accordion</h3>
    <Accordion>
      <AccordionItem title="Section 1 title">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </AccordionItem>
      <AccordionItem title="Section 2 title">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </AccordionItem>
      <AccordionItem title="Section 3 title">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </AccordionItem>
    </Accordion>
  </div>
);

export const Sizes = () => (
  <div style={{ padding: '2rem', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <div>
      <h3>Small</h3>
      <Accordion size="sm">
        <AccordionItem title="Small accordion item">
          <p>Content for small accordion</p>
        </AccordionItem>
      </Accordion>
    </div>
    
    <div>
      <h3>Medium (Default)</h3>
      <Accordion size="md">
        <AccordionItem title="Medium accordion item">
          <p>Content for medium accordion</p>
        </AccordionItem>
      </Accordion>
    </div>
    
    <div>
      <h3>Large</h3>
      <Accordion size="lg">
        <AccordionItem title="Large accordion item">
          <p>Content for large accordion</p>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
);

export const Flush = () => (
  <div style={{ padding: '2rem', maxWidth: '800px' }}>
    <h3>Flush Accordion (no borders)</h3>
    <Accordion isFlush>
      <AccordionItem title="Section 1">
        <p>Flush accordion has no side borders</p>
      </AccordionItem>
      <AccordionItem title="Section 2">
        <p>Useful for certain layouts</p>
      </AccordionItem>
    </Accordion>
  </div>
);
