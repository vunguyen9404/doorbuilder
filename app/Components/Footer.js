import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

class Footer extends React.Component {
    render() {
        let source = this.props.stateSc.openBuilder ? 'https://s3.amazonaws.com/www.slidingdoorco.com/images/logo_transparent.png':'https://s3.amazonaws.com/www.slidingdoorco.com/images/splashPage/logo.png';
        return (
            <div className="footer">
                <img src={source} className="logo"/>
            </div>
        );
    }
}

module.exports = connect(function(state){
    return {stateSc: state}
})(Footer);