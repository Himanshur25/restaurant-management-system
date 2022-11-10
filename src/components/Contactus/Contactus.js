import React from 'react'
import "./Contactus.css"
import { Link } from "react-router-dom";


const Contactus = () => {
  return (
    <div className='contact'>
          <Link className="btn btn-light mx-1" to="/Home" role="button">
            Back
          </Link>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Contact Us</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <form name="sentMessage" id="contactForm" novalidate="">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name *" id="name" required="" data-validation-required-message="Please enter your name."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Email *" id="email" required="" data-validation-required-message="Please enter your email address."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" placeholder="Your Phone *" id="phone" required="" data-validation-required-message="Please enter your phone number."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea className="form-control-msg" placeholder="Your Message" id="message" required="" data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-lg-12 text-center">
                               
                                <button type="submit" className="button">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Contactus
