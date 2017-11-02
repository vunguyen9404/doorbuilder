import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Data from '../Data';
import HomePage from './HomePage';
import DoorBuilder from './DoorBuilder';
import Footer from './Footer';
import NeedHelp from './Needhelp';
import RequestQuote from './RequestQuote';

class Index extends React.Component {
    render(){
        let design = this.props.stateSc.openBuilder ? <DoorBuilder /> : <HomePage />;
        return(
            <div className="app">
                {design}
                <Footer />
                <NeedHelp />
                <RequestQuote />
            </div>
        );
    }
}

module.exports = connect(function(state){
    return {stateSc: state}
})(Index);