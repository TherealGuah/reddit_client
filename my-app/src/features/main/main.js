import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import './main.css';
// components
import { SubReddits } from './subReddits/subReddits';
import { PostsList } from './posts/postsList';
import { Post } from './posts/post/post';

export function Main() {

    return (
        <main>
            <SubReddits />
            <section id="posts">
                <Switch >
                    <Route exact path="/">
                        <PostsList />
                    </Route>
                    <Route exact path="/Post">
                        <Post />
                    </Route>
                </Switch>
            </section>
        </main>
    );
}
