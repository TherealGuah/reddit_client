import React from 'react';


export const Video = (props) => {
    const { postMedia, postUrl } = props;
    

    const videoSource = () => {
        if (postMedia && postMedia.reddit_video !== undefined) {
            return (                   
                <video width="100%" controls>
                    <source src={postMedia.reddit_video.fallback_url}></source>
                    Your browser doesn't support the video tag.
                </video>                   
        );
        }

        return postUrl;
    };
    
    // console.log(postMedia);

    return (
        <div>{videoSource()}</div>
        );
};