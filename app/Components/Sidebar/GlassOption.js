import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import GlassOptionItem from './GlassOptionItem';

class GlassOption extends React.Component {
    render(){
        let glassOptions = this.props.designs.glassOptions;
        return(
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingGlass">
                    <h4 className="panel-title">
                        <a className="menu collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseGlass" aria-expanded="false" aria-controls="collapseGlass">LỰA CHỌN KÍNH</a>
                    </h4>
                </div>

                <div id="collapseGlass" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingGlass" aria-expanded="false">
                    <div className="panel-body">
                        <div className="options-glass">
                            <ul>
                                {glassOptions.map((item, i) => {
                                    return <GlassOptionItem key={i} glass={item}/>
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
})(GlassOption);