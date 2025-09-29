import React from 'react';

export const TreeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V10"/>
        <path d="m12-3.8-4 4-4-4"/>
        <path d="M12 10h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4"/>
        <path d="M12 10H8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4"/>
    </svg>
);