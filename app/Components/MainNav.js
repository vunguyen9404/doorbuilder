import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

class MainNav extends React.Component {
    handleRequestQuote(){
        $('#requestQuote').addClass('show');
    }

    render(){
        return(
            <div className="main-nav" style={{zIndex: 2}}>
                <div className="row">
                    <div className="col-sm-6 col-xs-6">
                        <div className="nav-item">
                            <span>1. </span>
                            <span className="black keyword">PERSONALIZE</span>
                            <span> YOUR DOORS</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <div className="nav-item">
                            <a className="lightbox-control" data-target="#requestQuote" onClick={this.handleRequestQuote.bind(this)}>
                                <span>2. </span>
                                <span className="keyword">REQUEST</span>
                                <span> A QUOTE</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = MainNav;