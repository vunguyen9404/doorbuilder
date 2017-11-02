import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Config from '../../Config';

class GlassOptionItem extends React.Component {
    setGlassOption(){
        let dispatch = this.props.dispatch;
        dispatch({
            type: 'CHANGE_GLASS_OPTION',
            glass: this.props.glass
        })
    }
    render(){
        return(
            <li className="cursor active" data-type={this.props.glass.type} onClick={this.setGlassOption.bind(this)}>
                <img src={Config.host + this.props.glass.thumb}/>
                <span>{this.props.glass.name}</span>
            </li>
        );
    }
}

module.exports = connect(function(state){
    return {stateSc: state}
})(GlassOptionItem);