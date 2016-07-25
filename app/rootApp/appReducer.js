'use strict';

import {userActions} from '../users/userConstants.js';

const initState = {
    loading: false
};

export default function(state = initState, action){

    switch(action.type){

        case userActions.login:
            return Object.assign({}, state, {loading: true});
        case userActions.loginSuccess:
        case userActions.loginFailure:
            return Object.assign({}, state, {loading: false});
        default:
            return state;
    }

    
}