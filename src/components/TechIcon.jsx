import React from 'react';

export const TechIcon = ({ name, className = "w-3.5 h-3.5" }) => {
  const normalized = name.toLowerCase().trim();

  // React / React Native
  if (normalized.includes('react')) {
    return (
      <svg className={`${className} text-cyan-400`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes('typescript') || normalized === 'ts') {
    return (
      <svg className={`${className} text-blue-500`} viewBox="0 0 24 24" fill="currentColor">
        <rect width="20" height="20" x="2" y="2" rx="4" fill="#3178C6" />
        <path d="M7 9h6m-3 0v8M14.5 14.5c.5.5 1.5.8 2.5.5s1.2-.8 1.2-1.3c0-1.2-2.7-1-2.7-2.7 0-1 .8-1.8 2.2-1.8 1 0 1.8.3 2.3.7l-.6 1.3c-.4-.3-1-.5-1.7-.5s-1 .3-1 .8c0 1.1 2.7 1 2.7 2.7 0 1.1-.9 2-2.4 2-1.2 0-2.2-.4-2.8-1l.6-1.7z" stroke="#fff" strokeWidth="1.2" fill="none" />
      </svg>
    );
  }

  // JavaScript
  if (normalized.includes('javascript') || normalized === 'js') {
    return (
      <svg className={`${className} text-amber-400`} viewBox="0 0 24 24" fill="currentColor">
        <rect width="20" height="20" x="2" y="2" rx="4" fill="#F7DF1E" />
        <path d="M9 11v6c0 1-.5 1.5-1.5 1.5H6M13.5 17c.5.8 1.3 1.2 2.3 1.2 1.3 0 2.2-.8 2.2-1.8 0-1.2-1-1.6-2-2.1l-.6-.3c-.8-.4-1.3-.8-1.3-1.6 0-.9.8-1.6 1.9-1.6.8 0 1.5.3 1.9.9l-1 1.2c-.2-.4-.5-.6-1-.6-.4 0-.7.3-.7.6 0 .4.3.7.8.9l.6.3c1.2.6 1.8 1.2 1.8 2.2 0 1.3-1 2.2-2.5 2.2-1.4 0-2.3-.7-2.7-1.7l1.3-.9z" stroke="#000" strokeWidth="1.2" fill="none" />
      </svg>
    );
  }

  // Laravel
  if (normalized.includes('laravel')) {
    return (
      <svg className={`${className} text-red-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.8 3.8-3 1.7L9 6l3-1.8zM5 8.4l6 3.4v6.9l-6-3.3V8.4zm8 10.3v-6.9l6-3.4v7l-6 3.3z" fill="#FF2D20" />
      </svg>
    );
  }

  // PHP
  if (normalized.includes('php')) {
    return (
      <svg className={`${className} text-indigo-400`} viewBox="0 0 24 24" fill="currentColor">
        <rect width="20" height="14" x="2" y="5" rx="3" fill="#777BB4" />
        <text x="5" y="15" fill="#fff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">PHP</text>
      </svg>
    );
  }

  // Node.js
  if (normalized.includes('node')) {
    return (
      <svg className={`${className} text-emerald-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" fill="#5FA04E" />
        <path d="M12 6.5l5 3v5l-5 3-5-3v-5l5-3z" fill="#fff" />
      </svg>
    );
  }

  // Express.js
  if (normalized.includes('express')) {
    return (
      <svg className={`${className} text-zinc-700 dark:text-zinc-300`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12h8M12 8l4 4-4 4" />
      </svg>
    );
  }

  // MySQL
  if (normalized.includes('mysql')) {
    return (
      <svg className={`${className} text-sky-600`} viewBox="0 0 24 24" fill="currentColor">
        <ellipse cx="12" cy="7" rx="8" ry="3" fill="#00758F" />
        <path d="M4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7" stroke="#F29111" strokeWidth="2" fill="none" />
        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" stroke="#00758F" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  // PostgreSQL
  if (normalized.includes('postgres')) {
    return (
      <svg className={`${className} text-indigo-500`} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="9" fill="#336791" />
        <path d="M9 9c0-1.5 1.5-2 3-2s3 .5 3 2v6c0 1-1 2-2 2h-2c-1 0-2-1-2-2V9z" fill="#fff" />
      </svg>
    );
  }

  // Firebase / Firestore
  if (normalized.includes('firebase') || normalized.includes('firestore')) {
    return (
      <svg className={`${className} text-amber-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.5 17.5L7 3l3.5 6.5-6 8zm15 0L17 7.5l-2.5 5 5 5zm-9.5-6L12 7l2 4.5-4 0zM12 21l-7.5-3.5 7.5-14 7.5 14L12 21z" fill="#FFA611" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg className={`${className} text-cyan-400`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C15 11.8 16.5 13 20 13c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8C17 7.2 15.5 6 12 6zM6 13c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C9 18.8 10.5 20 14 20c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8C11 14.2 9.5 13 6 13z" fill="#38BDF8" />
      </svg>
    );
  }

  // Nativewind
  if (normalized.includes('nativewind')) {
    return (
      <svg className={`${className} text-teal-400`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12h12a4 4 0 1 0-4-4" />
        <path d="M2 17h16a3 3 0 1 0-3-3" />
      </svg>
    );
  }

  // Vite
  if (normalized.includes('vite')) {
    return (
      <svg className={`${className} text-purple-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3 6.5l9 15.5 9-15.5L12 2z" fill="#646CFF" />
        <path d="M11 5l-4 2 5 9 5-9-4-2v4h-2V5z" fill="#FFD62E" />
      </svg>
    );
  }

  // Expo
  if (normalized.includes('expo')) {
    return (
      <svg className={`${className} text-zinc-900 dark:text-white`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 19L12 4l8 15H4zm8-10.5L7.5 17h9L12 8.5z" />
      </svg>
    );
  }

  // Git
  if (normalized === 'git' || normalized.includes('git ') || normalized.includes('github')) {
    return (
      <svg className={`${className} text-orange-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.7 10.3l-8-8c-.4-.4-1.1-.4-1.5 0l-1.9 1.9 2.5 2.5c.5-.2 1.1-.1 1.5.3.4.4.5 1 .3 1.5l2.4 2.4c.5-.2 1.1-.1 1.5.3.6.6.6 1.6 0 2.2-.6.6-1.6.6-2.2 0-.4-.4-.5-1-.3-1.5L13.6 9.5v5.3c.2.2.4.4.4.8 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.4.2-.6.4-.8V9.4c-.2-.2-.4-.4-.4-.8 0-.5.2-.9.5-1.2L8.5 4.9 2.3 11.1c-.4.4-.4 1.1 0 1.5l8 8c.4.4 1.1.4 1.5 0l9.9-9.9c.4-.4.4-1.1 0-1.4z" fill="#F05032" />
      </svg>
    );
  }

  // XAMPP
  if (normalized.includes('xampp')) {
    return (
      <svg className={`${className} text-amber-600`} viewBox="0 0 24 24" fill="currentColor">
        <rect width="18" height="18" x="3" y="3" rx="3" fill="#FB7A24" />
        <path d="M7 7l10 10M17 7L7 17" stroke="#fff" strokeWidth="2.5" />
      </svg>
    );
  }

  // Electron
  if (normalized.includes('electron')) {
    return (
      <svg className={`${className} text-cyan-400`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="2.5" fill="#47848F" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
      </svg>
    );
  }

  // Python
  if (normalized.includes('python')) {
    return (
      <svg className={`${className} text-blue-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3V5h6v1.5H7.5S4 6.2 4 10.3c0 4.1 3.1 3.9 3.1 3.9h1.8v-2.3c0-1.7 1.4-3.1 3.1-3.1h4.6c1.3 0 2.3-1 2.3-2.3V4.3C18.9 3 15 2 11.9 2zm-1.8 1.9c.5 0 .9.4.9.9 0 .5-.4.9-.9.9-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9z" fill="#387EB8" />
        <path d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3V19h-6v-1.5h7.5s3.5.3 3.5-3.8c0-4.1-3.1-3.9-3.1-3.9h-1.8v2.3c0 1.7-1.4 3.1-3.1 3.1H7.4c-1.3 0-2.3 1-2.3 2.3v2.5C5.1 21 9 22 12.1 22zm1.8-1.9c-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9.5 0 .9.4.9.9 0 .5-.4.9-.9.9z" fill="#FFE052" />
      </svg>
    );
  }

  // C#
  if (normalized.includes('c#') || normalized.includes('csharp')) {
    return (
      <svg className={`${className} text-purple-600`} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="#9B4993" />
        <text x="5" y="16" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">C#</text>
      </svg>
    );
  }

  // VS Code
  if (normalized.includes('vs code') || normalized.includes('vscode')) {
    return (
      <svg className={`${className} text-sky-500`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 2.5l4 2v15l-4 2-9-7.5 9-11.5zm-5 9.5L5 6 2.5 8l6 4-6 4L5 18l7.5-6z" fill="#007ACC" />
      </svg>
    );
  }

  // Default fallback code icon
  return (
    <svg className={`${className} text-zinc-400`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};
