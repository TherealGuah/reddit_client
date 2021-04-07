import React from 'react';
import './toggleTheme.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from './toggleSlice';
import { toggleTheme } from './toggleSlice';

export function ToggleTheme() {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);

    const handleThemeChange = () => {
        dispatch(toggleTheme(theme));
    }

    return (
        <div id="toggle">
            <i className={theme ? "fas fa-toggle-on" : "fas fa-toggle-off"} onClick={handleThemeChange}></i>
            <p className="theme">Change Theme</p>
        </div>
    );
};