'use strict';

import {patientActions} from './patientConstants.js';

export function getPatientById(id){
    return {
        type: patientActions.getPatient,
        id
    };
}

export function getPatientByIdSuccess(patient){
    return {
        type: patientActions.getPatientSuccess,
        patient
    };
}

export function getPatientByIdFailure(failure){
    return {
        type: patientActions.getPatientFailure,
        failure
    };
}

export function getDocumentList(patient){
    return {
        type: patientActions.getDocumentList,
        patient
    };
}

export function getDocumentListSuccess(documents){
    return {
        type: patientActions.getDocumentListSuccess,
        documents
    };
}

export function getDocumentListFailure(failure){
    return {
        type: patientActions.getDocumentListFailure,
        failure
    };
}

export function createDocument(){
    return {
        type: patientActions.createDocument
    };
}

export function createDocumentSuccess(){
    return {
        type: patientActions.createDocumentSuccess
    };
}

export function getDocumentListFailure(failure){
    return {
        type: patientActions.createDocumentFailure,
        failure
    };
}

