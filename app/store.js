import { createStore } from 'redux';
import { install } from 'redux-loop';
import rootReducer from './rootReducer.js';

const store = createStore(rootReducer, {}, install());

export default store;
