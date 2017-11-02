import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import FurnitureItem from './FurnitureItem';

class Furniture extends React.Component {
    render() {
        let roomStyle = this.props.stateSc.design.roomStyle;
        return (
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingThree">
                    <h4 className="panel-title">
                        <a className="menu collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">ROOM STYLE</a>
                    </h4>
                </div>

                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree" aria-expanded="false">
                    <div className="panel-body">
                        <div className="options-roomstyle">
                            <ul>
                                {roomStyle.map((style, i) => {
                                    return <FurnitureItem style={style} key={i} />
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

module.exports = connect(function(state){ return {stateSc: state} })(Furniture);