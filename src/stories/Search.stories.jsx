import React from 'react';
import { Search, ExpandableSearch } from '@carbon/react';

export default {
  title: 'Components/Search',
  component: Search,
};

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3>Search</h3>
    <Search
      labelText="Search"
      placeholder="Search..."
      id="search-1"
    />
  </div>
);

export const Expandable = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Expandable Search</h3>
    <ExpandableSearch
      labelText="Expandable search"
      placeholder="Search..."
      id="expandable-search-1"
    />
  </div>
);

export const Sizes = () => (
  <div style={{ padding: '2rem', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Search size="sm" labelText="Small search" placeholder="Small" id="search-sm" />
    <Search size="md" labelText="Medium search" placeholder="Medium" id="search-md" />
    <Search size="lg" labelText="Large search" placeholder="Large" id="search-lg" />
  </div>
);
