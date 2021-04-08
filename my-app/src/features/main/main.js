import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import './main.css';
import { SubReddits } from './subReddits/subReddits';

export function Main() {
    

    return (
        <main>
            <SubReddits />
            <Switch>
                <Route exact path="/individualPost">
                    {/* <Post /> */}
                </Route>
                <Route exact path="/">
                    {/* <PostsList /> */}
                </Route>
            </Switch>
        </main>
    );
}
