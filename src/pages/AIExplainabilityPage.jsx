import React, { useState } from 'react';
import { Grid, Column, Button, Tag } from '@carbon/react';
import { Information } from '@carbon/icons-react';
import AIExplainabilityPopover from '../components/AIExplainabilityPopover';
import './AIExplainabilityPage.scss';

const defaultHowItWorks = [
  { keyword: 'Keyword.', description: 'Description of key word.' },
  { keyword: 'Keyword.', description: 'Description of key word.' },
  { keyword: 'Keyword.', description: 'Description of key word.' },
];

const defaultDataTypes = [
  { label: 'Data type 1.', description: "Explain how it's used." },
  { label: 'Data type 2.', description: "Explain how it's used." },
  { label: 'Data type 3.', description: "Explain how it's used." },
];

export default function AIExplainabilityPage() {
  const [primaryOpen, setPrimaryOpen] = useState(true);
  const [secondaryOpen, setSecondaryOpen] = useState(true);

  return (
    <div className="ai-explainability-page">
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <div className="ai-explainability-page__header">
            <Tag type="blue" size="md">Component Preview</Tag>
            <h1 className="ai-explainability-page__title">AI Explainability Popover</h1>
            <p className="ai-explainability-page__subtitle">
              The AI Explainability Popover surfaces transparent information about how AI
              is used to generate content in the UI. It appears when users interact with
              an AI label.
            </p>
          </div>
        </Column>

        {/* ── Primary variant ─────────────────────────────── */}
        <Column lg={8} md={8} sm={4}>
          <div className="ai-explainability-page__demo-section">
            <div className="ai-explainability-page__section-header">
              <h2 className="ai-explainability-page__section-title">Primary explanation</h2>
              <p className="ai-explainability-page__section-desc">
                Full popover with feature name, how-it-works steps, data types, AI model
                info and training data set.
              </p>
              <Button
                kind="ghost"
                size="sm"
                renderIcon={Information}
                onClick={() => setPrimaryOpen((v) => !v)}
              >
                {primaryOpen ? 'Hide' : 'Show'} popover
              </Button>
            </div>

            {primaryOpen && (
              <div className="ai-explainability-page__popover-wrapper">
                <AIExplainabilityPopover
                  variant="primary"
                  featureName="Name of feature"
                  description="High level 1-2 sentence description of how the AI is being used in the UI."
                  howItWorks={defaultHowItWorks}
                  dataTypes={defaultDataTypes}
                  aiModel={{ name: 'granite.13b.v2.instruct', url: '#' }}
                  additionalDetails="Additional information about data used to fine tune and/or train the model"
                  trainingDataSet={{ name: 'IBM Security data piles', url: '#' }}
                  onViewDetails={() => alert('View details clicked')}
                />
              </div>
            )}
          </div>
        </Column>

        {/* ── Secondary variant ────────────────────────────── */}
        <Column lg={8} md={8} sm={4}>
          <div className="ai-explainability-page__demo-section">
            <div className="ai-explainability-page__section-header">
              <h2 className="ai-explainability-page__section-title">Secondary explanation</h2>
              <p className="ai-explainability-page__section-desc">
                Compact callout used inline to communicate that AI was involved in
                generating a response.
              </p>
              <Button
                kind="ghost"
                size="sm"
                renderIcon={Information}
                onClick={() => setSecondaryOpen((v) => !v)}
              >
                {secondaryOpen ? 'Hide' : 'Show'} callout
              </Button>
            </div>

            {secondaryOpen && (
              <div className="ai-explainability-page__popover-wrapper">
                <AIExplainabilityPopover
                  variant="secondary"
                  calloutText="AI was used to generate this response"
                />
              </div>
            )}
          </div>
        </Column>

        {/* ── Side-by-side usage example ───────────────────── */}
        <Column lg={16} md={8} sm={4}>
          <div className="ai-explainability-page__demo-section">
            <h2 className="ai-explainability-page__section-title">Usage in context</h2>
            <p className="ai-explainability-page__section-desc">
              Typical layout: primary popover on the left, secondary callout on the right
              — as seen in the Figma designs.
            </p>

            <div className="ai-explainability-page__side-by-side">
              <AIExplainabilityPopover
                variant="primary"
                featureName="Name of feature"
                description="High level 1-2 sentence description of how the AI is being used in the UI."
                howItWorks={defaultHowItWorks}
                dataTypes={defaultDataTypes}
                aiModel={{ name: 'granite.13b.v2.instruct', url: '#' }}
                additionalDetails="Additional information about data used to fine tune and/or train the model"
                trainingDataSet={{ name: 'IBM Security data piles', url: '#' }}
                onViewDetails={() => {}}
              />

              <div className="ai-explainability-page__callout-column">
                <AIExplainabilityPopover
                  variant="secondary"
                  calloutText="AI was used to generate this response"
                />
              </div>
            </div>
          </div>
        </Column>

        {/* ── Props reference ──────────────────────────────── */}
        <Column lg={16} md={8} sm={4}>
          <div className="ai-explainability-page__props-section">
            <h2 className="ai-explainability-page__section-title">Component props</h2>
            <div className="ai-explainability-page__props-table">
              <div className="ai-explainability-page__props-row ai-explainability-page__props-row--header">
                <span>Prop</span>
                <span>Type</span>
                <span>Default</span>
                <span>Description</span>
              </div>
              {[
                { prop: 'variant', type: "'primary' | 'secondary'", def: "'primary'", desc: 'Which variant to render' },
                { prop: 'featureName', type: 'string', def: "'Name of feature'", desc: 'Heading text for the AI feature (primary only)' },
                { prop: 'description', type: 'string', def: '...', desc: 'Short description of AI usage (primary only)' },
                { prop: 'howItWorks', type: 'Array<{keyword, description}>', def: '[ … ]', desc: 'Ordered list items in "How it works" (primary only)' },
                { prop: 'dataTypes', type: 'Array<{label, description}>', def: '[ … ]', desc: 'Dash list items in "Data types used" (primary only)' },
                { prop: 'aiModel', type: '{name, url}', def: "{ name: 'granite…', url: '#' }", desc: 'AI model name and link (primary only)' },
                { prop: 'additionalDetails', type: 'string', def: '...', desc: 'Extra model/training detail text (primary only)' },
                { prop: 'trainingDataSet', type: '{name, url}', def: "{ name: 'IBM…', url: '#' }", desc: 'Training data set name and link (primary only)' },
                { prop: 'calloutText', type: 'string', def: "'AI was used…'", desc: 'Text shown in secondary callout' },
                { prop: 'onViewDetails', type: 'function', def: 'undefined', desc: 'Callback fired when "View details" button is clicked (primary only)' },
              ].map(({ prop, type, def, desc }) => (
                <div key={prop} className="ai-explainability-page__props-row">
                  <code>{prop}</code>
                  <code>{type}</code>
                  <code>{def}</code>
                  <span>{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </Column>
      </Grid>
    </div>
  );
}
