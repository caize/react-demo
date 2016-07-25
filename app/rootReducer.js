import { combineReducers } from 'redux-loop';
import app from './rootApp/appReducer.js';
import userInfo from './users/userReducer.js';
import doctorInfo from './doctors/doctorReducer.js';
import patientInfo from './patients/patientReducer.js';

const rootReducer = combineReducers({
    app,
    userInfo,
    doctorInfo,
    patientInfo
});

export default rootReducer;