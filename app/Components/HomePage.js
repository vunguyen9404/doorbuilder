import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import CategoryDesign from './CategoryDesign';
import Data from '../Data';

class HomePage extends React.Component {
    handleNeedHelp() {
        $('#needhelp').addClass('show');
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row-fluid">
                    <div className="page design-selection">
                        <div className="row">
                            <div className="col-sm-9 col-xs-9">
                                <h3 className="padding-left-1r padding-top-4r">Hello, what would you like to design?</h3>
                            </div>
                            <div className="col-sm-3 col-xs-3 padding-top-4r text-right">
                                <a onClick={this.handleNeedHelp.bind(this)} className="lightbox-control btn-help" data-target="#needhelp">Need Help?</a>
                            </div>
                            <div className="row padding-top-4r padding-left-2r padding-right-2r">
                                {Data.designs.map((design, i)=>{
                                    return <CategoryDesign key={i} index={i} design={design}/>
                                })}
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
})(HomePage);