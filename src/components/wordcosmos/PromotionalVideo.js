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
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/q6fPxpdtXyM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BattleToLearn
