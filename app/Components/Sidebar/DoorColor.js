import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import DoorColorItem from './DoorColorItem';

class DoorColor extends React.Component {
    render(){
        let frameColor = this.props.designs.frameColor;
        return(
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingFrameColor">
                    <h4 className="panel-title">
                        <a className="menu collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFrameColor" aria-expanded="false" aria-controls="collapseFrameColor">MÀU SẮC CỬA</a>
                    </h4>
                </div>

                <div id="collapseFrameColor" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFrameColor" aria-expanded="false" style={{height: 0}}>
                    <div className="panel-body">
                        <div className="options-glass">
                            <ul>
                                {frameColor.map((item, i) => {
                                    return <DoorColorItem key={i} frame={item} />
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
})(DoorColor);