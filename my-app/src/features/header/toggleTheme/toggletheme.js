import React from 'react';
import './toggleTheme.css';
export function ToggleTheme() {

    return (
        <div id="toggle">
            {/* <i className="fas fa-toggle-on"></i> */}
            <i className="fas fa-toggle-off"></i>
            <p className="theme">Light Theme</p>
        </div>
    );
};