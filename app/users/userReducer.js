'use strict';

import {userActions} from './userConstants.js';
import {loginSuccess, loginFailure} from './userActions.js';
import { loop, Effects } from 'redux-loop';
import apiClient from '../api/apiClient.js';
import authSettings from '../auth/authSettings.js';
import { browserHistory } from 'react-router';

const initState = {
        user: authSettings.user,
        authToken: authSettings.authToken
    },
    emptyState = {
        user: null,
        authToken: null
    };


function handleLogout(){
    let newState = emptyState;
    authSettings.user = newState.user;
    authSettings.authToken = newState.authToken;
    
    return newState;
}

function handleLoginSuccess(state, user, authToken){
    let newState = Object.assign({}, state, {user,authToken});
    authSettings.user = newState.user;
    authSettings.authToken = newState.authToken;
    
    return newState;
}

export default function(state = initState, action){
    switch (action.type){
        case userActions.login: 
            return loop(
                state,
                Effects.promise(performAuth, action.userName, action.password)
            );
        case userActions.loginSuccess:
            return handleLoginSuccess(state, action.user, action.authToken);
        case userActions.logout:
            return handleLogout();
        case userActions.loginFailure:
        default:
            return state;
    }
}

function performAuth(userName, password){

    return apiClient.makeRequest('authentication/login', {
        method: 'POST',
        body: JSON.stringify({
            userName,
            password
        })
    }).then(resp => {
        if (resp.data.success){
            return loginSuccess(resp.data.user, resp.data.token);
        }
        else {
            return loginFailure();
        }
    }).catch(e => {
        return loginFailure();
    });
}

