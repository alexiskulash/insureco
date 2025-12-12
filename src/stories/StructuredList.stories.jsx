import React from 'react';
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListCell,
  StructuredListBody,
} from '@carbon/react';

export default {
  title: 'Components/StructuredList',
  component: StructuredListWrapper,
};

export const Default = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Structured List</h3>
    <StructuredListWrapper>
      <StructuredListHead>
        <StructuredListRow head>
          <StructuredListCell head>Name</StructuredListCell>
          <StructuredListCell head>Protocol</StructuredListCell>
          <StructuredListCell head>Port</StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        <StructuredListRow>
          <StructuredListCell>Load Balancer 1</StructuredListCell>
          <StructuredListCell>HTTP</StructuredListCell>
          <StructuredListCell>80</StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
          <StructuredListCell>Load Balancer 2</StructuredListCell>
          <StructuredListCell>HTTPS</StructuredListCell>
          <StructuredListCell>443</StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
          <StructuredListCell>Load Balancer 3</StructuredListCell>
          <StructuredListCell>TCP</StructuredListCell>
          <StructuredListCell>3306</StructuredListCell>
        </StructuredListRow>
      </StructuredListBody>
    </StructuredListWrapper>
  </div>
);
