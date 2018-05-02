import React from 'react';
import {FormattedMessage} from "react-intl";

const MadeForLearning = () => {
    return (
        <section className="section section--gray">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="section-info">
                            <h1 className="section-info__text section--gomablock section--text-blue"><FormattedMessage id="WordCosmos_Section4Title"/></h1>
                            <p className="section-info__text section--text-gray"><FormattedMessage id="WordCosmos_Section4Description"/></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MadeForLearning