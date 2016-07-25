'use strict';

import React from 'react';
import PersonIcon from 'material-ui/svg-icons/social/person';
import {ListItem} from 'material-ui/List';
import moment from 'moment';

class PatientInfo extends React.Component {
    constructor(props){
       super(props);
    }

    render(){
        let patient = this.props.patient || {},
            age = '';

        if(patient.birthdate){
            age = moment().diff(moment(patient.birthdate, 'MM/DD/YYYY'), 'years');
        }

        return (<ListItem className='patientInfo-container'
                    leftIcon={<PersonIcon />  } disabled={true}>
                    <div>{patient.name}</div>
                    <div>{`Age: ${age}`}</div>
                    <div className='patientInfo-address'>
                        <div>{patient.street}</div>
                        <div>{`${patient.city} ${patient.state}, ${patient.zip}`}</div>
                    </div>

                
            </ListItem>);
    }
}

export default PatientInfo;