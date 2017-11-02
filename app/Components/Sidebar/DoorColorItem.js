import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Config from '../../Config';

class DoorColorItem extends React.Component {
    setFrame(){
        let dispatch = this.props.dispatch;
        dispatch({
            type: 'CHANGE_DOOR_FRAME',
            color: this.props.frame
        });
    }

    render(){
        return (
            <li className="cursor" data-type={this.props.frame.type} onClick={this.setFrame.bind(this)}>
                <img src={Config.host + this.props.frame.thumb}/>
                <span>{this.props.frame.name}</span>
            </li>
        );
    }
}

module.exports = connect(function(state){
    return {stateSc: state}
})(DoorColorItem);