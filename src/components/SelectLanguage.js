import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';

const SelectLanguage = (props) => {
  const links = props
    .langs
    .map(lang => <Link to={lang.link} key={lang.langKey} style={{
      color: 'white'
    }}>
      <li selected={lang.selected}>
        {lang.langKey}
      </li>
    </Link>);

  return (
    <section>
      <header style={{
        color: 'white'
      }}>
        <FormattedMessage id="selectLanguage"/>
      </header>
      <ul>
        {links}
      </ul>
    </section>
  );
};

const LanguageSelector = (props) => {
  const links = props
    .langs
    .map(lang => <li selected={lang.selected} key={lang.langKey}>
      <Link to={lang.link}>
        {lang.langKey.toUpperCase()}
      </Link>
    </li>);
  
  const selected = props.langs.filter(lang => lang.selected == true)[0]


  return (
    <ul className="nav__group_link nav--lang">
      <li className="nav__link nav--dropdown lang">
        <Link to="">{selected.langKey.toUpperCase()}</Link>
        <ul className="nav__dropdown">
          {links}
        </ul>
      </li>
    </ul>
  )
}

LanguageSelector.propTypes = {
  langs: PropTypes.array
};

export default LanguageSelector;


//        <Link>EN</Link>