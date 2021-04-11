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




export function SubReddits(props) {
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
    

    return (
        <section>
            <label>{selectedSubReddit}</label>
            <select>
                {subReddits.map( subReddit => (
                    <option 
                        value={subReddit.name} 
                        key={subReddit.id}
                        onChange={()=> dispatch(changeSelectedSubReddit(subReddit.url))}
                        >{subReddit.url}
                        </option>
                    )
                )}
            </select>
        </section>
    );
};