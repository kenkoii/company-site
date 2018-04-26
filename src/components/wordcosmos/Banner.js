import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';
import logo from '../../resources/img/word-cosmos-title.png'

const Banner = () => {

  return (
    <section className="section section--wordcosmosbg1">
      <div className="title">
        <img className="title__img logo--bounce" src={logo} alt="" />
        <div className="title__register">
          <div className="register__input">
            <input type="email" name="" value="you@email.com" />
          </div>
          <div className="register__button">
            <button type="Submit"><FormattedMessage id="register"/></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner