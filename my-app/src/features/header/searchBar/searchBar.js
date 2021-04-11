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
        <div id="searchBar">
            <input 
                placeholder="Search for posts..."
                type="text"
                value={searchTerm}
                onChange={handleTextChange}
            >
            </input>
            <i 
                className={ searchTerm.length === 0 ? "fas fa-search" : "far fa-times-circle"} 
                onClick={() => dispatch(newSearchTerm(""))}
            ></i>
        </div>
    );
};