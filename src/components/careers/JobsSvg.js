
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';


const JobsSvg = (props) => {
    const jobList = [ {job: 'Game Planner', desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
                       {job: 'Unity Developer', desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
                       {job: 'Game Data Analyst', desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
                       {job: '2D Artist for Mobile Games', desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
                       {job: 'English Content Developer', desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                    ];
        
    const jobs = jobList.map(item => <div className="jobs__item">
                                        <div className="item__title">
                                            <a className="job-item" href={`mailto:recruitment@frecre.com?subject=[${item.job}]`} target="blank_">{item.job}</a>
                                        </div>
                                        <div className="item__desc">
                                            <div className="desc__job">
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>);
    return (
        <div className="section-info tc section-info--p10px">
                <div className={`section-info__image section--svg ${props.isVisible?'active animate':''}`}>
                        <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                            <style type="text/css">
                                {`.st0{fill:#B2B2B2;}
                                .st1{fill:none;stroke:#E5E5E5;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                .st2{fill:none;stroke:#BD66D3;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}`}
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
                            <g id='XMLID_4_'>
                                <path id='XMLID_1_' className='st2' d='M368.4,247.3L256.7,284L145,247.3c-9.7-3.9-19-8.6-19-19V178c0-10.4,8.5-19,19-19h223.3 c10.5,0,19,8.6,19,19v50.3C387.4,238.8,379.8,243,368.4,247.3z'
                                />
                                <path id='XMLID_2_' className='st2' d='M379.1,245v85.3c0,10.4-8.5,19-19,19H153.2c-10.5,0-19-8.6-19-19V245'
                                />
                                <path id='XMLID_3_' className='st2' d='M209.5,159v-15.7c0-10.5,8.6-19,19-19h56.3c10.5,0,19,8.5,19,19V159'
                                />
                            </g>
                        </svg>
                        </div>
                        <h1 className="section-info__text section--text-center"><FormattedMessage id="FreCre_CareersTitle"/></h1>
                        <p className="section-info__text section--text-gray"><FormattedMessage id="FreCre_CareersDescription"/></p>
                        <div className="section-info__jobs">
                            {jobs}
                        </div>
                    </div>
    )
}

export default JobsSvg;