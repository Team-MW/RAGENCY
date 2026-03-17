import React from 'react';

export const Marquee = ({ text, reverse = false }) => {
    return (
        <div className={`marquee-container ${reverse ? 'reverse' : ''}`}>
            <div className="marquee-content">
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
            </div>
        </div>
    );
};
