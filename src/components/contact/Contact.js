import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';
import VisibilitySensor from 'react-visibility-sensor';
import ContactSvg from './ContactSvg';


export class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isVisible: false
        }
    }
    
    onChange = (isVisible) => {
        this.setState({'isVisible': isVisible});
    }

    render() {

        return (
        <section className="section section--gray">
          <div className="container">
            <div className="row">
                <div className="col-sm">
                    <VisibilitySensor
                        partialVisibility
                        scrollCheck
                        scrollThrottle={5}
                        intervalDelay={8000}
                        onChange={this.onChange}
                        active={!this.state.isVisible}>
                        <ContactSvg isVisible={this.state.isVisible} />
                    </VisibilitySensor>
                    <div className="contact-form">
                        <div className="contact-form__inptgroup">
                            <div className="inptgroup__input">
                                <div className="input">
                                    <input className="input" type="text" value="" placeholder="First Name"/>
                                </div> 
                                <div className="input">
                                    <input className="input" type="text" value="" placeholder="Last Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form__inptgroup">
                            <div className="inptgroup__input">
                                <div className="input">
                                    <input className="input" type="email" value="" placeholder="you@email.com"/>
                                </div> 
                                <div className="input">
                                    <div className="select">
                                        <span>Philippines</span>
                                        <ul className="select__dropdown">
                                            <li>Country</li>
                                            <li>Country</li>
                                            <li>Country</li>
                                            <li>Country</li>
                                            <li>Country</li>
                                            <li>Country</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form__inptgroup">
                            <div className="inptgroup__input"><div className="input input--w100p"><textarea placeholder="Your Message"></textarea></div></div>
                        </div>
                        <div className="contact-form__inptgroup">
                            <div className="inptgroup__input"><div className="input input--w100p"><button type="Submit">Submit  </button></div></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
        )
    }
}
export default Contact;