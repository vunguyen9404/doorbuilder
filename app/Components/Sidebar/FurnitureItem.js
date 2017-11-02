import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

class FurnitureItem extends React.Component {
    handleFur() {
        let dispatch = this.props.dispatch;
        dispatch({
            type: 'CHANGE_ROOM_STYLE',
            style: this.props.style
        })
    }
    render(){
        return(
            <li className="cursor" data-type={this.props.style.image} onClick={this.handleFur.bind(this)}>
                <span>{this.props.style.name}</span>
            </li>
        );
    }
}

module.exports = connect(function(state){
    return {stateSc: state}
})(FurnitureItem);