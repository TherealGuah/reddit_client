import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import styles from './main.module.css';
// components
import { SubReddits } from './subReddits/subReddits';
import { PostsList } from './posts/postsList';
import { Post } from './posts/post/post';

export function Main() {

    return (
        <main>
            <SubReddits />
            <section id={styles.posts}>
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
