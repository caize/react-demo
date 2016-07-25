'use strict';

import React from 'react';
import {AppBar as MUAppBar} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';

class AppBar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        let iconElementRight = null;

        if (this.props.user){
            iconElementRight = (<FlatButton label="Logout" onClick={() => this.props.logout()} />);
        }

        return (
            <MUAppBar showMenuIconButton={false} title="Medical Co Inc"
                iconElementRight={iconElementRight}>
            </MUAppBar>
        );
    }
}

export default AppBar;