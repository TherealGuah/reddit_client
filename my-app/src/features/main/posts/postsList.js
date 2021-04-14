import React from 'react';
import { Link } from 'react-router-dom';
import styles from './postsList.module.css'
import { /*getPostComments,*/ getSubredditPosts } from '../../../app/API/Reddit';
import { selectSubReddit } from '../subReddits/subRedditsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addPosts } from './postsSlice';
import { selectPosts } from './postsSlice'; 
import { selectSearchTerm } from '../../header/searchBar/searchSlice';
import { dateCalculator } from '../../utilities/utils';
import { Footer } from "./footer/footer";
// import { Comments } from '../comments/comments';



export function PostsList() {
    const [active, setActive] = useState(false);
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

    
    console.log(filteredPosts);
    return (
        <div id={styles.postsItem}>
            {filteredPosts.map( post => (
                <div className={styles.singlePost} key={post.id}>
                    <Link to="/Post">
                        <h1>{post.title}</h1>
                        <p>{post.selftext}</p>
                        <img src={post.url} alt="" onError={handleImgError}/>
                        {/* <video width="100%" controls style={(post.media)? {display: "block"} : {display: "none"}}>
                            <source src={post.media ? post.media.reddit_video.fallback_url : ""} type="video/mp4"></source>
                            Your browser doesn't support the video tag.
                        </video> */}
                        <p>{!post.media && post.url ? post.url : ""}</p>
                    </Link>
                    <Footer
                        postId ={post.id}
                        postAuthor={post.author}
                        postCreated={post.created_utc}
                        postPermalink={post.permalink}
                        postComments={post.num_comments}
                        visible={false}
                    />
                </div>)
            )}
        </div>
    );
};
