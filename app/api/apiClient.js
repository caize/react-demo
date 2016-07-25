'use strict';

import configSettings from '../config/configSettings.js';
import authSettings from '../auth/authSettings.js';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

const client = {
  makeRequest: function(path, fetchOpts){
    const url = `${configSettings.apiRoot}${path}`;
    const opts = fetchOpts || {};

    const newHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    
    Object.assign(newHeaders, opts.headers);
    const finalOpts = Object.assign({}, opts, {headers: newHeaders});

    return fetch(url, finalOpts)
      .then(checkStatus)
      .then(rsp => {
        return rsp.json().then(json => {
          return Promise.resolve({
            data: json,
            status: rsp.status
          });
        })
        .catch(() => {
          let error = new Error('bad json');
          error.response = rsp;
          throw error;
        });
      })
      .catch(err => {
        return Promise.reject({
          status: err.response.status,
          message: err.message
        });
      });
  },

  makeAuthenticatedRequest: function(path, fetchOpts, dispatch){
    const opts = fetchOpts || {};
    const url = `api/${path}`;
   
    const newHeaders = {
      'x-access-token': authSettings.authToken
    };
    Object.assign(newHeaders, opts.headers);

    const finalOpts = Object.assign({}, opts, {headers: newHeaders});

    return this.makeRequest(url, finalOpts)
      .catch(err => {
        if(err.status === 401){
          err.handled = true;

          // todo: Handle this
        }
        return Promise.reject(err);
      });
  }
};

export default client;
