import React from 'react';

interface PinkAccentProps {
  className?: string;
}

export const PinkAccent: React.FC<PinkAccentProps> = ({ className = '' }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    className={`text-pink-400 shrink-0 ${className}`}
  >
    <line x1="4" y1="6" x2="11" y2="10" />
    <line x1="2" y1="12" x2="10" y2="12" />
    <line x1="4" y1="18" x2="11" y2="14" />
  </svg>
);