import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Config from '../../Config';

class WallColorItem extends React.Component {
    setWallColor(){
        let dispatch = this.props.dispatch;
        dispatch({
            type: 'CHANGE_WALL_COLOR',
            color: this.props.color
        })
    }
    render () {
        return (
            <li className="cursor" data-type={this.props.color.type} onClick={this.setWallColor.bind(this)}>
                <img src={Config.host + this.props.color.thumb }/>
                <span>{this.props.color.name}</span>
            </li>
        );
    }
}

module.exports = connect(function(state){
    return {stateSc: state}
})(WallColorItem);