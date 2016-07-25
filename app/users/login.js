'use strict';

import React from 'react';
import {connect} from  'react-redux';
import {RaisedButton, TextField, Card, CardTitle, CardText} from 'material-ui';
import {browserHistory } from 'react-router';
import {login} from './userActions.js'

class Login extends React.Component {
    constructor(props){
        super(props);
    }

    login(){
        this.props.login(this.userName.input.value, this.password.input.value);
        
    }

    componentWillUpdate(nextProps){
        if (nextProps.user){
            browserHistory.push('/');
        }
    }

    onKeyUp(e){
        if(e.keyCode == 13){
            this.login();
        }
    }

    render(){
        return (
            <div className='login-container'>
                <Card className='login-box'>
                    <CardTitle title="Login" subtitle="Please enter your user name and password" />
                    <CardText>
                        <div>
                            <TextField onKeyUp={(e) => this.onKeyUp(e)} ref={(i) => this.userName = i} hintText='User Name' type='text' ></TextField>
                        </div>
                        <div>
                            <TextField onKeyUp={(e) => this.onKeyUp(e)} ref={(i) => this.password = i} type='password' hintText='Password'></TextField>
                        </div>
                        <div>
                            <RaisedButton ref={(r) => this.submitBtn = r} onClick={() => this.login()} primary={true}>Login</RaisedButton>
                        </div>
                    </CardText>
                </Card>
            </div>
        );
    }

}

function mapStateToProps(state){
    return {
        user: state.userInfo.user
    };
}

function mapDispatchToProps(dispatch){
    return {
        login: (userName, password) => dispatch(login(userName, password))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);