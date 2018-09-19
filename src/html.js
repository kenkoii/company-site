import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    let js = (     
      <script 
        dangerouslySetInnerHTML={{ __html:  '   window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=  '  + 
        '           d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.  '  + 
        '           _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");  '  + 
        '           $.src="https://v2.zopim.com/?5sLfZavo5kLSIePHmqz7x6OSDv3JMu2y";z.t=+new Date;$.  '  + 
        '          type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script")  '  +
        '         gtag("config", "AW-789976610");'
      }}
      />
    )
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
          {js}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
