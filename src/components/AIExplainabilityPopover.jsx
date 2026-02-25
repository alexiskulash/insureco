import React from 'react';
import { Button } from '@carbon/react';
import { Launch } from '@carbon/icons-react';
import './AIExplainabilityPopover.scss';

/**
 * AIExplainabilityPopover
 *
 * Implements the IBM Carbon AI Explainability Popover pattern.
 * Appears when a user interacts with an AI label to provide
 * transparency about how AI is used to generate content.
 *
 * Variants:
 * - "primary"   : Full popover with feature info, how-it-works, model details, etc.
 * - "secondary" : Compact callout showing a single "AI was used" message.
 *
 * @param {Object}  props
 * @param {'primary'|'secondary'} props.variant         - Which variant to render
 * @param {string}  props.featureName                   - Heading for the AI feature
 * @param {string}  props.description                   - Short description of AI usage
 * @param {Array}   props.howItWorks                    - [{ keyword, description }]
 * @param {Array}   props.dataTypes                     - [{ label, description }]
 * @param {Object}  props.aiModel                       - { name, url }
 * @param {string}  props.additionalDetails             - Extra model details text
 * @param {Object}  props.trainingDataSet               - { name, url }
 * @param {string}  props.calloutText                   - Text for secondary variant
 * @param {Function} props.onViewDetails                - Callback for "View details" button
 */
export default function AIExplainabilityPopover({
  variant = 'primary',
  featureName = 'Name of feature',
  description = 'High level 1-2 sentence description of how the AI is being used in the UI.',
  howItWorks = [
    { keyword: 'Keyword.', description: 'Description of key word.' },
    { keyword: 'Keyword.', description: 'Description of key word.' },
    { keyword: 'Keyword.', description: 'Description of key word.' },
  ],
  dataTypes = [
    { label: 'Data type 1.', description: "Explain how it's used." },
    { label: 'Data type 2.', description: "Explain how it's used." },
    { label: 'Data type 3.', description: "Explain how it's used." },
  ],
  aiModel = { name: 'granite.13b.v2.instruct', url: '#' },
  additionalDetails = 'Additional information about data used to fine tune and/or train the model',
  trainingDataSet = { name: 'IBM Security data piles', url: '#' },
  calloutText = 'AI was used to generate this response',
  onViewDetails,
}) {
  if (variant === 'secondary') {
    return (
      <div className="ai-explainability-callout">
        <div className="ai-explainability-callout__aura" />
        <div className="ai-explainability-callout__content">
          <p className="ai-explainability-callout__text">{calloutText}</p>
        </div>
        <div className="ai-explainability-callout__border" />
      </div>
    );
  }

  return (
    <div className="ai-explainability-popover">
      {/* Top caret indicator */}
      <div className="ai-explainability-popover__caret-row">
        <span className="ai-explainability-popover__caret-spacer" />
        <svg
          className="ai-explainability-popover__caret-icon"
          width="15"
          height="8"
          viewBox="0 0 15 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M0.31001 7.60999L7.50001 0.419985L14.69 7.60999H0.31001Z" fill="currentColor" />
        </svg>
      </div>

      {/* AI aura background layer */}
      <div className="ai-explainability-popover__aura" aria-hidden="true" />

      {/* Scrollable content area */}
      <div className="ai-explainability-popover__scroll-area">
        <div className="ai-explainability-popover__content">

          {/* Section 1 – Eyebrow, title, description */}
          <section className="ai-explainability-popover__section">
            <span className="ai-explainability-popover__eyebrow">AI explained</span>
            <h2 className="ai-explainability-popover__title">{featureName}</h2>
            <p className="ai-explainability-popover__description">{description}</p>
          </section>

          {/* Section 2 – How it works + Data types */}
          <section className="ai-explainability-popover__section ai-explainability-popover__section--bordered">
            <div className="ai-explainability-popover__subsection">
              <span className="ai-explainability-popover__subsection-label">How it works</span>
              <ol className="ai-explainability-popover__ordered-list">
                {howItWorks.map((item, i) => (
                  <li key={i} className="ai-explainability-popover__list-item">
                    <strong>{item.keyword}</strong> {item.description}
                  </li>
                ))}
              </ol>
            </div>

            <div className="ai-explainability-popover__subsection">
              <span className="ai-explainability-popover__subsection-label">Data types used</span>
              <ul className="ai-explainability-popover__dash-list">
                {dataTypes.map((item, i) => (
                  <li key={i} className="ai-explainability-popover__list-item">
                    <strong>{item.label}</strong> {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 3 – AI model + Additional details */}
          <section className="ai-explainability-popover__section ai-explainability-popover__section--bordered">
            <div className="ai-explainability-popover__subsection">
              <span className="ai-explainability-popover__subsection-label">AI model</span>
              <a
                href={aiModel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ai-explainability-popover__link"
              >
                {aiModel.name}
                <Launch size={16} className="ai-explainability-popover__link-icon" aria-label="Opens in new tab" />
              </a>
            </div>

            <div className="ai-explainability-popover__subsection">
              <span className="ai-explainability-popover__subsection-label">Additional details</span>
              <p className="ai-explainability-popover__body-text">{additionalDetails}</p>
            </div>
          </section>

          {/* Section 4 – Training data set */}
          <section className="ai-explainability-popover__section ai-explainability-popover__section--bordered">
            <div className="ai-explainability-popover__subsection">
              <span className="ai-explainability-popover__subsection-label">Training data set</span>
              <a
                href={trainingDataSet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ai-explainability-popover__link"
              >
                {trainingDataSet.name}
                <Launch size={16} className="ai-explainability-popover__link-icon" aria-label="Opens in new tab" />
              </a>
            </div>
          </section>

          {/* Bottom spacer for action footer overlap */}
          <div className="ai-explainability-popover__footer-spacer" />
        </div>

        {/* Gradient feather at scroll bottom */}
        <div className="ai-explainability-popover__gradient-feather" aria-hidden="true" />
      </div>

      {/* Sticky action footer */}
      <div className="ai-explainability-popover__footer">
        <Button
          kind="primary"
          size="lg"
          className="ai-explainability-popover__view-btn"
          onClick={onViewDetails}
        >
          View details
        </Button>
      </div>

      {/* AI gradient border overlay */}
      <div className="ai-explainability-popover__border" aria-hidden="true" />
    </div>
  );
}
