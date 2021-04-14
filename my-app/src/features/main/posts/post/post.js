import React from 'react';
import { Link } from 'react-router-dom';

export const Post = () => {

return (
    <div>
        <Link to="/">
            <p>Back to Posts</p>
        </Link>
        <p> Im the post</p>
    </div>
);

};
