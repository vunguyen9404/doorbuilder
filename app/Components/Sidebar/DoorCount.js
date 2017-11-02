import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import DoorCountItem from './DoorCountItem';

class DoorCount extends React.Component {
    render() {
        let doorCount = this.props.designs.doorCount;
        return(
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingDoorCount">
                    <h4 className="panel-title">
                        <a className="menu collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseDoorCount" aria-expanded="false" aria-controls="collapseDoorCount">SỐ CÁNH CỬA</a>
                    </h4>
                </div>
                <div id="collapseDoorCount" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingDoorCount" aria-expanded="false" style={{height: 0}}>
                    <div className="panel-body">
                        <div className="options-door-count">
                            <ul>
                                {doorCount.map((item, i) => {
                                    return <DoorCountItem key={i} number={item} />
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
})(DoorCount);