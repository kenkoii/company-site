import React from 'react'
import Link from 'gatsby-link'
import LanguageSelector from './SelectLanguage';

const Header = (props) => {
  const selectedLang = props.langs.filter(lang => lang.selected == true)[0];
  return (
    <nav className="nav nav--mobile">
      <div className="container">
        <div className="nav__group nav--left">
          <div className="nav__brand">
            <Link to={`${selectedLang.langKey}`}>F R E C R E</Link>
          </div>
        </div>
        <div className="nav__group nav--right nav--w70p nav--sidebar">
          <ul className="nav__group_link">
            <li className="nav__link nav--dropdown game">
              <Link to="#">GAMES</Link>
              <ul className="nav__dropdown">
                <li>
                  <Link to={`${selectedLang.langKey}/wordcosmos/`}>Eigomonogatari</Link>
                </li>
                <li>
                  <Link to={`${selectedLang.langKey}/wordcosmos/`}>Word Cosmos</Link>
                </li>
              </ul>
            </li>
            <li className="nav__link">
              <Link to="#">CAREERS</Link>
            </li>
            <li className="nav__link">
              <Link to="#">BLOG</Link>
            </li>
            <li className="nav__link">
              <Link to="#">CONTACT</Link>
            </li>
          </ul>
          <LanguageSelector langs={props.langs}/>
        </div>
      </div>
      <button
        className="nav-burger nav--sidebutton nav--right"
        type="button"
        name="button">
        <span className="nav-burger__top"></span>
        <span className="nav-burder__patty"></span>
        <span className="nav-burger__bottom"></span>
      </button>
    </nav>
  )
}
export default Header;
