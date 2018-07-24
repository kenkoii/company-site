import React from 'react';
import Link from 'gatsby-link';
import LanguageSelector from './SelectLanguage';
import { FormattedMessage } from 'react-intl';

export class Footer extends React.Component{
    render() {
        return (
            <div className="footer footer--mobile">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="footer-info">
                                <h2 className="footer-info-item section--text-white">Need Help?</h2>
                                <a className="footer-info-item section--text-white-faded">FAQs</a>
                                <a className="footer-info-item section--text-white-faded">Parents Guide</a>
                                <a className="footer-info-item section--text-white-faded">Terms of Service</a>
                                <a className="footer-info-item section--text-white-faded">Privacy and Policy</a>
                                <a className="footer-info-item section--text-white-faded">Credits</a>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="footer-info">
                                <h2 className="footer-info-item section--text-white">Company Info</h2>
                                <a className="footer-info-item section--text-white-faded">Careers</a>
                                <a className="footer-info-item section--text-white-faded">Blog</a>
                                <a className="footer-info-item section--text-white-faded">Contact Us</a>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="footer-info">
                                <h2 className="footer-info-item section--text-white">Company Address</h2>
                                <p className="footer-info-item section--text-white-faded">11th floor, Room 1101, Park Centrale, IT Park, Cebu City, Cebu 6000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer