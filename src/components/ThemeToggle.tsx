
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on system preference or saved preference
  useEffect(() => {
    // Check for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-brand-primary-dark" />
      )}
    </button>
  );
};

export default ThemeToggle;
