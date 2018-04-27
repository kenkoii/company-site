import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';

class LanguageSelector extends React.Component{
  constructor(props){
    super(props);
    let links = props
    .langs
    .map(lang => <li selected={lang.selected} key={lang.langKey}>
      <Link to={lang.link} onClick={props.onToggle}>
        {lang.langKey.toUpperCase()}
      </Link>
    </li>);
    const selected = props.langs.filter(lang => lang.selected == true)[0]
    this.state = {
      links: links,
      selected: selected,
      active: false
    }
    console.log(props.langs);
  }

  onClick = () => {
    this.setState({active: !this.state.active})
  }

  render() {
    return (
      <ul className="nav__group_link nav--lang">
        <li className="nav__link nav--dropdown lang">
          <a onClick={this.onClick}>{this.state.selected.langKey.toUpperCase()}</a>
          <ul className={`nav__dropdown ${this.state.active?'active':''}`}>
            {this.state.links}
          </ul>
        </li>
      </ul>
    )
  }
}

LanguageSelector.propTypes = {
  langs: PropTypes.array
};

export default LanguageSelector;


//        <Link>EN</Link>