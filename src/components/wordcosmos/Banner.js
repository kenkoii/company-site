import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';
import RegisterField from './RegisterField';
import logo from '../../resources/img/word-cosmos-title-v2.png'

const Banner = () => {

  return (
    <section className="section section--wordcosmosbg1">
      <div className="title">
        <img className="title__img logo--bounce" src={logo} alt="" />
        {/*<RegisterField />*/}
          <p style={{textAlign: 'center', color: '#fff'}}>Make english fun with this new word game</p>
          <p style={{textAlign: 'center', color: '#fff'}}>NOW AVAILABLE IN BETA</p>
        <div className="inptgroup__input gplay"><div className="input"><a href='https://play.google.com/store/apps/details?id=com.frecre.wordcosmos&ah=p239wWfO79mY5q6akNDki2tLaAE' target="_blank" style={{padding: '0px', width: '100%'}}><img style={{width: '100%', height: 'auto'}} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a></div></div>
        <ul className="app__desc">
          <li>Over 1,500+ useful English words</li>
          <li>Learn word meanings, synonyms, and antonyms</li>
          <li>Earn stars through player vs player word battles</li>
          <li>Unlock advanced words in new planets</li>
          <li>And collect cute characters to reveal surprising skins!</li>
        </ul>
      </div>
    </section>
  );
};

export default Banner