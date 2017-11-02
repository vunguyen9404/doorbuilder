import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Config from '../Config';

class RoomStyleA extends React.Component {
    render(){
        let width = this.props.stateSc.dimensions.width * 2.5;
        let height = this.props.stateSc.dimensions.height * 2.5;
        let left = (1000 - width)/2;
        let img = this.props.stateSc.roomStyle.image ? <img className="furniture__img" style={{left: 0}} src={Config.host + this.props.stateSc.roomStyle.image}/>:<div></div>;
        return(
            <div className={'room-style ' + this.props.stateSc.design.type} style={{backgroundImage: "url(" + Config.host + "images/walls/inner/white.png)", backgroundSize: "100% 150px",width: width ,height:height, left:left}}>
                <div className="room-floor" style={{backgroundImage: "url(" + Config.host + "images/floors/inner/Lightwood.png)"}}></div>
                <div className="furniture">
                    {img}
                </div>
            </div>
        );
    }
}

module.exports = connect(function(state) {
    return {stateSc: state}
})(RoomStyleA);