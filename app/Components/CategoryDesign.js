import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Data from '../Data';
import Config from '../Config';

class CategoryDesgin extends React.Component {
    openDoorBuilder() {
        let dispatch = this.props.dispatch;
        dispatch({
            type: 'OPEN_BUILDER',
            builder: true
        });

        dispatch({
            type: 'CHANGE_DESIGNKEY',
            design: this.props.design
        });

        dispatch({
            type: 'CHANGE_DOOR_COUNT',
            number: this.props.design.doorCount[0]
        });

        dispatch({
            type: 'CHANGE_DOOR_FRAME',
            color: this.props.design.frameColor[0]
        });

        dispatch({
            type: 'CHANGE_DOOR_DESIGN',
            design: this.props.design.doorDesign[0]
        });

        dispatch({
            type: 'CHANGE_GLASS_OPTION',
            glass: this.props.design.glassOptions[0]
        });

        dispatch({
            type: 'CHANGE_WALL_COLOR',
            color: this.props.design.wallColor[0]
        });

        dispatch({
            type: 'CHANGE_FLOORING',
            flooring: this.props.design.flooring[0]
        });

        dispatch({
            type: 'CHANGE_ROOM_STYLE',
            style: this.props.design.roomStyle[0]
        })

        dispatch({
            type: 'CHANGE_WIDTH',
            width: this.props.design.dimensions.width
        });

        dispatch({
            type: 'CHANGE_HEIGHT',
            height: this.props.design.dimensions.height
        });

    }

    render() {
        return (
            <div className="col-sm-3 col-xs-3 layout-list cursor" datatype={this.props.design.type} onClick={this.openDoorBuilder.bind(this)}>
                <img src={Config.host + this.props.design.image}/>
                <p className="padding-top-1r">{this.props.design.name}</p>
            </div>
        );
    }
}

module.exports = connect(function(state) {
    return {stateSc: state}
})(CategoryDesgin);