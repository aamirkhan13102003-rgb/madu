
import React from 'react';

export const FaceMaskIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/>
        <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/>
        <path d="M12 12a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/>
        <path d="M10 14.5a2.5 2.5 0 1 1 5 0"/>
    </svg>
);
