import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';


const TheCompanySvg = (props) => {

    return (
        <div className="section-info section-info--p10px tc">
                <div className={`section-info__image section--svg ${props.isVisible?'active animate':''}`}>
                <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <style type="text/css">
                    {`.st0-company{fill:#B2B2B2;}
                    .st1-company{fill:#FFFFFF;stroke:#42BADB;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                    .st2-company{fill:none;stroke:#42BADB;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                    .st3-company{fill:none;stroke:#E5E5E5;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}`}
                    </style>
                    <g id='XMLID_53_'>
                        <circle id='XMLID_41_' className='st0-company' cx='100.7' cy='333' r='19.8' />
                        <circle id='XMLID_43_' className='st0-company' cx='69.7' cy='297.5' r='12' />
                        <circle id='XMLID_44_' className='st0-company' cx='91.3' cy='263.2' r='12' />
                        <circle id='XMLID_45_' className='st0-company' cx='62.7' cy='251.2' r='7.7' />
                        <circle id='XMLID_46_' className='st0-company' cx='81.7' cy='231.7' r='5.1' />
                    </g>
                    <g id='XMLID_16_'>
                        <line id='XMLID_2_' className='st1-company' x1='100.7' y1='401.4' x2='409.9' y2='401.4'
                        />
                        <g id='XMLID_37_'>
                            <line id='XMLID_5_' className='st2-company' x1='193.3' y1='146.7' x2='193.3' y2='146.7'
                            />
                            <g id='XMLID_3_'>
                                <polyline id='XMLID_6_' className='st2-company' points='260.9,401.4 260.9,169.3 362.7,169.3 362.7,401.4'
                                />
                                <line id='XMLID_7_' className='st2-company' x1='311.8' y1='169.3' x2='311.8' y2='110.5'
                                />
                                <line id='XMLID_8_' className='st2-company' x1='290.9' y1='169.3' x2='290.9' y2='136.1'
                                />
                                <line id='XMLID_11_' className='st2-company' x1='294.7' y1='169.3' x2='294.7'
                                y2='401.4' />
                                <line id='XMLID_12_' className='st2-company' x1='331.3' y1='169.3' x2='331.3'
                                y2='401.4' />
                                <line id='XMLID_13_' className='st2-company' x1='260.9' y1='218.6' x2='362.7'
                                y2='218.6' />
                                <line id='XMLID_10_' className='st2-company' x1='260.9' y1='266.4' x2='362.7'
                                y2='266.4' />
                                <line id='XMLID_14_' className='st2-company' x1='260.9' y1='313.2' x2='362.7'
                                y2='313.2' />
                                <line id='XMLID_15_' className='st2-company' x1='260.9' y1='358.8' x2='362.7'
                                y2='358.8' />
                            </g>
                            <g id='XMLID_35_'>
                                <polygon id='XMLID_1_' className='st2-company' points='147.9,401.4 147.9,244.9 238.6,193.6 238.6,401.4'
                                />
                                <line id='XMLID_4_' className='st2-company' x1='193.3' y1='217.8' x2='193.3' y2='166.5'
                                />
                                <line id='XMLID_19_' className='st2-company' x1='147.9' y1='278.8' x2='238.6'
                                y2='278.8' />
                                <line id='XMLID_21_' className='st2-company' x1='147.9' y1='313.2' x2='238.6'
                                y2='313.2' />
                                <line id='XMLID_22_' className='st2-company' x1='147.9' y1='341.6' x2='238.6'
                                y2='341.6' />
                                <line id='XMLID_23_' className='st2-company' x1='147.9' y1='372.2' x2='238.6'
                                y2='372.2' />
                                <line id='XMLID_36_' className='st2-company' x1='147.9' y1='251.2' x2='238.6'
                                y2='251.2' />
                            </g>
                        </g>
                    </g>
                    <g id='XMLID_17_'>
                        <circle id='XMLID_38_' className='st3-company' cx='255.3' cy='255.9' r='227.7'
                        />
                    </g>
                    <g id='XMLID_9_'>
                        <path id='XMLID_42_' className='st3-company' d='M354.3,31.9c26.4,11.7,50.4,27.9,70.9,47.7'
                        />
                        <path id='XMLID_40_' className='st3-company' d='M27.6,346.1c-11.1-27.9-17.1-58.3-17.1-90.1c0-135.2,109.6-244.8,244.8-244.8 c19.4,0,38.4,2.3,56.5,6.6'
                        />
                        <path id='XMLID_39_' className='st3-company' d='M468.9,136.1c19.9,35.4,31.3,76.3,31.3,119.8c0,135.2-109.6,244.8-244.8,244.8 c-55.3,0-106.2-18.3-147.2-49.2'
                        />
                    </g>
                    <g id='XMLID_52_'>
                        <circle id='XMLID_51_' className='st0-company' cx='397.9' cy='353.8' r='19.8'
                        />
                        <circle id='XMLID_50_' className='st0-company' cx='429' cy='318.3' r='12' />
                        <circle id='XMLID_49_' className='st0-company' cx='407.4' cy='284' r='12' />
                        <circle id='XMLID_48_' className='st0-company' cx='436' cy='272' r='7.7' />
                        <circle id='XMLID_47_' className='st0-company' cx='416.9' cy='252.5' r='5.1' />
                    </g>
                    <g id='XMLID_94_'>
                        <circle id='XMLID_89_' className='st0-company' cx='270.1' cy='450.6' r='14.5'
                        />
                        <circle id='XMLID_91_' className='st0-company' cx='175.3' cy='431.9' r='14.9'
                        />
                        <circle id='XMLID_90_' className='st0-company' cx='222.1' cy='428.4' r='11.3'
                        />
                        <circle id='XMLID_88_' className='st0-company' cx='317.5' cy='433.7' r='18' />
                        <circle id='XMLID_87_' className='st0-company' cx='262.3' cy='419.6' r='6.7' />
                        <circle id='XMLID_86_' className='st0-company' cx='234' cy='454.3' r='3.6' />
                        </g>
                        </svg>
                        </div>
                        <h1 className="section-info__text section--text-center"><FormattedMessage id="FreCre_Section1Title"/></h1>
                        <p className="section-info__text section--text-gray"><FormattedMessage id="FreCre_Section1Description"/></p>
                    </div>
    )
}

export default TheCompanySvg;