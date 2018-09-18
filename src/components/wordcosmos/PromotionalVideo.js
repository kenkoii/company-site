import React from 'react';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import logo from '../../resources/img/sec-2-1.png';

const BattleToLearn = (props) => {
    return (
        <section className="section section--white">
            <div className="section-image">
                <div className="pv">
                    <iframe width="100%" height="100%" style={{border: '0px'}} src="https://www.youtube.com/embed/q6fPxpdtXyM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default BattleToLearn
