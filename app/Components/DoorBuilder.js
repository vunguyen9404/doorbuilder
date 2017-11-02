import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import DoorItem from './DoorItem';
import Config from '../Config';
import Door from './Door';
import SideBar from './SideBar';
import Room from './Room';
import RoomStyleA from './RoomStyleA';
import SelectionBar from './SelectionBar';
import MainNav from './MainNav';

class DoorBuilder extends React.Component {
    handleNeedHelp() {
        $('#needhelp').addClass('show');
    }
    render() {
        return (
            <div className="page design zoom-out">
                <div className="gradient-box-top"></div>
                <div className="gradient-box-bottom"></div>
                <div className="gradient-box-left"></div>
                <div className="gradient-box-right"></div>
                <a className="lightbox-control btn-help" style={{zIndex: 9}} data-target="#needhelp" onClick={this.handleNeedHelp.bind(this)}>Need Help?</a>
                <RoomStyleA />
                <Room />
                <Door />
                <SideBar />
                <MainNav />
                <SelectionBar />
            </div>
        );
    }
}

module.exports = DoorBuilder;