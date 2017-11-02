import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Config from '../Config';
import changeCase from 'change-case';

class DoorItem extends React.Component {
    render () {
        let doorDesignClass = "doors door-" + changeCase.lowerCase(this.props.stateSc.doorDesign.type);
        let countDoor = 1;
        switch (changeCase.lowerCase(this.props.stateSc.doorDesign.type)) {
            case 'solo':
                countDoor = 1;
                break;
            case 'trio':
                countDoor = 3;
                break;
            case 'quattro':
                countDoor = 4;
                break;
            case 'pentagon':
                countDoor = 5;
                break;
            case 'tokyo':
                countDoor = 6;
                break;
            case 'duot':
                countDoor = 5;
                break;
            case 'continental':
                countDoor = 8;
                break;
            default:
                countDoor = 1;
                break;
        }

        let glassSource = "url(" + Config.host + this.props.stateSc.glassOption.image + ")";
        let doorSource = "url(" + Config.host + this.props.stateSc.frameColor.image + ")";
        var listDoor = [];
        
        for (var i = 0; i < countDoor; i++) {
            listDoor.push(<div className="glass" key={i} style={{backgroundImage:glassSource}}><div className="door" style={{borderImageSource: doorSource}}></div></div>);
        }
        return (
            <div className={doorDesignClass} id={this.props.id} ref={this.props.ref} >
                {listDoor}
            </div>
        );
    }
}

module.exports = connect(function(state){
    return {stateSc: state}
})(DoorItem);