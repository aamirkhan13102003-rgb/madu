
import React from 'react';

export const BeeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 12h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2m0 0h- центральная ось 2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2m0-6V4m0 8v8"/>
        <path d="M10 12H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m0 0h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m0-6V4m0 8v8"/>
        <path d="M12 14v6"/>
        <path d="M12 2v2"/>
        <path d="M15 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
        <path d="M18 10c0 2.2-2.3 4-4 4s-4-1.8-4-4"/>
        <path d="m7.5 13.5-.5-1.5"/>
        <path d="m16.5 13.5.5-1.5"/>
    </svg>
);
