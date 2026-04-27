import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Tag,
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@carbon/react';
import {
  DocumentBlank,
  Wallet,
  Task,
  ArrowRight,
  CheckmarkFilled,
  ErrorFilled,
  WarningFilled,
} from '@carbon/icons-react';
import './DashboardHome.scss';

const policies = [
  { id: 'POL-2024-001', type: 'Auto Insurance',  status: 'Active', premium: '$124.00/mo', nextDue: '02/15/2024' },
  { id: 'POL-2024-002', type: 'Home Insurance',  status: 'Active', premium: '$89.00/mo',  nextDue: '02/15/2024' },
];

const claims = [
  { id: 'CLM-2024-045', type: 'Auto - Minor Collision', date: '01/12/2024', status: 'In Review', amount: '$2,450' },
  { id: 'CLM-2023-892', type: 'Home - Water Damage',    date: '11/03/2023', status: 'Approved',  amount: '$5,200' },
  { id: 'CLM-2023-756', type: 'Auto - Windshield',      date: '09/21/2023', status: 'Paid',      amount: '$350'   },
];

const policyHeaders = [
  { key: 'id',      header: 'Policy ID'     },
  { key: 'type',    header: 'Type'          },
  { key: 'status',  header: 'Status'        },
  { key: 'premium', header: 'Premium'       },
  { key: 'nextDue', header: 'Next Payment'  },
];

const claimHeaders = [
  { key: 'id',     header: 'Claim ID'   },
  { key: 'type',   header: 'Type'       },
  { key: 'date',   header: 'Date Filed' },
  { key: 'status', header: 'Status'     },
  { key: 'amount', header: 'Amount'     },
];

function statusTag(status) {
  if (['Active', 'Approved', 'Paid'].includes(status)) return <Tag type="green">{status}</Tag>;
  if (['In Review', 'Pending'].includes(status))        return <Tag type="blue">{status}</Tag>;
  return <Tag type="red">{status}</Tag>;
}

function statusIcon(status) {
  if (['Active', 'Approved', 'Paid'].includes(status)) return <CheckmarkFilled size={16} className="status-icon status-icon--success" />;
  if (['In Review', 'Pending'].includes(status))        return <WarningFilled   size={16} className="status-icon status-icon--warning" />;
  return <ErrorFilled size={16} className="status-icon status-icon--error" />;
}

function DataSection({ title, rows, headers, buttonLabel, onButton }) {
  return (
    <div className="sp-section__header">
      <div className="sp-kicker">{title}</div>
      {onButton && (
        <Button kind="ghost" size="sm" renderIcon={ArrowRight} onClick={onButton}>
          {buttonLabel}
        </Button>
      )}
    </div>
  );
}

export default function DashboardHome() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-home">
      {/* Hero */}
      <div className="sp-page-hero">
        <div className="sp-eyebrow">Dashboard</div>
        <h1>My Dashboard</h1>
        <p className="sp-page-hero__lead">
          2 active policies · 1 open claim · $213.00/mo total premium
        </p>
      </div>

      {/* KPI statband */}
      <div className="sp-statband">
        <div>
          <div className="sp-statband__k">Active Policies</div>
          <div className="sp-statband__v">2</div>
          <div className="sp-statband__d">All up to date</div>
        </div>
        <div>
          <div className="sp-statband__k">Open Claims</div>
          <div className="sp-statband__v">1</div>
          <div className="sp-statband__d">In review</div>
        </div>
        <div>
          <div className="sp-statband__k">Monthly Premium</div>
          <div className="sp-statband__v">$213</div>
          <div className="sp-statband__d">Next payment Feb 15</div>
        </div>
        <div>
          <div className="sp-statband__k">Claims Paid</div>
          <div className="sp-statband__v">$8,000</div>
          <div className="sp-statband__d">YTD 2024</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="sp-section sp-section--alt">
        <div className="sp-kicker">Quick actions</div>
        <div className="dash-quick-actions">
          {[
            { icon: <DocumentBlank size={28} />, label: 'View Policies',  sub: 'Manage your active policies' },
            { icon: <Task          size={28} />, label: 'File a Claim',   sub: 'Submit a new insurance claim' },
            { icon: <Wallet        size={28} />, label: 'Make a Payment', sub: 'Pay your premium or view billing' },
          ].map(a => (
            <div key={a.label} className="dash-action-tile">
              <div className="dash-action-tile__icon">{a.icon}</div>
              <div className="dash-action-tile__content">
                <h4>{a.label}</h4>
                <p>{a.sub}</p>
              </div>
              <ArrowRight size={18} className="dash-action-tile__arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* Policies table */}
      <div className="sp-section">
        <div className="sp-section__header">
          <div className="sp-kicker">My Policies</div>
          <Button kind="ghost" size="sm" renderIcon={ArrowRight}>View All</Button>
        </div>
        <DataTable rows={policies} headers={policyHeaders} isSortable>
          {({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map(h => { const { key, ...p } = getHeaderProps({ header: h }); return <TableHeader key={key} {...p}>{h.header}</TableHeader>; })}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => { const { key, ...p } = getRowProps({ row }); return (
                  <TableRow key={key} {...p}>
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>
                        {cell.info.header === 'status'
                          ? <div className="status-cell">{statusIcon(cell.value)}{statusTag(cell.value)}</div>
                          : cell.value}
                      </TableCell>
                    ))}
                  </TableRow>
                ); })}
              </TableBody>
            </Table>
          )}
        </DataTable>
      </div>

      {/* Claims table */}
      <div className="sp-section sp-section--alt">
        <div className="sp-section__header">
          <div className="sp-kicker">Recent Activity</div>
          <Button kind="ghost" size="sm" renderIcon={ArrowRight}>View All</Button>
        </div>
        <DataTable rows={claims} headers={claimHeaders} isSortable>
          {({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map(h => { const { key, ...p } = getHeaderProps({ header: h }); return <TableHeader key={key} {...p}>{h.header}</TableHeader>; })}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => { const { key, ...p } = getRowProps({ row }); return (
                  <TableRow key={key} {...p}>
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>
                        {cell.info.header === 'status'
                          ? <div className="status-cell">{statusIcon(cell.value)}{statusTag(cell.value)}</div>
                          : cell.value}
                      </TableCell>
                    ))}
                  </TableRow>
                ); })}
              </TableBody>
            </Table>
          )}
        </DataTable>
      </div>

      {/* Insurance cards */}
      <div className="sp-section sp-section--no-bottom">
        <div className="sp-kicker">Digital Cards</div>
        <p className="sp-section__lead">Access and download your digital insurance cards for quick reference.</p>
        <div className="dash-insurance-cards">
          {[
            { title: 'Auto Insurance Card',  policy: 'POL-2024-001', detail: '2022 Honda Civic',      until: '12/31/2024' },
            { title: 'Home Insurance Card',  policy: 'POL-2024-002', detail: '123 Main St, Anytown',  until: '12/31/2024' },
          ].map(c => (
            <div key={c.title} className="dash-ins-card">
              <div className="dash-ins-card__header">
                <h4>{c.title}</h4>
                <Tag type="green">Active</Tag>
              </div>
              <div className="dash-ins-card__body">
                <p><strong>Policy:</strong> {c.policy}</p>
                <p><strong>Asset:</strong> {c.detail}</p>
                <p><strong>Valid Until:</strong> {c.until}</p>
              </div>
              <div className="dash-ins-card__actions">
                <Button kind="tertiary" size="sm">View Card</Button>
                <Button kind="ghost" size="sm">Download PDF</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
