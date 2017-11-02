import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import FlooringItem from './FlooringItem';

class Flooring extends React.Component {

    render(){
        let floorings = this.props.designs.flooring;
        return(
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title">
                        <a className="menu collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">MÀU SÀN NHÀ</a>
                    </h4>
                </div>

                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="false" style={{height: 0}}>
                    <div className="panel-body">
                        <div className="options-floor">
                            <ul>
                                {floorings.map((item, i) => {
                                    return <FlooringItem key={i} flooring={item} /> 
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
})(Flooring);