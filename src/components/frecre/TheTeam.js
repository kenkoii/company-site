import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';
import VisibilitySensor from 'react-visibility-sensor';
import { TheTeamSvg } from './TheTeamSvg';


export class TheTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }
    
    onChange = (isVisible) => {
        this.setState({'isVisible': isVisible});
    }
    
    render() {

        return (
        <section className="section section--gray">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <VisibilitySensor
                    partialVisibility
                    scrollCheck
                    scrollThrottle={5}
                    intervalDelay={8000}
                    onChange={this.onChange}
                    active={!this.state.isVisible}>
                    <TheTeamSvg isVisible={this.state.isVisible} />
                </VisibilitySensor>
              </div>
            </div>
          </div>
        </section>
        )
    }
}

export default TheTeam;