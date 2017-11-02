import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

class RequestQuote extends React.Component {
    handleClose(){
        $('#requestQuote').removeClass('show');
    }
    render() {
        return(
            <div id="requestQuote" className="lightbox request-quote">
            <div className="">
                <div className="lightbox-close fa fa-times-circle" onClick={this.handleClose.bind(this)}></div>
                <div className="lightbox-body">
                    <form>
                        <h5 className="text-left">LIÊN HỆ</h5>
                        <p className="text-left">We're excited to quote your project for you! Once we receive your quote request, a sales representative will get in touch with you within 48 hours.</p>
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="inputFirstName">
                                        <span>FIRST NAME </span>
                                        <span>*</span>
                                    </label>
                                    <input type="text" className="form-control" id="inputFirstName" placeholder="First Name"/>
                                </div>
                            </div>
        
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="inputLastName">
                                        <span>LAST NAME </span>
                                        <span>*</span>
                                    </label>
                                    <input type="text" className="form-control" id="inputLastName" placeholder="Last Name"/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="inputPhone">
                                        <span>PHONE </span>
                                        <span>*</span>
                                    </label>
                                    <input type="text" className="form-control" id="inputPhone" placeholder="Phone"/>
                                </div>
                            </div>
        
                            <div className="col-xs-6">
                                <div className="form-group has-error">
                                    <label htmlFor="inputEmail">
                                        <span>EMAIL</span>
                                        <span>*</span>
                                    </label>
                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                                </div>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="form-group">
                                    <label htmlFor="inputAddress">
                                        <span>ADDRESS </span>
                                        <span>*</span>
                                    </label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="Address"/>
                                </div>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="inputState">
                                        <span>STATE/PROVINCE </span>
                                        <span>*</span>
                                    </label>
                                    <select name="state" className="form-control" id="inputState">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="inputZip">
                                        <span>ZIP/POSTAL CODE</span>
                                        <span>*</span>
                                    </label>
                                    <input type="text" className="form-control" id="inputZip" placeholder="Zip"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="form-group">
                                    <label htmlFor="inputComments">COMMENTS</label>
                                    <textarea className="form-control" id="inputComments"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="form-group newsletter-container">
                                    <label htmlFor="newsletter">
                                        <input id="newsletter" type="checkbox" name="newsletter" checked=""/>
                                        <span> Join our email list</span>
                                    </label>
                                </div>
                            </div>
                            <div className="col-xs-12">
                                <div className="form-group notice-container">
                                    <span className="notice">
                                        <span>By selecting this box, you will be subscribed to receive emails from The Sliding Door Company. The Sliding Door Company values its customers and respects their privacy. To review our privacy policy, please click </span>
                                        <a href="http://www.slidingdoorco.com/help/privacy-notice" target="_blank">here</a>
                                        <span>.</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <button className="btn btn-default" name="send">SEND REQUEST</button>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="form-group text-right required-notice">
                                    <span>* REQUIRED FIELDS</span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}
module.exports = RequestQuote;