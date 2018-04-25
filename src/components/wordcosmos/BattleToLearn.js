import React from 'react';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import logo from '../../resources/img/sec-2.png';

const BattleToLearn = (props) => {
    return (
        <section className="section section--gray">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="section-image">
                            <img className="section-image__img img--rot10deg img--dropshadow" src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="section-info">
                            <h1 className="section-info__text section--gomablock"><FormattedMessage id="battleToLearn" /></h1>
                            <p className="section-info__text section--text-gray">
                                <FormattedMessage id="battleToLearnDescription" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BattleToLearn
