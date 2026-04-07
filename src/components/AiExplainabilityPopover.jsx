import React from 'react';
import { Button, Link } from '@carbon/react';
import { Launch } from '@carbon/icons-react';
import './AiExplainabilityPopover.scss';

/**
 * AiExplainabilityPopover – Primary variant
 *
 * A detailed popover card that explains how an AI feature works,
 * including how it works, data types used, the underlying model,
 * additional details, and training data set.
 *
 * Appears when the user interacts with an AI label / badge.
 *
 * Props:
 * - title        {string}  Feature name shown as the heading
 * - description  {string}  1-2 sentence summary of AI usage
 * - howItWorks   {Array<{keyword, description}>}  Ordered step list
 * - dataTypes    {Array<{name, description}>}  Dash list of data types
 * - aiModel      {{name, url}}  Model name + link
 * - additionalDetails {string}  Free-text details about training data
 * - trainingDataSet   {{name, url}}  Dataset name + link
 * - onViewDetails {Function}  Callback for the "View details" button
 * - caretOffset  {'left'|'center'|'right'}  Horizontal caret position
 */
export function AiExplainabilityPopover({
  title = 'Name of feature',
  description = 'High level 1-2 sentence description of how the AI is being used in the UI.',
  howItWorks = [
    { keyword: 'Key word.', description: 'Description of key word.' },
    { keyword: 'Key word.', description: 'Description of key word.' },
    { keyword: 'Key word.', description: 'Description of key word.' },
  ],
  dataTypes = [
    { name: 'Data type 1.', description: "Explain how it's used." },
    { name: 'Data type 2.', description: "Explain how it's used." },
    { name: 'Data type 3.', description: "Explain how it's used." },
  ],
  aiModel = { name: 'granite.13b.v2.instruct', url: '#' },
  additionalDetails = 'Additional information about data used to fine tune and/or train the model',
  trainingDataSet = { name: 'IBM Security data piles', url: '#' },
  onViewDetails,
  caretOffset = 'right',
}) {
  return (
    <div className="ai-popover">
      {/* Top caret / pointer */}
      <div className={`ai-popover__caret-row ai-popover__caret-row--${caretOffset}`}>
        <span className="ai-popover__caret" />
      </div>

      {/* Gradient border wrapper */}
      <div className="ai-popover__border-wrapper">
        <div className="ai-popover__card">
          {/* Blue aura gradient (bottom glow) */}
          <div className="ai-popover__aura" aria-hidden="true" />

          {/* Scrollable content */}
          <div className="ai-popover__scroll-area">
            {/* Section 1 – Header */}
            <section className="ai-popover__section">
              <span className="ai-popover__eyebrow">AI explained</span>
              <h2 className="ai-popover__title">{title}</h2>
              <p className="ai-popover__description">{description}</p>
            </section>

            {/* Section 2 – How it works + Data types */}
            <section className="ai-popover__section ai-popover__section--divided">
              <div className="ai-popover__subsection">
                <p className="ai-popover__section-label">How it works</p>
                <ol className="ai-popover__ordered-list">
                  {howItWorks.map((item, i) => (
                    <li key={i} className="ai-popover__list-item">
                      <span className="ai-popover__list-marker">{i + 1}.</span>
                      <span className="ai-popover__list-text">
                        <strong>{item.keyword}</strong> {item.description}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="ai-popover__subsection">
                <p className="ai-popover__section-label">Data types used</p>
                <ul className="ai-popover__dash-list">
                  {dataTypes.map((item, i) => (
                    <li key={i} className="ai-popover__list-item">
                      <span className="ai-popover__list-marker">–</span>
                      <span className="ai-popover__list-text">
                        <strong>{item.name}</strong> {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 3 – AI model + Additional details */}
            <section className="ai-popover__section ai-popover__section--divided">
              <div className="ai-popover__subsection">
                <p className="ai-popover__section-label">AI model</p>
                <Link
                  href={aiModel.url}
                  className="ai-popover__link"
                  renderIcon={Launch}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {aiModel.name}
                </Link>
              </div>

              <div className="ai-popover__subsection">
                <p className="ai-popover__section-label">Additional details</p>
                <p className="ai-popover__body-text">{additionalDetails}</p>
              </div>
            </section>

            {/* Section 4 – Training data set */}
            <section className="ai-popover__section ai-popover__section--divided">
              <div className="ai-popover__subsection">
                <p className="ai-popover__section-label">Training data set</p>
                <Link
                  href={trainingDataSet.url}
                  className="ai-popover__link"
                  renderIcon={Launch}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {trainingDataSet.name}
                </Link>
              </div>
            </section>

            {/* Spacer so the footer doesn't overlap last section */}
            <div className="ai-popover__footer-spacer" aria-hidden="true" />
          </div>

          {/* Gradient fade + sticky footer */}
          <div className="ai-popover__footer">
            <div className="ai-popover__footer-fade" aria-hidden="true" />
            <Button
              kind="primary"
              className="ai-popover__view-btn"
              onClick={onViewDetails}
            >
              View details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * AiCallout – Secondary variant
 *
 * A simple, compact card that surfaces a short "AI was used" message.
 * Uses a subtle blue border and background glow.
 *
 * Props:
 * - message {string}  The message to display
 */
export function AiCallout({
  message = 'AI was used to generate this response',
}) {
  return (
    <div className="ai-callout">
      <div className="ai-callout__aura" aria-hidden="true" />
      <p className="ai-callout__message">{message}</p>
    </div>
  );
}
