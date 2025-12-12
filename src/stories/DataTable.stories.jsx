import React from 'react';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@carbon/react';

const headers = [
  { key: 'name', header: 'Name' },
  { key: 'protocol', header: 'Protocol' },
  { key: 'port', header: 'Port' },
  { key: 'rule', header: 'Rule' },
];

const rows = [
  { id: '1', name: 'Load Balancer 1', protocol: 'HTTP', port: 80, rule: 'Round robin' },
  { id: '2', name: 'Load Balancer 2', protocol: 'HTTPS', port: 443, rule: 'Round robin' },
  { id: '3', name: 'Load Balancer 3', protocol: 'HTTP', port: 8080, rule: 'Least connections' },
  { id: '4', name: 'Load Balancer 4', protocol: 'TCP', port: 3306, rule: 'Source IP hash' },
];

export default {
  title: 'Components/DataTable',
  component: DataTable,
};

export const Default = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Data Table</h3>
    <DataTable rows={rows} headers={headers}>
      {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableHeader {...getHeaderProps({ header })} key={header.key}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow {...getRowProps({ row })} key={row.id}>
                {row.cells.map((cell) => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </DataTable>
  </div>
);

export const Compact = () => (
  <div style={{ padding: '2rem' }}>
    <h3>Compact Table</h3>
    <DataTable rows={rows} headers={headers} size="xs">
      {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
        <Table {...getTableProps()} size="xs">
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableHeader {...getHeaderProps({ header })} key={header.key}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow {...getRowProps({ row })} key={row.id}>
                {row.cells.map((cell) => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </DataTable>
  </div>
);
