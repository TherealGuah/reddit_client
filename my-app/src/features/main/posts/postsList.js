import React from 'react';
import { Link } from 'react-router-dom';
import './postsList.css'
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
            //console.log(jsonData);
            dispatch(addPosts(jsonData))
        })
    }, [activeSubReddit, dispatch]);
    
    function handleImgError({target}) {
        target.style.display = "none";
    };


    console.log(posts);
    return (
        <div id="postsItem">
            {posts.map( post => (
                <div className="singlePost" key={post.id}>
                    <Link to="/Post">
                        <h1>{post.title}</h1>
                    </Link>
                    <p >{post.selftext}</p>
                    <img src={post.url} alt="" onError={handleImgError}/>
                </div>)
            )}
        </div>
    );
};