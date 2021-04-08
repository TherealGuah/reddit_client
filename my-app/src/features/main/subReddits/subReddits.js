import React from 'react';
import './subReddits.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSubReddits } from '../../../app/API/Reddit';
import {selectSubReddit, selectSubRedditsList } from './subRedditsSlice';



export function SubReddits() {
    const dispatch = useDispatch();
    const subRedditsList = useSelector(selectSubRedditsList);
    const SubReddit = useSelector(selectSubReddit);
    useEffect( () => {
        getSubReddits()
            .then(json => {

            })
    }, [dispatch]);
    



    return (
        <section>
            <label></label>
            <select>
                {/* {Array.map(subReddit => <options value={}>{}</options>)} */}
            </select>
        </section>
    );
};