'use strict';

import {patientActions} from './patientConstants.js';
import {userActions} from '../users/userConstants.js';
import {getPatientByIdSuccess, getDocumentListSuccess, createDocumentSuccess} from './patientActions.js';
import apiClient from '../api/apiClient.js';
import { loop, Effects } from 'redux-loop';

const initState = {
    patient: null,
    documents: [],
    patientLoading: false,
    patientDocumentsLoading: false,
    patientDocumentCreateLoading: false
};


export default function(state = initState, action){

    switch(action.type){
        case patientActions.getPatient:
            return loop(
                Object.assign({}, state, {patientLoading: true}),
                Effects.promise(fetchPatient, action.id)
            );
        case patientActions.getPatientSuccess:
            return loop( 
                Object.assign({}, state, {patient: action.patient, patientLoading: false, patientDocumentsLoading: true}),
                Effects.promise(fetchDocuments, action.patient)
            );
        case patientActions.getPatientFailure:
            return Object.assign({}, state, {patientLoading: false});
        case patientActions.getDocumentList:
            return loop(
                Object.assign({}, state, {patientDocumentsLoading: true}),
                Effects.promise(fetchDocuments, action.patient)
            );
        case patientActions.getDocumentListSuccess:
            return Object.assign({}, state, {documents: action.documents, patientDocumentsLoading: false});
        case patientActions.getDocumentListFailure:
            return Object.assign({}, state, {patientDocumentsLoading: false});
        case patientActions.createDocument:
            return Object.assign({}, state, {patientDocumentCreateLoading: true});
        case patientActions.createDocumentSuccess:
            // retrieve new list after upload success. 
            return loop(
                Object.assign({}, state, {patientDocumentsLoading: true, patientDocumentCreateLoading: false}),
                Effects.promise(fetchDocuments, state.patient)
            );
        case patientActions.createDocumentFailure:
            return Object.assign({}, state, {patientDocumentCreateLoading: false});
       case userActions.logout:
            return initState;
        default:
            return state;
    }

}

function fetchPatient(id){
    return apiClient.makeAuthenticatedRequest(`patients/${id}`, {method: 'GET'}).then(resp => {
        return getPatientByIdSuccess(resp.data);
    });
}

function fetchDocuments(patient){
    return apiClient.makeAuthenticatedRequest(`patients/${patient.id}/documents`, {method: 'GET'}).then(resp => {
        return getDocumentListSuccess(resp.data);
    });
}
