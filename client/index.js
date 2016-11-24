import _ from 'lodash';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import SignUpContainer from './containers/SignUpContainer';
import SignInContainer from './containers/SignInContainer';
import MainContainer from './containers/MainContainer';
import ManagePlayersContainer from './containers/ManagePlayersContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const store = configureStore();

render(
  <Provider store={store}>
    <MuiThemeProvider>
    <Router history={browserHistory}>
       <Route path="/signup" component={SignUpContainer} />
       <Route path="/signin" component={SignInContainer} />
       <Route path="/index" component={MainContainer} />
       <Route path="/manageplayers" component={ManagePlayersContainer} />
       <Route path="/(:line)" component={App} />
    </Router>
    </MuiThemeProvider>
  </Provider>, document.getElementById('app')
);
