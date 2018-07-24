import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';
import RegisterField from './RegisterField';
import logo from '../../resources/img/word-cosmos-title.png'

const Banner = () => {

  return (
    <section className="section section--wordcosmosbg1 section--pushtop">
      <div className="title">
        <img className="title__img logo--bounce" src={logo} alt="" />
        {/*
          <RegisterField />
        */}
      </div>
    </section>
  );
};

export default Banner