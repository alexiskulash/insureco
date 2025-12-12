import React from 'react';
import { Popover, PopoverContent, Button } from '@carbon/react';

export default {
  title: 'Components/Popover',
  component: Popover,
};

export const Default = () => (
  <div style={{ padding: '4rem' }}>
    <h3>Popover</h3>
    <Popover open>
      <Button>Trigger</Button>
      <PopoverContent>
        <p>This is popover content</p>
      </PopoverContent>
    </Popover>
  </div>
);

export const Alignments = () => (
  <div style={{ padding: '4rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
    <Popover open align="top">
      <Button>Top</Button>
      <PopoverContent>Top aligned</PopoverContent>
    </Popover>
    <Popover open align="bottom">
      <Button>Bottom</Button>
      <PopoverContent>Bottom aligned</PopoverContent>
    </Popover>
    <Popover open align="left">
      <Button>Left</Button>
      <PopoverContent>Left aligned</PopoverContent>
    </Popover>
    <Popover open align="right">
      <Button>Right</Button>
      <PopoverContent>Right aligned</PopoverContent>
    </Popover>
  </div>
);
