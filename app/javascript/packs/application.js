// @flow

/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import throttle from 'lodash/throttle';
import PropTypes from 'prop-types'
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

import App from '../App';
import HelloContainer from '../hello/HelloContainer';
import reducer from '../reducers';
import { loadState, saveState } from '../localStorage';

let store = createStore(reducer, loadState());
store.subscribe(throttle(() => (saveState(store.getState())), 1000));

document.addEventListener('DOMContentLoaded', () => (
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
));