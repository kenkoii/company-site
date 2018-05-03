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
                <VisibilitySensor
                    partialVisibility
                    scrollCheck
                    scrollThrottle={5}
                    intervalDelay={8000}
                    onChange={this.onChange}
                    active={!this.state.isVisible}>
                    <ContactSvg isVisible={this.state.isVisible} />
                </VisibilitySensor>
            </div>
            <div className="row">
                <div className="col-sm">
                    <div className="contact-form">
                        <form method="POST" action="https://formspree.io/kentoy@frecre.com">
                            <div className="contact-form__inptgroup">
                                <div className="inptgroup__input">
                                    <div className="input">
                                        <input className="input" name="firstName" type="text" placeholder="First Name"/>
                                    </div> 
                                    <div className="input">
                                        <input className="input" name="lastName" type="text" placeholder="Last Name"/>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form__inptgroup">
                                    <div className="inptgroup__input">
                                        <div className="input">
                                            <input className="input" type="email" name="email" placeholder="you@email.com"/>
                                        </div>
                                        <div className="input">
                                            <select className="select">
                                                <option>Japan</option>
                                                <option>Korea</option>
                                                <option>China</option>
                                                <option>Philippines</option>
                                            </select>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="contact-form__inptgroup">
                                    <div className="inptgroup__input"><div className="input input--w100p"><textarea name="message" placeholder="Your Message"></textarea></div></div>
                                    </div>
                                    <div className="contact-form__inptgroup">
                                    <div className="inptgroup__input"><div className="input input--w100p"><button type="Submit">Submit</button></div></div> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>
        </section>
        )
    }
}
export default Contact;