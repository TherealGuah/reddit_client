import React from 'react';
import { Link } from 'react-router-dom';
import { selectPost } from './postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubReddit } from  '../../subReddits/subRedditsSlice';
import { selectPosts } from '../postsSlice';
import { Video}  from '../video/video';
import { Footer } from '../footer/footer';
import styles from './post.module.css';

export const Post = () => {
    const dispatch = useDispatch();
    const postId = useSelector(selectPost);
    const selectedSubReddit = useSelector(selectSubReddit);
    const posts = useSelector(selectPosts);
    
    const selectedPost = posts.filter(post => post.name === postId)
    console.log(selectedPost);
    
    function handleImgError({target}) {
        target.style.display = "none";
    };

    return (
        <section id={styles.postsItem}>
            {selectedPost.map( post => (
                <div className={styles.singlePost} key={post.id}>
                    <Link to="/">
                        <button>Back to {selectedSubReddit}</button>
                    </Link>
                    <h1>{post.title}</h1>
                    <p>{post.selftext}</p>
                    <img src={post.url} alt="" onError={handleImgError}/>
                    <div className={post.media ? styles.video : styles.noVideo}>
                        <Video postMedia={post.media} postUrl={post.url}/>
                    </div>
                    <p>{!post.media && post.url ? post.url : ""}</p>
                    <Footer
                        postId ={post.id}
                        postAuthor={post.author}
                        postCreated={post.created_utc}
                        postPermalink={post.permalink}
                        postComments={post.num_comments}
                        visible={true}
                    />
                </div>)
            )}
        </section>
    );



};
