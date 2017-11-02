import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

class DoorCountItem extends React.Component {
    setDoorCount(){
        let dispatch = this.props.dispatch;
        dispatch({
            type: 'CHANGE_DOOR_COUNT',
            number: this.props.number
        })
    }

    render() {
        return(
            <li className="cursor" data-type={this.props.number} onClick={this.setDoorCount.bind(this)}>
                <span>{this.props.number}</span>
            </li>
        )
    }
}

module.exports = connect(function(state) {
    return {stateSc: state}
})(DoorCountItem);