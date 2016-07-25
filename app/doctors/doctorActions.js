'use strict';

import {doctorActions} from './doctorConstants.js';

export function getDoctorById(id){
    return {
        type: doctorActions.getDoctor,
        id
    };
}

export function getDoctorByIdSuccess(doctor){
    return {
        type: doctorActions.getDoctorSuccess,
        doctor
    };
}

export function getDoctorByIdFailure(failure){
    return {
        type: doctorActions.getDoctorFailure,
        failure
    };
}

export function getPatientsForDoctor(doctor){
    return {
        type: doctorActions.getDoctorPatients,
        doctor
    };
}

export function getPatientsForDoctorSuccess(patients){
    return {
        type: doctorActions.getDoctorPatientsSuccess,
        patients
    };
}

export function getPatientsForDoctorFailure(failure){
    return {
        type: doctorActions.getDoctorPatientsFailure,
        failure
    };
}
