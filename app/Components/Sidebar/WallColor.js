import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import WallColorItem from './WallColorItem';

class WallColor extends React.Component {
    render() {
        let wallColors = this.props.designs.wallColor;
        return(
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title">
                        <a className="menu collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">MÀU SƠN TƯỜNG</a>
                    </h4>
                </div>

                <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" aria-expanded="false" style={{height: 0}}>
                    <div className="panel-body">
                        <div className="options-wall">
                            <ul>
                                {wallColors.map((item, i) => {
                                    return <WallColorItem key={i} color={item}/>
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
}) (WallColor);