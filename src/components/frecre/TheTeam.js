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
            <div className="row">
                <div className="col-sm-4">
                    <div className="employee">
                        <div className="employee__img">
                            <img src="" />
                        </div>
                        <div className="employee__desc">
                            <h3>John Doe</h3>
                            <p className="desc__info">
                                lorem ipsum dolor set amet
                            </p>
                            <ul className="desc__stats">
                                <li><span className="stats">Hunger </span> <span></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
          </div>
        </section>
        )
    }
}

export default TheTeam;