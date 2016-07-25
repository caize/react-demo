import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import store from './store.js';
import routes from './routes.js';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

//Needed for onTouchTap
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(
   <Provider store={store}>
        <Router history={ browserHistory }>
            { routes }
        </Router>
    </Provider>,

  document.getElementById('app')
);
