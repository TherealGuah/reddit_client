import React from 'react';

export function SearchBar() {

    return (
        <div>
            <input 
                id="searchBar" 
                placeholder="Search for Posts"
            />
            <button><i class="fas fa-search"></i></button>
        </div>
    );
};