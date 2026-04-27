import React from 'react';
import { HeaderGlobalAction } from '@carbon/react';
import { Asleep, Light } from '@carbon/icons-react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.scss';

/**
 * ThemeToggle — works both inside the Carbon header (default)
 * and as a standalone button (pass standalone prop).
 */
export default function ThemeToggle({ standalone = false }) {
  const { isDark, toggleTheme } = useTheme();
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  const icon  = isDark ? <Light size={20} /> : <Asleep size={20} />;

  if (standalone) {
    return (
      <button
        className="theme-toggle-standalone"
        aria-label={label}
        title={label}
        onClick={toggleTheme}
      >
        {icon}
      </button>
    );
  }

  return (
    <HeaderGlobalAction
      aria-label={label}
      onClick={toggleTheme}
      tooltipAlignment="end"
    >
      {icon}
    </HeaderGlobalAction>
  );
}
