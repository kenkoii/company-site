import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl'


export default () => {
    return (
        <section className="section section--red section--thin section--banner">
            <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="section-info">
                                <h1 className="title__text-md"><FormattedMessage id="FreCre_ContactBanner" /></h1>
                                <h3 className="section--text-white">have an idea? give us a call</h3>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}
