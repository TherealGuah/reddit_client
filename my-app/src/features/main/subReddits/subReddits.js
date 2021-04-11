import React from 'react';
import './subReddits.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    const subReddit = useSelector(selectSubReddit);
    
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
    
    console.log(subReddits);


    return (
        <section>
            <label></label>
            <select>
                {/* {.map(subReddit => <options value={}>{}</options>)} */}
            </select>
        </section>
    );
};