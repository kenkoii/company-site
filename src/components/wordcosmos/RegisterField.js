import React from 'react'
import {FormattedMessage} from 'react-intl'

export default () => {
    return (
        <div className="title__register">
          <div className="register__input">
            <input type="email" name="" value="you@email.com" />
          </div>
          <div className="register__button">
            <button type="Submit"><FormattedMessage id="register"/></button>
          </div>
        </div>
    );
}