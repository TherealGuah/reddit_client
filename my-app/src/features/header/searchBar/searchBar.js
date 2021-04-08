import React from 'react';
import './searchBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { 
    selectSearchTerm,
    newSearchTerm
} from './searchSlice';


export function SearchBar() {
    const dispatch = useDispatch();
    const searchTerm  = useSelector(selectSearchTerm);


    const handleTextChange = (event) => {
        dispatch(newSearchTerm(event.target.value))
    };

    return (
        <div>
            <input 
                id="searchBar" 
                placeholder="Search for Posts"
                type="text"
                value={searchTerm}
                onChange={handleTextChange}
            >
            </input>
            <button id="searchButton"><i className="fas fa-search"></i></button>
        </div>
    );
};