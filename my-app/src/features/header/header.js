import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import redditLogo from './reddit-logo.png';
import { SearchBar } from './searchBar/searchBar';
import { ToggleTheme } from './toggleTheme/toggletheme';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedSubReddit } from '../main/subReddits/subRedditsSlice';
import { selectTheme } from './toggleTheme/toggleSlice';

export function Header() {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);
    const handleClick = () => {
        dispatch(changeSelectedSubReddit("/r/Home/"));
        
    }
    
    return (
        <header className={theme ? styles.darkTheme : styles.lightTheme}>
            <Link to="/">
                <div onClick={handleClick} id={styles.logo}>
                    <img  id={styles.redditLogo} src={redditLogo} alt="reddit logo"/>
                    <p><span className={styles.bolder}>Reddit</span> Client</p>
                </div>
            </Link>
            <SearchBar />
            <ToggleTheme />
        </header>
    );
};