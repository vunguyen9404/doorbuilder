import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Config from '../Config';
import Size from './Sidebar/Size';
import DoorCount from './Sidebar/DoorCount';
import DoorColor from './Sidebar/DoorColor';
import DoorDesign from './Sidebar/DoorDesign';
import GlassOption from './Sidebar/GlassOption';
import WallColor from './Sidebar/WallColor';
import Flooring from './Sidebar/Flooring';
import Furniture from './Sidebar/Furniture';

class Sidebar extends React.Component {
    handleRequestQuote(){
        $('#requestQuote').addClass('show');
    }

    handleBackHome(){
        let dispatch = this.props.dispatch;
        dispatch({
            type: 'OPEN_BUILDER',
            builder: false
        })
    }

    render() {
        return(
            <div className="accordion">
                <div className="options panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="clear"></div>
                    <h1 className="panel-title" style={{display: "inline"}}>
                        <span className="caret"></span>
                        <span>BẮT ĐẦU</span>
                    </h1>
                    {/* Size */}
                    <div className="clear"></div>
                    <Size />
                    <div className="clear"></div>
                    <DoorCount />
                    <div className="clear"></div>
                    <DoorColor />
                    <div className="clear"></div>
                    <DoorDesign />

                    <div className="clear"></div>
                    <GlassOption />
                    <div className="clear"></div>
                    <hr/>
                    <WallColor />
                    <div className="clear"></div>
                    <Flooring />

                    <div className="clear"></div>
                    <Furniture />

                    <hr/>
                    <h4 className="panel-title">
                        <a className="lightbox-control" onClick={this.handleRequestQuote.bind(this)} data-target="#requestQuote">LIÊN HỆ</a>
                    </h4>
                    <div className="clear"></div>
                    <h4 className="panel-title">
                        <a className="#" onClick={this.handleBackHome.bind(this)}>QUAY LẠI</a>
                    </h4>
                </div>
            </div>
        );
    }
}

module.exports = connect(function(state){
    return {stateSc: state}
})(Sidebar);