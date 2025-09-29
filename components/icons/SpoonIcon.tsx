import React from 'react';

export const SpoonIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 1 0 4 0 2 2 0 1 0-4 0z"/>
        <path d="M12.5 2C11.1 4.5 9 8.3 9 12.5a4.5 4.5 0 0 0 4.5 4.5c2.5 0 3.8-1.4 5-3"/>
    </svg>
);