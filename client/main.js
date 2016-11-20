import _ from 'lodash';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';



const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:line)" component={App} />
    </Router>
  </Provider>, document.getElementById('app')
);
