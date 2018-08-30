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
        {/*<RegisterField />*/}
        <div className="inptgroup__input" style={{width: '500px', margin: '0 auto'}}><div className="input" style={{width:'50%', float: 'left'}}><a href='https://play.google.com/store/apps/details?id=com.frecre.wordcosmos&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target="_blank" style={{padding: '0px', width: '100%'}}><img style={{width: '100%', height: 'auto'}} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a></div><div className="input" style={{width:'50%', float: 'left', padding: '32px 10px'}}><a href="https://goo.gl/forms/1S8k6MCHz4dJzt3A2" target="_blank" className="wcbutton">Sign Up for IOS</a></div></div>
      </div>
    </section>
  );
};

export default Banner