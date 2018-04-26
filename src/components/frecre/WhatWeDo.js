import React from 'react';
import Link from 'gatsby-link';
import VisibilitySensor from 'react-visibility-sensor';
import WhatWeDoSvg from './WhatWeDoSvg';


export class WhatWeDo extends React.Component {

  constructor(props){
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
      <section className="section section--white">
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
                <WhatWeDoSvg isVisible={this.state.isVisible} />
            </VisibilitySensor>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WhatWeDo;