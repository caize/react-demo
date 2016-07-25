import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Login from './users/login.js';
import Home from './home/home.js';
import App from './rootApp/app.js';
import authSettings from './auth/authSettings.js';

function requireAuth(nextState, replace){
    if (!authSettings.isLoggedIn()){
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
    
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} onEnter={requireAuth} />
        <Route path="login" component={ Login }  />
        <Route path="*" component={ Home } onEnter={requireAuth}   />
    </Route>
);