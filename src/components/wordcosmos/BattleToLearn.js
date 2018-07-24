import React from 'react';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import logo from '../../resources/img/sec-2-1.png';

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
                            <h1 className="section-info__text section--varela"><FormattedMessage id="WordCosmos_Section1Title" /></h1>
                            <p className="section-info__text section--text-gray">
                                <FormattedMessage id="WordCosmos_Section1Description" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
// <FormattedMessage id="WordCosmos_Section1Title">
//     { (txt) => (
//         <svg viewBox="0 0 350 50">
//             <text y="40" class="svg--varela">{txt}</text>
//         </svg>
//     )}
// </FormattedMessage>
                            
export default BattleToLearn
