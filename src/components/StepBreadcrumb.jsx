import React from 'react';
import { Checkmark } from '@carbon/icons-react';
import './StepBreadcrumb.scss';

/**
 * StepBreadcrumb - Custom breadcrumb/stepper component
 *
 * Replacement for Carbon's ProgressIndicator which had theming issues.
 * Shows step markers, labels, a percentage, and a progress bar.
 *
 * @param {Array}   props.steps        - [{ label, description?, key }]
 * @param {number}  props.currentIndex - 0-based index of the current step
 * @param {boolean} props.spaceEqually - Space steps equally (default: true)
 */
export default function StepBreadcrumb({ steps, currentIndex = 0, spaceEqually = true }) {
  const percentage = Math.round(((currentIndex + 1) / steps.length) * 100);

  return (
    <div className="step-breadcrumb-wrapper">
      {/* Step markers row */}
      <div className={`step-breadcrumb ${spaceEqually ? 'step-breadcrumb--equal' : ''}`}>
        {steps.map((step, index) => {
          const isComplete = index < currentIndex;
          const isCurrent = index === currentIndex;
          const isIncomplete = index > currentIndex;

          return (
            <React.Fragment key={step.key || index}>
              <div
                className={`step-breadcrumb__item ${
                  isComplete ? 'step-breadcrumb__item--complete' : ''
                } ${isCurrent ? 'step-breadcrumb__item--current' : ''} ${
                  isIncomplete ? 'step-breadcrumb__item--incomplete' : ''
                }`}
              >
                <div className="step-breadcrumb__marker">
                  {isComplete ? (
                    <Checkmark size={16} className="step-breadcrumb__check" />
                  ) : (
                    <span className="step-breadcrumb__number">{index + 1}</span>
                  )}
                </div>
                <div className="step-breadcrumb__content">
                  <span className="step-breadcrumb__label">{step.label}</span>
                  {step.description && (
                    <span className="step-breadcrumb__description">{step.description}</span>
                  )}
                </div>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`step-breadcrumb__line ${
                    isComplete ? 'step-breadcrumb__line--complete' : ''
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Progress bar + percentage */}
      <div className="step-breadcrumb__progress-row">
        <div className="step-breadcrumb__progress-bar-track">
          <div
            className="step-breadcrumb__progress-bar-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="step-breadcrumb__percentage">{percentage}%</span>
      </div>
    </div>
  );
}
