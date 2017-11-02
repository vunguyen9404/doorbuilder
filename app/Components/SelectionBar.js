import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

class SelectionBar extends React.Component {
    render(){
        return(
            <div className="selection-nav" style={{zIndex: 2}}>
                <div className="row">
                    <div className="col-sm-12 col-xs-12 nav-item">
                        <a className="item" data-toggle="collapse" data-parent="#accordion" href="#collapseDoorCount">
                            <span>{this.props.stateSc.doorCount}</span>
                            <span> CỬA</span>
                            <span></span>
                        </a>
                        
                        <a className="item" data-toggle="collapse" data-parent="#accordion" href="#collapseFrameColor">
                            <span>{this.props.stateSc.frameColor.name}</span>
                            <span> FRAME</span>
                        </a>
                        <a className="item" data-toggle="collapse" data-parent="#accordion" href="#collapseDoorDesign">
                            {this.props.stateSc.doorDesign.name}
                        </a>
                        <a className="item" data-toggle="collapse" data-parent="#accordion" href="#collapseGlass">
                            <span>{this.props.stateSc.glassOption.name}</span>
                            <span > GLASS</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = connect(function(state){
    return {stateSc: state}
})(SelectionBar);