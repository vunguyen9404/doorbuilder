var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var store = require('./redux-store.js');
import Index from './Components/Index'

ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('wrapper')
);
