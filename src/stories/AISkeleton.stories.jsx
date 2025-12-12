import React from 'react';
import { AISkeletonIcon, AISkeletonText, AISkeletonPlaceholder } from '@carbon/react';

export default {
  title: 'Components/AISkeleton',
};

export const SkeletonIcon = () => (
  <div style={{ padding: '2rem' }}>
    <h3>AI Skeleton Icon</h3>
    <p>Loading placeholder for AI icons:</p>
    <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
      <AISkeletonIcon />
      <AISkeletonIcon style={{ width: '32px', height: '32px' }} />
      <AISkeletonIcon style={{ width: '48px', height: '48px' }} />
    </div>
  </div>
);

export const SkeletonText = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>AI Skeleton Text</h3>
    <p>Loading placeholder for AI-generated text:</p>
    <div style={{ marginTop: '1rem' }}>
      <AISkeletonText />
    </div>
  </div>
);

export const SkeletonPlaceholder = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>AI Skeleton Placeholder</h3>
    <p>Loading placeholder for AI content blocks:</p>
    <div style={{ marginTop: '1rem' }}>
      <AISkeletonPlaceholder />
    </div>
  </div>
);

export const AllSkeletons = () => (
  <div style={{ padding: '2rem', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <h2>AI Skeleton Components</h2>
    <p>Loading states for AI-related components</p>
    
    <div>
      <h4>Icons</h4>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
        <AISkeletonIcon />
        <AISkeletonIcon />
        <AISkeletonIcon />
      </div>
    </div>
    
    <div>
      <h4>Text</h4>
      <AISkeletonText />
      <AISkeletonText />
    </div>
    
    <div>
      <h4>Placeholder</h4>
      <AISkeletonPlaceholder />
    </div>
  </div>
);
