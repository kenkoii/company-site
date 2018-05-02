import React from 'react';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';
import logo from '../../resources/img/sec-3-1.png';

const QuestionSystem = () => {

    return (
        <section className="section section--wordcosmosbg4">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="section-image">
                            <img
                                className="section-image__img img--rot10deg"
                                src={logo}
                                alt=""/>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="section-info">
                            <h1 className="section-info__text section--gomablock section--text-yellow"><FormattedMessage id="WordCosmos_Section3Title" /></h1>
                            <p className="section-info__text section--text-white"><FormattedMessage id="WordCosmos_Section3Description" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuestionSystem