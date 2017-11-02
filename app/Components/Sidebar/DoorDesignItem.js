import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Config from '../../Config';

class DoorDesignItem extends React.Component {
    setDoorDesign() {
        let dispatch = this.props.dispatch;
        dispatch({
            type: 'CHANGE_DOOR_DESIGN',
            design: this.props.design
        })
    }
    render(){
        return(
            <li className="cursor active" data-type={this.props.design.type} onClick={this.setDoorDesign.bind(this)}>
                <img src={Config.host + this.props.design.thumb}/>
                <span>{this.props.design.name}</span>
            </li>
        );
    }
}

module.exports = connect(function(state){
    return {stateSc: state}
})(DoorDesignItem);