import React from 'react'
import Link from 'gatsby-link'
import LanguageSelector from './SelectLanguage';
import { FormattedMessage } from 'react-intl';

export class Header extends React.Component {
  constructor(props){
    super(props);
    const selectedLang = props.langs.filter(lang => lang.selected == true)[0];
    this.state = {
      selectedLang : selectedLang,
      sideBarActive: false,
      isGamesActive: false
    }
  }  

  onToggle = () => {
    this.setState({sideBarActive: !this.state.sideBarActive});
  }  

  onToggleGame = () => {
    this.setState({isGamesActive: !this.state.isGamesActive});
  }

  render() {
    return (
      <nav className="nav nav--mobile">
        <div className="container">
          <div className="nav__group nav--left">
            <div className="nav__brand">
              <a href={`/${this.state.selectedLang.langKey}`}>F R E C R E</a>
            </div>
          </div>
          <div className={`nav__group nav--right nav--w70p nav--sidebar ${this.state.sideBarActive?'active':''}`}>
            <ul className="nav__group_link">
              <li className="nav__link nav--dropdown game">
                <a onClick={this.onToggleGame}><FormattedMessage id="Header_Games"/></a>
                <ul className="nav__dropdown">
                  <li>
                    <a href="https://eigomonogatari.com/" target="_blank" onClick={this.onToggle}>Eigomonogatari</a>
                  </li>
                  <li>
                    <a href={`/${this.state.selectedLang.langKey}/wordcosmos`} onClick={this.onToggle}>Word Cosmos</a>
                  </li>
                </ul>
              </li>
              <li className="nav__link">
                <a href={`/${this.state.selectedLang.langKey}/careers/`}><FormattedMessage id="Header_Careers"/></a>
              </li>
              <li className="nav__link">
                <a href="https://blog.frecre.com" target="_blank"><FormattedMessage id="Header_Blog"/></a>
              </li>
              <li className="nav__link">
                <a href={`/${this.state.selectedLang.langKey}/contact`}><FormattedMessage id="Header_Contact"/></a>
              </li>
            </ul>
            <LanguageSelector langs={this.props.langs}/>
          </div>
          <div 
            className={`nav__sidebar--overlay ${this.state.sideBarActive?'active':''}`}
            onClick={this.onToggle}
          ></div>
        </div>
        <button
          className="nav-burger nav--sidebutton nav--right"
          type="button"
          onClick={this.onToggle}
          name="button">
          <span className="nav-burger__top"></span>
          <span className="nav-burder__patty"></span>
          <span className="nav-burger__bottom"></span>
        </button>
      </nav>
    )
  }
}
export default Header;

