import React from 'react';
import { Tile, ClickableTile, ExpandableTile, SelectableTile, RadioTile, TileGroup } from '@carbon/react';

export default {
  title: 'Components/Tile',
  component: Tile,
};

export const DefaultTile = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Default Tile</h3>
    <Tile>
      <p>This is a default tile. It can contain any content.</p>
    </Tile>
  </div>
);

export const Clickable = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Clickable Tile</h3>
    <ClickableTile href="#" onClick={() => console.log('Tile clicked')}>
      <p>Click me! I'm a clickable tile.</p>
    </ClickableTile>
  </div>
);

export const Expandable = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Expandable Tile</h3>
    <ExpandableTile>
      <div style={{ marginBottom: '1rem' }}>
        <p><strong>Above the fold content</strong></p>
        <p>This is visible by default</p>
      </div>
      <div>
        <p><strong>Below the fold content</strong></p>
        <p>This is revealed when expanded</p>
      </div>
    </ExpandableTile>
  </div>
);

export const Selectable = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Selectable Tiles</h3>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <SelectableTile id="tile-1" name="tiles">
        Option 1
      </SelectableTile>
      <SelectableTile id="tile-2" name="tiles">
        Option 2
      </SelectableTile>
      <SelectableTile id="tile-3" name="tiles">
        Option 3
      </SelectableTile>
    </div>
  </div>
);

export const RadioTiles = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Radio Tiles</h3>
    <TileGroup name="radio-tiles" defaultSelected="radio-1" legend="Select one option">
      <RadioTile value="radio-1" id="radio-tile-1">
        <p><strong>Option 1</strong></p>
        <p>First choice description</p>
      </RadioTile>
      <RadioTile value="radio-2" id="radio-tile-2">
        <p><strong>Option 2</strong></p>
        <p>Second choice description</p>
      </RadioTile>
      <RadioTile value="radio-3" id="radio-tile-3">
        <p><strong>Option 3</strong></p>
        <p>Third choice description</p>
      </RadioTile>
    </TileGroup>
  </div>
);
