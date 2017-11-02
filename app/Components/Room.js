import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Config from '../Config';

class Room extends React.Component {
    render() {
        return(
            <div className="zoom zoom-h-60 zoom-v-30">
                <div className="floor" style={{backgroundImage: "url(" + Config.host  + this.props.stateSc.flooring.image +")"}}></div>
                <div className="wall" style={{backgroundImage:"url(" + Config.host + this.props.stateSc.wallColor.image +")"}}></div>
                <div className="ceiling" style={{backgroundImage:"url(" + Config.host + "images/ceiling/white.png)"}}></div>
            </div>
        );
    }
}

module.exports = connect(function(state){
    return {stateSc: state}
})(Room);