'use strict';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import {connect} from  'react-redux';
import AppBar from './appBar.js';
import {logout} from '../users/userActions.js';

class App extends React.Component {
    constructor(props){
       super(props);
    }

    render(){
        return (
            <MuiThemeProvider>
                <div className='app-container'>
                    <AppBar user={this.props.user} logout={this.props.logout}></AppBar>
                    <div className='app-body-container' >
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
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
        logout: (id) => dispatch(logout(id))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);