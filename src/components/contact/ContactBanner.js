import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl'


export default () => {
    return (
        <section className="section bg--background-animate section--thin section--pushtop">
            <div className="title text--out">
                <h1 className="title__text"><FormattedMessage id="FreCre_ContactBanner" /></h1>
                <p className="title__subtext"></p>
            </div>
        </section>
    )
}
