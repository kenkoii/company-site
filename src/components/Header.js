import React from 'react'
import Link from 'gatsby-link'
import LanguageSelector from './SelectLanguage';

export class Header extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    const selectedLang = props.langs.filter(lang => lang.selected == true)[0];
    this.state = {
      selectedLang : selectedLang,
      sideBarActive: false
    }
  }  

  onToggle = () => {
    this.setState({sideBarActive: !this.state.sideBarActive});
  }  

  render() {
    return (
      <nav className="nav nav--mobile">
        <div className="container">
          <div className="nav__group nav--left">
            <div className="nav__brand">
              <Link to={`/${this.state.selectedLang.langKey}`}>F R E C R E</Link>
            </div>
          </div>
          <div className={`nav__group nav--right nav--w70p nav--sidebar ${this.state.sideBarActive?'active':''}`}>
            <ul className="nav__group_link">
              <li className="nav__link nav--dropdown game">
                <a>GAMES</a>
                <ul className="nav__dropdown">
                  <li>
                    <Link to={`/${this.state.selectedLang.langKey}/wordcosmos/`} onClick={this.onToggle}>Eigomonogatari</Link>
                  </li>
                  <li>
                    <Link to={`/${this.state.selectedLang.langKey}/wordcosmos/`} onClick={this.onToggle}>Word Cosmos</Link>
                  </li>
                </ul>
              </li>
              <li className="nav__link">
                <Link to={`/${this.state.selectedLang.langKey}/careers/`}>CAREERS</Link>
              </li>
              <li className="nav__link">
                <Link to="">BLOG</Link>
              </li>
              <li className="nav__link">
                <Link to={`/${this.state.selectedLang.langKey}/contact/`}>CONTACT</Link>
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
