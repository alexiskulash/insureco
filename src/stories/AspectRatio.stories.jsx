import React from 'react';
import { AspectRatio } from '@carbon/react';

export default {
  title: 'Components/AspectRatio',
  component: AspectRatio,
};

const placeholderStyle = {
  width: '100%',
  height: '100%',
  background: 'var(--background-secondary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--text-primary)',
  border: '1px solid var(--border-subtle)',
};

export const Square = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Square (1:1)</h3>
    <AspectRatio ratio="1x1">
      <div style={placeholderStyle}>1:1 Aspect Ratio</div>
    </AspectRatio>
  </div>
);

export const Widescreen = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Widescreen (16:9)</h3>
    <AspectRatio ratio="16x9">
      <div style={placeholderStyle}>16:9 Aspect Ratio</div>
    </AspectRatio>
  </div>
);

export const Portrait = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Portrait (9:16)</h3>
    <AspectRatio ratio="9x16">
      <div style={placeholderStyle}>9:16 Aspect Ratio</div>
    </AspectRatio>
  </div>
);

export const StandardVideo = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>Standard Video (4:3)</h3>
    <AspectRatio ratio="4x3">
      <div style={placeholderStyle}>4:3 Aspect Ratio</div>
    </AspectRatio>
  </div>
);

export const UltraWide = () => (
  <div style={{ padding: '2rem', maxWidth: '800px' }}>
    <h3>Ultra Wide (21:9)</h3>
    <AspectRatio ratio="21x9">
      <div style={placeholderStyle}>21:9 Aspect Ratio</div>
    </AspectRatio>
  </div>
);

export const AllRatios = () => (
  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
    <h2>Aspect Ratio Examples</h2>
    
    <div style={{ maxWidth: '300px' }}>
      <h4>1:1 (Square)</h4>
      <AspectRatio ratio="1x1">
        <div style={placeholderStyle}>Square</div>
      </AspectRatio>
    </div>
    
    <div style={{ maxWidth: '500px' }}>
      <h4>16:9 (Widescreen)</h4>
      <AspectRatio ratio="16x9">
        <div style={placeholderStyle}>Widescreen</div>
      </AspectRatio>
    </div>
    
    <div style={{ maxWidth: '400px' }}>
      <h4>4:3 (Standard)</h4>
      <AspectRatio ratio="4x3">
        <div style={placeholderStyle}>Standard</div>
      </AspectRatio>
    </div>
  </div>
);
