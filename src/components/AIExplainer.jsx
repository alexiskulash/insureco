import React from 'react';
import './AIExplainer.scss';

const LaunchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="16" height="16" fill="white" fillOpacity="0.01" style={{ mixBlendMode: 'multiply' }} />
    <path d="M13 14H3C2.73489 13.9996 2.48075 13.8942 2.29329 13.7067C2.10583 13.5193 2.00036 13.2651 2 13V3C2.00036 2.73489 2.10583 2.48075 2.29329 2.29329C2.48075 2.10583 2.73489 2.00036 3 2H8V3H3V13H13V8H14V13C13.9996 13.2651 13.8942 13.5193 13.7067 13.7067C13.5193 13.8942 13.2651 13.9996 13 14Z" fill="currentColor" />
    <path d="M10 1V2H13.293L9 6.293L9.707 7L14 2.707V6H15V1H10Z" fill="currentColor" />
  </svg>
);

const DEFAULT_HOW_IT_WORKS = [
  { keyword: 'Key word.', description: 'Description of key word.' },
  { keyword: 'Key word.', description: 'Description of key word.' },
  { keyword: 'Key word.', description: 'Description of key word.' },
];

const DEFAULT_DATA_TYPES = [
  { label: 'Data type 1.', description: "Explain how it's used." },
  { label: 'Data type 2.', description: "Explain how it's used." },
  { label: 'Data type 3.', description: "Explain how it's used." },
];

function AIExplainerPrimary({
  title = 'Name of feature',
  description = 'High level 1-2 sentence description of how the AI is being used in the UI.',
  showFunctionDetails = true,
  howItWorks = DEFAULT_HOW_IT_WORKS,
  dataTypes = DEFAULT_DATA_TYPES,
  showModelDetails = true,
  modelName = 'granite.13b.v2.instruct',
  modelHref = '#',
  additionalDetails = 'Additional information about data used to fine tune and/or train the model',
  showTrainingData = true,
  trainingDataLabel = 'IBM Security data piles',
  trainingDataHref = '#',
  showActions = true,
  onViewDetails,
}) {
  return (
    <div className="ai-explainer ai-explainer--primary">
      {/* Caret sits outside the overflow shell */}
      <div className="ai-explainer__caret" aria-hidden="true">
        <svg className="ai-explainer__caret-fill" width="15" height="8" viewBox="0 0 15 8" fill="none">
          <path d="M0.31001 7.60999L7.50001 0.419985L14.69 7.60999H0.31001Z" />
        </svg>
        <svg className="ai-explainer__caret-stroke" width="16" height="8" viewBox="0 0 16 8" fill="none">
          <path d="M16 7.20999H15L8 0.209991L1 7.20999H0" stroke="#78A9FF" />
        </svg>
      </div>

      {/* Shell contains all backgrounds + scrollable content */}
      <div className="ai-explainer__shell">
        {/* Background layers (z-index: 0-1) */}
        <div className="ai-explainer__bg" aria-hidden="true" />
        <div className="ai-explainer__aura" aria-hidden="true" />

        {/* Scrollable content (z-index: 2) */}
        <div className="ai-explainer__scroll-area">

          {/* Section 1: Header */}
          <section className="ai-explainer__section ai-explainer__section--header">
            <p className="ai-explainer__eyebrow">AI explained</p>
            <h2 className="ai-explainer__title">{title}</h2>
            <p className="ai-explainer__description">{description}</p>
          </section>

          {/* Section 2: Function details */}
          {showFunctionDetails && (
            <section className="ai-explainer__section ai-explainer__section--divided">
              <div className="ai-explainer__subsection">
                <p className="ai-explainer__section-label">How it works</p>
                <ol className="ai-explainer__ordered-list">
                  {howItWorks.map((item, i) => (
                    <li key={i} className="ai-explainer__list-item">
                      <span className="ai-explainer__list-marker">{i + 1}.</span>
                      <span><strong>{item.keyword}</strong> {item.description}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="ai-explainer__subsection">
                <p className="ai-explainer__section-label">Data types used</p>
                <ul className="ai-explainer__dash-list">
                  {dataTypes.map((item, i) => (
                    <li key={i} className="ai-explainer__list-item">
                      <span className="ai-explainer__list-marker">–</span>
                      <span><strong>{item.label}</strong> {item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Section 3: Model details */}
          {showModelDetails && (
            <section className="ai-explainer__section ai-explainer__section--divided">
              <div className="ai-explainer__subsection">
                <p className="ai-explainer__section-label">AI model</p>
                <a
                  href={modelHref}
                  className="ai-explainer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {modelName}
                  <LaunchIcon />
                </a>
              </div>

              <div className="ai-explainer__subsection">
                <p className="ai-explainer__section-label">Additional details</p>
                <p className="ai-explainer__body-text">{additionalDetails}</p>
              </div>
            </section>
          )}

          {/* Section 4: Training data */}
          {showTrainingData && (
            <section className="ai-explainer__section ai-explainer__section--divided">
              <div className="ai-explainer__subsection">
                <p className="ai-explainer__section-label">Training data set</p>
                <a
                  href={trainingDataHref}
                  className="ai-explainer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {trainingDataLabel}
                  <LaunchIcon />
                </a>
              </div>
            </section>
          )}

          <div className="ai-explainer__scroll-spacer" aria-hidden="true" />
        </div>

        {/* Gradient feather: fades content above footer (z-index: 3) */}
        {showActions && <div className="ai-explainer__feather" aria-hidden="true" />}

        {/* Actions footer (z-index: 4) */}
        {showActions && (
          <div className="ai-explainer__footer">
            <button className="ai-explainer__view-btn" onClick={onViewDetails}>
              View details
            </button>
          </div>
        )}

        {/* Gradient border using CSS mask technique (z-index: 5) */}
        <div className="ai-explainer__gradient-border" aria-hidden="true" />
      </div>
    </div>
  );
}

function AIExplainerSecondary({ message = 'AI was used to generate this response' }) {
  return (
    <div className="ai-explainer ai-explainer--secondary">
      <div className="ai-explainer__bg" aria-hidden="true" />
      <div className="ai-explainer__aura" aria-hidden="true" />
      <div className="ai-explainer__callout-content">
        <p className="ai-explainer__callout-message">{message}</p>
      </div>
      <div className="ai-explainer__simple-border" aria-hidden="true" />
    </div>
  );
}

/**
 * AIExplainer — IBM Carbon for AI "AI Explainability Popover" component.
 *
 * Two variants:
 *  - "primary": Full popover with title, how-it-works, data types, model info, training data, and actions.
 *  - "secondary": Compact callout banner (e.g. "AI was used to generate this response").
 */
function AIExplainer({ variant = 'primary', ...props }) {
  if (variant === 'secondary') {
    return <AIExplainerSecondary {...props} />;
  }
  return <AIExplainerPrimary {...props} />;
}

export default AIExplainer;
