import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import redditLogo from './reddit-logo.png';
import { SearchBar } from './searchBar/searchBar';
import { ToggleTheme } from './toggleTheme/toggletheme';
import { useDispatch } from 'react-redux';

export function Header() {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(/*changeActiveSubreddit("/r/Home/")*/);
    }
    
    return (
        <header>
            <Link to="/">
                <div onClick={handleClick} id="logo">
                    <img  id="redditLogo" src={redditLogo} alt="reddit logo"/>
                    <p>Reddit Client</p>
                </div>
            </Link>
            <SearchBar />
            <ToggleTheme />
        </header>
    );
};