import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';
import './main-style.css'
import './grid.css'
import './keyframes.css'
import favicon from '../resources/img/frecre-logo.png'
import Footer from '../components/Footer';

const TemplateWrapper = ({ children, data, location, i18nMessages }) => {
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  return (
    <IntlProvider
      locale={langKey}
      messages={i18nMessages}
    >
      <div>
        <Helmet
          title="FreCre, Inc."
          meta={[
            { name: 'description', content: 'Freedom Creators' },
            { name: 'keywords', content: 'game development, education, learning' },
          ]}>
          <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
        </Helmet>
        <Header langs={langsMenu} />

        {children()}
        <Footer langs={langsMenu} />
      </div>
    </IntlProvider>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const pageQuery = graphql`
  query Layout {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }      
      }
    }
  }
`;
