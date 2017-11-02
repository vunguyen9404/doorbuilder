import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

class Needhelp extends React.Component {
    handleClose(){
        $('#needhelp').removeClass('show');
    }
    render(){
        return (
            <div id="needhelp" className="lightbox">
                <div className="">
                    <div className="lightbox-close fa fa-times-circle" onClick={this.handleClose.bind(this)}></div>
                    <div className="lightbox-body">
                        <h5 className="text-left">NEED HELP?</h5>
                        <p className="text-left">
                            <span>If you have questions, contact our representative at </span>
                            <a >contact@slidingdoorco.com</a>
                            <span> now to get help with your sliding doors.</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Needhelp;