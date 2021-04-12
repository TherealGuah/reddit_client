import React from 'react';
import { Link } from 'react-router-dom';

export const Post = () => {

return (
    <div>
        <div>
            <Link to="/">
                <p>Back to Posts</p>
            </Link>
        </div>
        <p> Im the post</p>
    </div>
);

};
