'use strict';

const USER_IDENTIFIER = 'AuthSettings.user',
    TOKEN_IDENTIFIER = 'AuthSettings.authToken';

export class AuthSettings{
    constructor(storage = localStorage){
        this.storage =storage;
    }

    get user(){
        return JSON.parse(this.storage.getItem(USER_IDENTIFIER));
    }
    set user(user){
        this.storage.setItem(USER_IDENTIFIER, JSON.stringify(user));
    }
    set authToken(token){
        this.storage.setItem(TOKEN_IDENTIFIER, token);
    }
    get authToken(){
        return this.storage.getItem(TOKEN_IDENTIFIER);
    }

    isLoggedIn(){
        return this.user && this.authToken;
    }
}

const settings = new AuthSettings();

export default settings;