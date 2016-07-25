'use strict';

import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import configSettings from '../config/configSettings.js';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import Subheader from 'material-ui/Subheader';
import authSettings from '../auth/authSettings.js';


class Patient extends React.Component {
    constructor(props){
       super(props);
    }
    onDrop(files){
        files.forEach((f) => {
            console.log(f);
        });
    }

    render(){

        if (this.props.patient){
            const componentConfig = {
                showFiletypeIcon: false,
                postUrl: `${configSettings.apiRoot}api/patients/${this.props.patient.id}/documents`,
               
            },
            djsConfig = {
                 headers: {
                    'x-access-token': authSettings.authToken
                }
            },
            eventHandlers = {
                processing: () => this.props.createDocument(),
                complete: (file) => {
                    this.dropzone.removeFile(file);
                    this.props.createDocumentSuccess();
                },
                error: () => this.props.createDocumentFailure(),
                init: (dropzone) => this.dropzone = dropzone
            };

            return (
                <div className='patient-container'>
                    <div className='patient-header'>
                        <h2>Welcome {this.props.patient.name}</h2>
                    </div>
                    <div className='patient-documents'>
                        <div className='patient-documents-list'>
                        <List>
                            <Subheader>Your Documents</Subheader>
                            {this.props.documents.map((doc, index) => <ListItem disabled={true}
                                    leftAvatar={<Avatar icon={<ActionAssignment /> } />}  key={index} primaryText={doc} />)}
                        </List>
                        </div>
                        <div className='patient-documents-form'>
                            <DropzoneComponent config={componentConfig} 
                                eventHandlers={eventHandlers}
                                djsConfig={djsConfig}>
                                
                            </DropzoneComponent>
                        </div>
                    </div>
                </div>
            );            
        }

       return (<div>Loading</div>);
    }
}

export default Patient;