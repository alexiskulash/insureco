import React from 'react';
import { Pagination } from '@carbon/react';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

export const Default = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Pagination</h3>
    <Pagination
      totalItems={103}
      pageSize={10}
      pageSizes={[10, 20, 30, 40, 50]}
    />
  </div>
);

export const Sizes = () => (
  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <div>
      <h4>Small</h4>
      <Pagination
        totalItems={103}
        pageSize={10}
        pageSizes={[10, 20, 30]}
        size="sm"
      />
    </div>
    <div>
      <h4>Medium</h4>
      <Pagination
        totalItems={103}
        pageSize={10}
        pageSizes={[10, 20, 30]}
        size="md"
      />
    </div>
    <div>
      <h4>Large</h4>
      <Pagination
        totalItems={103}
        pageSize={10}
        pageSizes={[10, 20, 30]}
        size="lg"
      />
    </div>
  </div>
);
