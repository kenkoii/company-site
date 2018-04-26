import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';
import logo from '../../resources/svg/phone.svg'


const WhatWeDo = () => {
    return (
        <section className="section section--white">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="section-info">
              <img className="section-info__image" src={logo} alt="" />
              <h1 className="section-info__text section--text-center"><FormattedMessage id="whatWeDo"/></h1>
              <p className="section-info__text section--text-gray"><FormattedMessage id="whatWeDoDescription"/></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default WhatWeDo;