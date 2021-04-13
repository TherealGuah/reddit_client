import React from 'react';
import { Link } from 'react-router-dom';
import './postsList.css'
import { getSubredditPosts } from '../../../app/API/Reddit';
import { selectSubReddit } from '../subReddits/subRedditsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addPosts } from './postsSlice';
import { selectPosts } from './postsSlice'; 
import { selectSearchTerm } from '../../header/searchBar/searchSlice';
import { dateCalculator } from '../../utilities/utils';

export function PostsList() {
    
    const posts = useSelector(selectPosts);
    const activeSubReddit = useSelector(selectSubReddit);
    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    

    useEffect( () => {
        getSubredditPosts(activeSubReddit)
        .then( jsonData => {
            //console.log(jsonData);
            dispatch(addPosts(jsonData))
        });
    }, [activeSubReddit, dispatch]); 

    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

    function handleImgError({target}) {
        target.style.display = "none";
    };
    

    // console.log(filteredPosts);
    return (
        <div id="postsItem">
            {filteredPosts.map( post => (
                <div className="singlePost" key={post.id}>
                    <Link to="/Post">
                        <h1>{post.title}</h1>
                        <p>{post.selftext}</p>
                        <img src={post.url} alt="" onError={handleImgError}/>
                        <video width="100%" controls style={(post.media)? {display: "block"} : {display: "none"}}>
                            <source src={post.media ? post.media.reddit_video.fallback_url : ""} type="video/mp4"></source>
                            Your browser doesn't support the video tag.
                        </video>
                        <p>{!post.media && post.url ? post.url : ""}</p>
                    </Link>
                    <div className="postFoot">
                        <p>By: {post.author}</p>
                        <p>{dateCalculator(post.created_utc)}</p>
                        <p>
                            <i className="far fa-comments"></i> {post.num_comments}
                        </p>
                        <div className="postScore">
                            <i className="far fa-arrow-alt-circle-up"></i>
                            <p>{post.score}</p>
                            <i className="far fa-arrow-alt-circle-down"></i>
                        </div>
                    </div>
                </div>)
            )}
        </div>
    );
};
// Date.now()