'use strict';

import React from 'react';
import {connect} from  'react-redux';
import Patient from '../patients/patient.js';
import Doctor from '../doctors/doctor.js';
import {getDoctorById} from '../doctors/doctorActions.js';
import {createDocument, createDocumentSuccess, createDocumentFailure, getPatientById} from '../patients/patientActions.js';
import CircularProgress from 'material-ui/CircularProgress';
import {userTypes} from '../users/userConstants.js';
import { browserHistory } from 'react-router';

class Home extends React.Component {
    constructor(props){
       super(props);
    }

    componentWillUpdate(nextProps){
        if (!nextProps.user){
            browserHistory.push('/login');
        }
    }

    componentDidMount(){

        if (this.props.user){
            if (this.props.user.type === userTypes.doctor){
                this.props.getDoctorById(this.props.user.doctorId);
            }
            else if (this.props.user.type === userTypes.patient){
                this.props.getPatientById(this.props.user.patientId);
            }            
        }
    }

    render(){

        let homeComponent = null;

        if (this.props.doctor){
            homeComponent = (<Doctor doctor={this.props.doctor} 
                patients={this.props.doctorPatients}></Doctor>);
        }
        else if (this.props.patient){
            homeComponent = (<Patient patient={this.props.patient} 
                documents={this.props.patientDocuments} 
                createDocument={this.props.createDocument}
                createDocumentSuccess={ this.props.createDocumentSuccess}
                createDocumentFailure={ this.props.createDocumentFailure} ></Patient>);
        }

        return (
            <div className='home-container'>
                {homeComponent}
            </div>
        );
    }

}

function mapStateToProps(state){
    let {doctor, patients, doctorLoading, doctorPatientsLoading} = state.doctorInfo,
        {patient, documents, patientLoading, patientDocumentsLoading,
            patientDocumentCreateLoading} = state.patientInfo;

    return {
        user: state.userInfo.user,
        doctor: doctor,
        doctorPatients: patients,
        patient: patient,
        patientDocuments: documents,
        isLoading: patientLoading || doctorLoading || 
            doctorPatientsLoading || patientDocumentsLoading || 
            patientDocumentCreateLoading
    };
}

function mapDispatchToProps(dispatch){
    return {
        getDoctorById: (id) => dispatch(getDoctorById(id)),
        createDocument: (patient, doc) => dispatch(createDocument(patient, doc)),
        getPatientById: (id) => dispatch(getPatientById(id)),
        createDocument: () => dispatch(createDocument()),
        createDocumentSuccess: () => dispatch(createDocumentSuccess()), 
        createDocumentFailure: () => dispatch(createDocumentFailure())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
