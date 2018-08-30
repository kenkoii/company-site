import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';
import RegisterField from './RegisterField';
import logo from '../../resources/img/word-cosmos-title.png'

const Banner = () => {

  return (
    <section className="section section--wordcosmosbg1">
      <div className="title">
        <img className="title__img logo--bounce" src={logo} alt="" />
        {/*
          <RegisterField />
        */}
        <h1 className="section--text-white section--text-center">Releasing beta soon!</h1>
        <div className="inptgroup__input"><div className="input input--w100p"><a href="https://goo.gl/forms/1S8k6MCHz4dJzt3A2" target="_blank" className="wcbutton">Sign Up for Beta</a></div></div> 
                            
      </div>
    </section>
  );
};

export default Banner