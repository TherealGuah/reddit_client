import React from 'react';
import './searchBar.css';


export function SearchBar() {

    return (
        <div>
            <input 
                id="searchBar" 
                placeholder="Search for Posts"
                type="text"
            />
            <button><i class="fas fa-search"></i></button>
        </div>
    );
};