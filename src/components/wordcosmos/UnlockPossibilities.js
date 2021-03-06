import React from 'react';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';
import logo1 from '../../resources/img/sec-4-1.png';
import logo2 from '../../resources/img/sec-5-1.png';

const UnlockPossibilities = (props) => {
    return (
        <section className="section section--wordcosmosbg3">
        <div className="container">
         <div className="row">
           <div className="col-sm">
             <div className="section-info">
               <h1 className="section-info__text section--varela section--text-yellow"><FormattedMessage id="WordCosmos_Section2Title"/></h1>
               <p className="section-info__text section--text-white">
                <FormattedMessage id="WordCosmos_Section2Description"/>
               </p>
             </div>
           </div>
           <div className="col-sm">
              <div className="section-image section--relative">
               <img className="section-image__img img--rotn10deg img--absolute img--dropshadow" src={logo1} alt="" />
               <img className="section-image__img img--rot10deg img--absolute img--dropshadow" src={logo2} alt="" />
             </div>
           </div>
         </div>
       </div>
     </section>
    )
}

export default UnlockPossibilities