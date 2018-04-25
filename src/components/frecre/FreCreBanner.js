import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';
import logo from '../../resources/svg/frecre-title.svg'


const FreCreBanner = () => {
    return (
        <section className="section bg--background-animate">
            <div className="section--frecrebg4 bg--out"></div>
            <div className="title text--out">
                <img className="frecre__img" src={logo} alt=""/>
                <p className="title__subtext"></p>
            </div>
        </section>
    )
}

export default FreCreBanner;