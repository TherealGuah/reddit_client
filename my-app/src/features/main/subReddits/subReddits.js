import React from 'react';
import './subReddits.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//API json
import { getSubReddits } from '../../../app/API/Reddit';
//selectors + actions
import {
    selectSubReddit,
    selectSubReddits, 
    addSubReddit,
    changeSelectedSubReddit
    } from './subRedditsSlice';




export function SubReddits() {
    const dispatch = useDispatch();
    const subReddits = useSelector(selectSubReddits);
    const selectedSubReddit = useSelector(selectSubReddit);
    
    useEffect( () => {
        getSubReddits().then(jsonResponse => {
                jsonResponse.forEach(dataItem => dispatch(
                    addSubReddit(
                        {
                            name: dataItem.display_name,
                            url: dataItem.url,
                            id: dataItem.id,
                            icon: dataItem.community_icon.split("?")[0],
                        }
                    )));
            })
    }, [dispatch]);
    
    const handleChange = (e) =>{
        dispatch(changeSelectedSubReddit(e.target.value))
    };

    return (
        <section>
            <label>Select the desired Sub Reddit</label>
            <select onChange={handleChange}>
                {subReddits.map( subReddit => (
                    <option 
                        value={subReddit.url} 
                        key={subReddit.id}
                        >{subReddit.url}
                    </option>

                ))}
            </select>
        </section>
    );
};