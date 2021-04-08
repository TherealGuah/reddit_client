import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import './main.css';

export function Main() {

    return (
        <Switch>
            <Route exact path="/individualPost">
                {/* <Post /> */}
            </Route>
            <Route exact path="/">
                {/* <PostsList /> */}
            </Route>
        </Switch>
    );
}
