import React from 'react';
import Link from 'gatsby-link';
import LanguageSelector from './SelectLanguage';
import { FormattedMessage } from 'react-intl';

export class Footer extends React.Component{
    constructor(props){
        super(props);
        const selectedLang = props.langs.filter(lang => lang.selected == true)[0];
        this.state = {
          selectedLang : selectedLang
        }
    }
    render() {
        return (
            <div className="footer footer--mobile">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="footer-info">
                                <h2 className="footer-info-item section--text-white">Need Help?</h2>
                                <a href={`/${this.state.selectedLang.langKey}/wordcosmos/faq`} className="footer-info-item section--text-white-faded">FAQs</a>
                                <a href={`/${this.state.selectedLang.langKey}/wordcosmos/parents-guide`} className="footer-info-item section--text-white-faded">Parents' Guide</a>
                                <a href={`/${this.state.selectedLang.langKey}/wordcosmos/terms-of-service`} className="footer-info-item section--text-white-faded">Terms of Service</a>
                                <a href={`/${this.state.selectedLang.langKey}/wordcosmos/privacy-policy`} className="footer-info-item section--text-white-faded">Privacy Policy</a>
                                <a href={`/${this.state.selectedLang.langKey}/wordcosmos/credits`} className="footer-info-item section--text-white-faded">Credits</a>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="footer-info">
                                <h2 className="footer-info-item section--text-white">Company Info</h2>
                                <a href={`/${this.state.selectedLang.langKey}/careers/`} className="footer-info-item section--text-white-faded">Careers</a>
                                <a href="http://blog.frecre.com" className="footer-info-item section--text-white-faded">Blog</a>
                                <a href={`/${this.state.selectedLang.langKey}/contact/`} className="footer-info-item section--text-white-faded">Contact Us</a>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="footer-info">
                                <h2 className="footer-info-item section--text-white">Company Address</h2>
                                <p className="footer-info-item section--text-white-faded">1101 Park Centrale<br/>Jose Maria del Mar Street, IT Park<br/>Cebu City, Philippines 6000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer