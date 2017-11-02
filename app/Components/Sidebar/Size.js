import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

class Size extends React.Component {
    minusWidth() {
        if (parseInt(this.refs.width.value) > this.props.stateSc.design.dimensions.minWidth) {
            let dispatch = this.props.dispatch;
            dispatch({
                type: 'DOOR_MINUS_WIDTH'
            })
        }
    }

    minusHeight() {
        if (parseInt(this.refs.height.value) > this.props.stateSc.design.dimensions.minHeight) {
            let dispatch = this.props.dispatch;
            dispatch({
                type: 'DOOR_MINUS_HEIGHT'
            })
        }
    }

    plusWidth(){
        if (parseInt(this.refs.width.value) < this.props.stateSc.design.dimensions.maxWidth) {
            let dispatch = this.props.dispatch;
            dispatch({
                type: 'DOOR_PLUS_WIDTH'
            })
        }
    }

    plusHeight() {
        if (parseInt(this.refs.height.value) < this.props.stateSc.design.dimensions.maxHeight) {
            let dispatch = this.props.dispatch;
            dispatch({
                type: 'DOOR_PLUS_HEIGHT'
            })
        }
    }

    render() {
        let width = this.props.stateSc.dimensions.width;
        let height = this.props.stateSc.dimensions.height;

        let minWidth = this.props.stateSc.design.dimensions.minWidth;
        let maxWidth = this.props.stateSc.design.dimensions.maxWidth;

        let minHeight = this.props.stateSc.design.dimensions.minHeight;
        let maxHeight = this.props.stateSc.design.dimensions.maxHeight;

        return (
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingDimensions">
                    <h4 className="panel-title">
                        <a className="menu collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseDimensions" aria-expanded="false" aria-controls="collapseDimensions">KÍCH THƯỚC</a>
                    </h4>
                </div>
    
                <div id="collapseDimensions" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingDimensions" aria-expanded="false" style={{height: "0px"}}>
                    <div className="panel-body">
                        <div className="options-dimensions">
                            <div>
                                <img src="https://s3.amazonaws.com/www.slidingdoorco.com/images/dimensions/default.png"/>
                            </div>
                            <span>Kích thước cửa</span>
                            <div className="form-inline">
                                <div className="form-group">
                                    <label>Chiều dài</label>
                                    <input type="text" ref="width" readOnly="true" className="form-control" min={minWidth} max={maxWidth} value={width}/>
                                    <label></label>
                                </div>
                                <button onClick={this.minusWidth.bind(this)} className="btn btn-default fa fa-minus-circle"></button>
                                <button onClick={this.plusWidth.bind(this)} className="btn btn-default fa fa-plus-circle"></button>
                            </div>
                            <div className="form-inline">
                                <div className="form-group">
                                    <label>Chiều rộng</label>
                                    <input type="text" ref="height" readOnly="true" className="form-control" min={minHeight} max={maxHeight} value={height}/>
                                    <label></label>
                                </div>
                                <button onClick={this.minusHeight.bind(this)} className="btn btn-default fa fa-minus-circle"></button>
                                <button onClick={this.plusHeight.bind(this)} className="btn btn-default fa fa-plus-circle"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = connect(function(state){
    return {stateSc: state}
})(Size)