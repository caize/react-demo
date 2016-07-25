'use strict';

import {doctorActions} from './doctorConstants.js';
import {userActions} from '../users/userConstants.js';
import apiClient from '../api/apiClient.js';
import { loop, Effects } from 'redux-loop';
import {getDoctorByIdSuccess, getPatientsForDoctor, getPatientsForDoctorSuccess} from './doctorActions.js';

const initState = {
    doctor: null,
    patients: []
};

export default function(state = initState, action){
    switch (action.type){
        case doctorActions.getDoctor: 
            return loop(
                state,
                Effects.promise(fetchDoctor, action.id)
            );
        case doctorActions.getDoctorSuccess:
            return handleFetchDoctorSuccess(state, action.doctor);
        case doctorActions.getPatientsForDoctor:
            return loop(
                state,
                Effects.promise(fetchPatients, action.doctor)
            );
        case doctorActions.getDoctorPatientsSuccess:
            return handleFetchPatientsSuccess(state, action.patients);
        case userActions.logout:
            return initState;
        default:
            return state;
    }
}

function fetchDoctor(id){
    return apiClient.makeAuthenticatedRequest(`doctors/${id}`, {method: 'GET'}).then(resp => {
        return getDoctorByIdSuccess(resp.data);
    });
}

function handleFetchDoctorSuccess(state, doctor){

    return loop( 
        Object.assign({}, state, {doctor}),
        Effects.promise(fetchPatients, doctor)
    );
}

function fetchPatients(doctor){
    return apiClient.makeAuthenticatedRequest(`doctors/${doctor.id}/patients`, { method: 'GET'}).then(resp => {
        return getPatientsForDoctorSuccess(resp.data);
    });
}

function handleFetchPatientsSuccess(state, patients){
    return Object.assign({}, state, {patients});
}

