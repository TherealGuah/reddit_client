import React from 'react';
import { Link } from 'react-router-dom';

import { getSubredditPosts } from '../../../app/API/Reddit';
import { selectSubReddit } from '../subReddits/subRedditsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addPosts } from './postsSlice';
import { selectPosts } from './postsSlice'; 


export function PostsList() {
    
    const posts = useSelector(selectPosts);
    
    const activeSubReddit = useSelector(selectSubReddit);
    const dispatch = useDispatch();
    

    useEffect( () => {
        getSubredditPosts(activeSubReddit)
        .then( jsonData => {
            // console.log(jsonData);
            dispatch(addPosts(jsonData))
        })
    }, [activeSubReddit, dispatch])

    return (
        <div>
            <Link to="/Post">
                
            </Link>
        </div>
    );
};