'use strict';

import React from 'react';
import PatientInfo from './patientInfo.js';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class Doctor extends React.Component {
    constructor(props){
       super(props);
    }

    render(){
        let patients = null,
            doctorName = this.props.doctor ? this.props.doctor.name : '';

        if (this.props.patients){
            patients = this.props.patients.map(patient => <PatientInfo key={patient.id} patient={patient} />);
        }

        return (<div className='doctor-container'>
                    <div className='doctor-header'>
                        <h2>Welcome {doctorName}</h2>
                    </div> 
                    <List>
                        <Subheader>Patients</Subheader>
                        {patients}
                    </List>
                </div>);
    }
}

export default Doctor;
