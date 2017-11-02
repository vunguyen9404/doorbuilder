import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Config from '../../Config';

class FlooringItem extends React.Component {
    setFlooring(){
        let dispatch =  this.props.dispatch;
        dispatch({
            type: 'CHANGE_FLOORING',
            flooring: this.props.flooring
        })
    }
    render(){
        return(
            <li className="cursor" data-type={this.props.flooring.type} onClick={this.setFlooring.bind(this)}>
                <img src={Config.host + this.props.flooring.thumb}/>
                <span>{this.props.flooring.name}</span>
            </li>
        );
    }
}

module.exports = connect(function(state){
    return {stateSc: state}
})(FlooringItem);