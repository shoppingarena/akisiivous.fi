// components/ThemeProvider.jsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
    theme: 'system',
    setTheme: () => null,
    resolvedTheme: 'light',
});

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('system');
    const [resolvedTheme, setResolvedTheme] = useState('light');

    useEffect(() => {
        // Load theme from localStorage if available
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        // Save theme to localStorage
        if (theme !== 'system') {
            localStorage.setItem('theme', theme);
        }

        // Update DOM based on theme
        updateDOM(theme);
    }, [theme]);

    useEffect(() => {
        // Set up media query to detect system preference changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleMediaChange = () => {
            if (theme === 'system') {
                updateDOM('system');
            }
        };

        // Initial check
        handleMediaChange();

        // Listen for changes
        mediaQuery.addEventListener('change', handleMediaChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, [theme]);

    function updateDOM(mode) {
        const isDark =
            mode === 'dark' ||
            (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

        const root = document.documentElement;

        if (isDark) {
            root.classList.add('dark');
            setResolvedTheme('dark');
        } else {
            root.classList.remove('dark');
            setResolvedTheme('light');
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}