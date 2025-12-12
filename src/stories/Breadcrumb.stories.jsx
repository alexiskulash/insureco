import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '@carbon/react';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};

export const Default = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Default Breadcrumb</h3>
    <Breadcrumb>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem href="#">Category</BreadcrumbItem>
      <BreadcrumbItem href="#" isCurrentPage>
        Item Details
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
);

export const WithOverflow = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Breadcrumb with Many Items</h3>
    <Breadcrumb>
      <BreadcrumbItem href="#">Level 1</BreadcrumbItem>
      <BreadcrumbItem href="#">Level 2</BreadcrumbItem>
      <BreadcrumbItem href="#">Level 3</BreadcrumbItem>
      <BreadcrumbItem href="#">Level 4</BreadcrumbItem>
      <BreadcrumbItem href="#">Level 5</BreadcrumbItem>
      <BreadcrumbItem href="#" isCurrentPage>
        Current Page
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
);

export const Simple = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Simple Two-Level Breadcrumb</h3>
    <Breadcrumb>
      <BreadcrumbItem href="#">Dashboard</BreadcrumbItem>
      <BreadcrumbItem href="#" isCurrentPage>
        Settings
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
);

export const NoTrailingSlash = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Breadcrumb Without Trailing Slash</h3>
    <Breadcrumb noTrailingSlash>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Category</BreadcrumbItem>
      <BreadcrumbItem href="#" isCurrentPage>
        Product
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
);

export const AllExamples = () => (
  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <h2>Breadcrumb Navigation</h2>
    
    <div>
      <h4>Standard Navigation</h4>
      <Breadcrumb>
        <BreadcrumbItem href="#">Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Products</BreadcrumbItem>
        <BreadcrumbItem href="#" isCurrentPage>
          Details
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
    
    <div>
      <h4>Deep Navigation</h4>
      <Breadcrumb>
        <BreadcrumbItem href="#">Root</BreadcrumbItem>
        <BreadcrumbItem href="#">Level 1</BreadcrumbItem>
        <BreadcrumbItem href="#">Level 2</BreadcrumbItem>
        <BreadcrumbItem href="#">Level 3</BreadcrumbItem>
        <BreadcrumbItem href="#" isCurrentPage>
          Current
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
    
    <div>
      <h4>Without Trailing Slash</h4>
      <Breadcrumb noTrailingSlash>
        <BreadcrumbItem href="#">Home</BreadcrumbItem>
        <BreadcrumbItem href="#" isCurrentPage>
          Page
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  </div>
);
