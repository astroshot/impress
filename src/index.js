import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router, Route, browserHistory } from 'react-router';
import ImpressPayment from './containers/ImpressPayment';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={ImpressPayment}>
    </Route>
    <Route path="impress" component={ImpressPayment}>
    </Route>
  </Router>
), document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
