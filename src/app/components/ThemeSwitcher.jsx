// components/ThemeSwitcher.jsx
'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeSwitcher() {
    const { theme, setTheme, resolvedTheme } = useTheme();

    return (
        <div className="flex items-center space-x-4">
            <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
            <div className="text-sm text-gray-600 dark:text-gray-400">
                Active: {resolvedTheme === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </div>
        </div>
    );
}