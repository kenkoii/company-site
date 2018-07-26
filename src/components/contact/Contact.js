import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';
import Countries from './Countries'
import VisibilitySensor from 'react-visibility-sensor';
import ContactSvg from './ContactSvg';


export class Contact extends React.Component{
    
    constructor(props){
        // const countries = Countries;
        super(props);
        this.state = {
            isVisible: false,
            // countryList: countryList
        }
    }
    
    onChange = (isVisible) => {
        this.setState({'isVisible': isVisible});
    }

    render() {
        const countryList = Countries.map(item => <option>{item.name}</option>);
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
                                        <input className="input" name="Name" type="text" placeholder="Name"/>
                                    </div> 
                                    <div className="input">
                                        <input className="input" type="email" name="email" placeholder="you@email.com"/>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form__inptgroup">
                                    <div className="inptgroup__input">
                                        <div className="input dd">
                                            <select className="select">
                                                {countryList}
                                            </select>
                                        </div>
                                        <div className="input dd">
                                            <select className="select">
                                                <option>Type of Inquiry</option>
                                                <option>Media Inquiry</option>
                                                <option>Partnership</option>
                                                <option>Game Inquiry</option>
                                                <option>Careers</option>
                                                <option>Others</option>
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