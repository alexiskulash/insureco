import React from 'react';
import { HeaderGlobalAction } from '@carbon/react';
import { Asleep, Light } from '@carbon/icons-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <HeaderGlobalAction
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
      tooltipAlignment="end"
    >
      {isDark ? <Light size={20} /> : <Asleep size={20} />}
    </HeaderGlobalAction>
  );
}
