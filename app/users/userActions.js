'use strict';

import {userActions} from './userConstants.js';

export function login(userName, password){
    return {
        type: userActions.login,
        userName,
        password
    };
}

export function loginSuccess(user, authToken){
    return {
        type: userActions.loginSuccess,
        user, 
        authToken
    };
}

export function loginFailure(){
    return {
        type: userActions.loginFailure
    };
}

export function logout(){
    return { 
        type: userActions.logout
    };
}
