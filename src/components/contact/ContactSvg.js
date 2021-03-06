import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';


const JobsSvg = (props) => {

    return (
        <div className="section-info tc section-info--p10px">
            <div className={`section-info__image section--svg ${props.isVisible?'active animate':''}`}>
                <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <style type="text/css">
                        {`.st0{fill:#B2B2B2;}
                        .st1{fill:none;stroke:#E5E5E5;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                        .st2{fill:none;stroke:#C4C043;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}`}
                    </style>
                    <g id='XMLID_53_'>
                        <circle id='XMLID_41_' className='st0' cx='100.7' cy='333' r='19.8' />
                        <circle id='XMLID_43_' className='st0' cx='69.7' cy='297.5' r='12' />
                        <circle id='XMLID_44_' className='st0' cx='91.3' cy='263.2' r='12' />
                        <circle id='XMLID_45_' className='st0' cx='62.7' cy='251.2' r='7.7' />
                        <circle id='XMLID_46_' className='st0' cx='81.7' cy='231.7' r='5.1' />
                    </g>
                    <g id='XMLID_17_'>
                        <circle id='XMLID_38_' className='st1' cx='255.3' cy='255.9' r='227.7'
                        />
                    </g>
                    <g id='XMLID_9_'>
                        <path id='XMLID_42_' className='st1' d='M354.3,31.9c26.4,11.7,50.4,27.9,70.9,47.7'
                        />
                        <path id='XMLID_40_' className='st1' d='M27.6,346.1c-11.1-27.9-17.1-58.3-17.1-90.1c0-135.2,109.6-244.8,244.8-244.8 c19.4,0,38.4,2.3,56.5,6.6'
                        />
                        <path id='XMLID_39_' className='st1' d='M468.9,136.1c19.9,35.4,31.3,76.3,31.3,119.8c0,135.2-109.6,244.8-244.8,244.8 c-55.3,0-106.2-18.3-147.2-49.2'
                        />
                    </g>
                    <g id='XMLID_52_'>
                        <circle id='XMLID_51_' className='st0' cx='409.9' cy='353.8' r='19.8'
                        />
                        <circle id='XMLID_50_' className='st0' cx='441' cy='318.3' r='12' />
                        <circle id='XMLID_49_' className='st0' cx='419.4' cy='284' r='12' />
                        <circle id='XMLID_48_' className='st0' cx='448' cy='272' r='7.7' />
                        <circle id='XMLID_47_' className='st0' cx='428.9' cy='252.5' r='5.1' />
                    </g>
                    <g id='XMLID_94_'>
                        <circle id='XMLID_89_' className='st0' cx='270.1' cy='450.6' r='14.5'
                        />
                        <circle id='XMLID_91_' className='st0' cx='175.3' cy='431.9' r='14.9'
                        />
                        <circle id='XMLID_90_' className='st0' cx='222.1' cy='428.4' r='11.3'
                        />
                        <circle id='XMLID_88_' className='st0' cx='317.5' cy='433.7' r='18' />
                        <circle id='XMLID_87_' className='st0' cx='262.3' cy='419.6' r='6.7' />
                        <circle id='XMLID_86_' className='st0' cx='234' cy='454.3' r='3.6' />
                    </g>
                    <g id='XMLID_1_'>
                        <path id='XMLID_102_' className='st2' d='M149.5,163c0,3.9,0,6.5,0,9.1c0,49,0.1,98-0.1,147c0,11.9,3.9,21.4,14.8,27 c3.3,1.7,7.3,2.5,11.1,2.7c7.7,0.4,15.5,0.3,23.2,0.1c15.7-0.4,26.5-11.6,26.6-27.4c0.1-52.2,0-104.3,0-156.5c0-2.1,0-4.1,0-6.9 c2.3,0,4.2,0,6.1,0c36.9,0,73.8,0,110.7,0c23.8,0,38.4,14.6,38.4,38.5c0,45.5,0,91,0,136.5c0,23.6-14.5,37.9-38.2,38 c-57.1,0-114.2-0.4-171.3,0.2c-23,0.3-39.3-17-38.9-38.7c0.7-46.2,0.2-92.4,0.2-138.6C132,181.1,137.7,171.2,149.5,163z M349,229.1 c0-12.1,0-23.5,0-35.1c-32.6,0-64.7,0-97.1,0c0,11.8,0,23.3,0,35.1C284.3,229.1,316.5,229.1,349,229.1z M309.4,255.7 c-0.1-5-4.3-8.9-9.3-8.7c-4.8,0.2-8.5,4.3-8.5,9c0.1,5,4.3,8.8,9.3,8.6C305.7,264.5,309.5,260.5,309.4,255.7z M335.3,300.2 c4.9,0.4,9.4-3.6,9.6-8.5c0.2-4.6-3.6-8.9-8.3-9.3c-4.7-0.4-9,3.3-9.5,8C326.7,295.5,330.3,299.9,335.3,300.2z M309.4,327.1 c0.1-4.8-3.6-8.8-8.4-9c-5-0.2-9.2,3.7-9.4,8.6c-0.1,4.9,4.1,9.2,9,9.1C305.3,335.8,309.3,331.8,309.4,327.1z M335.9,318.1 c-4.9,0.1-8.7,3.8-8.7,8.7c-0.1,5,4,9.2,8.9,9.1c4.8-0.1,9.1-4.5,8.8-9.3C344.7,321.8,340.7,318,335.9,318.1z M344.9,255.7 c0-4.6-4.1-8.7-8.8-8.8c-5-0.1-9,3.9-9,9c0.1,4.9,3.8,8.6,8.7,8.7C340.9,264.7,345,260.7,344.9,255.7z M264.6,300.2 c4.8,0.2,8.8-3.5,9.1-8.3c0.3-5-3.5-9.3-8.4-9.5c-4.7-0.2-8.8,3.5-9.1,8.3C255.8,295.8,259.7,300.1,264.6,300.2z M309.4,291.6 c0.1-4.9-4-9.2-8.9-9.2c-4.7,0-8.7,4-8.9,8.7c-0.1,4.7,3.7,8.8,8.4,9.1C305,300.5,309.2,296.6,309.4,291.6z M265,318.1 c-4.9,0-8.7,3.7-8.8,8.5c-0.1,5.1,3.8,9.2,8.8,9.2c4.7,0,8.7-3.9,8.9-8.6C274,322.1,270.1,318.1,265,318.1z M273.8,255.8 c0-4.8-3.8-8.7-8.6-8.8c-5-0.1-9.1,3.9-9,9c0,4.9,3.8,8.7,8.6,8.7C269.9,264.8,273.8,260.9,273.8,255.8z'
                        />
                        <path id='XMLID_101_' className='st2' d='M163.7,253.3c0-21.7,0-79.1,0-100.8c0-10.7,5.5-16.3,16.1-16.4c4.9-0.1,9.8-0.1,14.7,0 c10.6,0.1,16.2,5.6,16.3,16.2c0.1,20.8,0,77.3,0,98.2c0,22.4,0,44.8,0,67.3c0,11.9-5.4,17.3-17.5,17.3c-4.6,0-9.2,0-13.8,0 c-10-0.1-15.8-5.8-15.8-15.8C163.7,297.3,163.7,275.3,163.7,253.3z'
                        />
                    </g>
                </svg>
            </div>
            <h1 className="section-info__text section--text-center"><FormattedMessage id="FreCre_ContactsTitle"/></h1>
        </div>
    )
}

export default JobsSvg;


            // <p className="section-info__text section--text-gray"><FormattedMessage id="contactDescription"/></p>