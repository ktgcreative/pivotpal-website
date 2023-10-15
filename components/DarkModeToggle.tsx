"use client"
// components/DarkModeToggle.tsx

import { useEffect, useState } from 'react';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('color-theme') === 'dark' || 
      (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDarkMode(darkMode);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('color-theme', newDarkMode ? 'dark' : 'light');
    setIsDarkMode(newDarkMode);
  };

  return (
    <button id="theme-toggle" onClick={toggleTheme}>
      {isDarkMode ? (
        <svg id="theme-toggle-light-icon" /* ... light icon properties ... */ />
      ) : (
        <svg id="theme-toggle-dark-icon" /* ... dark icon properties ... */ />
      )}
    </button>
  );
};

export default DarkModeToggle;
