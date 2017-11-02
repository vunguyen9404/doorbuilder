import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import DoorDesignItem from './DoorDesignItem';

class DoorDesign extends React.Component {
    render() {
        let design = this.props.designs.doorDesign;
        return(
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingDoorDesign">
                    <h4 className="panel-title">
                        <a className="menu collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseDoorDesign" aria-expanded="false" aria-controls="collapseDoorDesign">KIỂU DÁNG CỬA</a>
                    </h4>
                </div>
                <div id="collapseDoorDesign" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingDoorDesign" aria-expanded="false" style={{height: 0}}>
                    <div className="panel-body">
                        <div className="options-glass">
                            <ul>
                                {design.map((item, i)=>{
                                    return <DoorDesignItem key={i} design={item} />
                                })}
                            </ul>
                            
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = connect(function(state){
    return {designs: state.design}
})(DoorDesign);