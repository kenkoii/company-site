
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';


const JobsSvg = (props) => {
    const jobList = [ {job: 'Game Planner(Mobile Games)', desc: `<div class="unselectable wrap-text" id="job_description"> <div><strong>GAME PLANNER</strong></div> <div>(Office-based Job)</div> <div>&nbsp;</div> <div><strong>Job Description</strong></div> <div>&nbsp;</div> <div style="text-align:justify">The game planner focuses on game planning and development. Part of his /her duty is to monitor the progress of the team, manage data production and lay out document specification. &nbsp;&nbsp;He/she is expected to leverage collaborative ideas to increase team performance and eventually produce quality games.</div> <div> <div>&nbsp;</div> <div> <div><strong>Responsibilities</strong></div> <ul> <li> <div>Plan &amp; manage event for game</div> </li> <li> <div>Work on game balance, level design &amp; any data to operate game</div> </li> </ul> <ul> <li> <div>Make specification document</div> </li> </ul> <ul> <li> <div>Assist the director in producing tasks</div> </li> <li> <div>Analyze user action data to improve game</div> </li> <li> <div>Does quality control</div> </li> </ul> <div><strong>Qualifications</strong></div> <ul> <li> <div>Skills needed: planning, problem-solving, initiative, analytical, leadership &amp; detail-oriented</div> </li> </ul> <ul> <li> <div>Experience in mobile game industry, web marketing &amp; project management is an advantage</div> </li> <li> <div>Know how to read &amp; understand Japanese texts is an advantage.</div> </li> <li> <div>Have passion for mobile games</div> </li> </ul> &nbsp; <div><strong>Offerings</strong></div> <ul> <li> <div>MacBook Pro &amp; Kindle Paperwhite</div> </li> <li> <div>Friday 5PM Off</div> </li> <li> <div>Service Incentive Leave &amp; Birthday Leave</div> </li> <li> <div>Gov’t Mandatory Benefits</div> </li> <li> <div>Sat &amp; Sun fixed rest days</div> </li> <li>Christmas Break</li> </ul> <div> <div> <div>For sample, visit the link below:</div> <div>https://play.google.com/store/apps/details?id=com.frecre.englishstory</div> <div>&nbsp;</div> <div>Like us on Facebook:</div> <div>https://www.facebook.com/FreCre.Inc/</div> <div>&nbsp;</div> <div>Kindly attach a link of your portfolio.</div> <div>&nbsp;</div> <div><strong>Please note that walk-in application is discouraged.</strong></div> </div> <div>&nbsp;</div> </div> </div> </div> </div>`, jsLink: "https://www.jobstreet.com.ph/en/job/game-planner-mobile-games-8253200", mynimoLink: ""},
                       {job: 'Unity Developer', desc: `<div class="unselectable wrap-text" id="job_description"> <div><strong>Unity Developer</strong></div> <div>&nbsp;</div> <div><strong>Responsibilities</strong></div> <ul> <li>Code Review</li> <li>Publish mobile games</li> <li>Find solution to errors in Unity3D</li> <li>Native plugin creation for Unity3D</li> <li>Design Code Structure</li> </ul> <div><strong>Qualifications</strong></div> <ul> <li>Should have deep passion for mobile games</li> <li>Should have deep passion for work</li> <li>Experience in publishing mobile games in Android and IOS</li> <li>Strong background in the following: <ul> <li>Design Patterns</li> <li>Monodevelop framework</li> <li>Unity IDE</li> <li>C#</li> </ul> </li> <li>Comfortable working in a startup company</li> <li>Can work cross-functionally in a team</li> <li>Should have a happy &amp; positive disposition</li> <li>Should have at least one (1) year experience in Unity programming</li> </ul> <div><strong>Offerings</strong></div> <ul> <li>MacBook Pro &amp; Kindle Paperwhite</li> <li>Friday 5PM Off</li> <li>Service Incentive Leave &amp; Birthday Leave</li> <li>Gov’t Mandatory Benefits</li> <li>Sat &amp; Sun fixed rest days</li> <li>Christmas Break</li> </ul> <div>Kindly attach the link your published game.</div> <div>&nbsp;</div> <div> <div>For sample, visit the link below:</div> <div>https://play.google.com/store/apps/details?id=com.frecre.englishstory</div> <div>&nbsp;</div> <div>Like us on Facebook:</div> <div>https://www.facebook.com/FreCre.Inc/</div> <div>&nbsp;</div> <div><strong>Please note that walk-in application is discouraged.</strong></div> </div> </div>`, link: "https://www.jobstreet.com.ph/en/job/unity-developer-8294381", mynimoLink: ""},
                       {job: 'Game Data Analyst', desc: `<div class="unselectable wrap-text" id="job_description"> <div><strong>Game Data Analyst</strong></div> <div>&nbsp;</div> <div> <div><strong>Responsibilities</strong></div> <ul> <li> <div>Design and experiment effective methods for data retrieval and analysis</div> </li> <li> <div>Analyse player data to identify key insights and trends</div> </li> <li> <div>Develop reports to present the data in the most easily consumable way</div> </li> <li> <div>Recommend actions for improvement based on information acquired</div> </li> <li> <div>Maintain and improve existing data analysis techniques, tools, and reports</div> </li> </ul> <div><strong>Qualifications</strong></div> <ul> <li> <div>Ability to organize and interpret data</div> </li> <li> <div>Familiar with basic performance metrics</div> </li> <li> <div>Familiarity with Google Analytics is an advantage</div> </li> <li>Effective communication and presentation skills</li> <li>Analytical and creative mind</li> <li>Strong sense of initiative</li> <li> <div>Previous experience in a data analysis role is an advantage</div> </li> </ul> <div><strong>Offerings</strong></div> <ul> <li> <div>Laptop &amp; Kindle Paperwhite</div> </li> <li> <div>Friday 5PM Off</div> </li> <li> <div>Service Incentive Leave &amp; Birthday Leave</div> </li> <li> <div>Gov’t Mandatory Benefits</div> </li> <li> <div>Sat &amp; Sun fixed rest days</div> </li> <li> <div>Christmas Break</div> </li> </ul> <div>For sample, visit the link below:</div> <div>https://play.google.com/store/apps/details?id=com.frecre.englishstory</div> &nbsp; <div>Like us on Facebook:</div> <div>https://www.facebook.com/FreCre.Inc/</div> &nbsp; <div><strong>Please note that walk-in application is discouraged.</strong></div> <br> &nbsp;</div> </div>`, jsLink: "https://www.jobstreet.com.ph/en/job/game-data-analyst-8253206", mynimoLink:""},
                       {job: 'Software Engineer', desc: `<div class="unselectable wrap-text" id="job_description"> <div><strong>Software Engineer</strong></div> <div>&nbsp;</div> <div><strong>Job Responsibilities</strong></div> <ul> <li>Deploy, develop, and manage backend servers and databases.</li> <li>Develop high-performance and scalable apps</li> </ul> <div><strong>Qualifications</strong></div> <ul> <li>Programming abilities in one of the following languages: C#, Java, Go</li> <li>Strong foundation in object-oriented programming</li> <li>Background in web development</li> <li>Experience in testing/test driven development is an advantage</li> <li>Experience in designing APIs and DBs is an advantage</li> <li>Experience with version control systems(git, svn) is an advantage.</li> <li>Team player that really enjoys problem solving</li> <li>Willing to learn and highly trainable</li> <li>Has attention to details</li> <li>Good communication skills (English written and spoken)</li> <li>BS/MS in Computer Science or a related technical field preferred</li> </ul> <div> <div><strong>Offerings</strong></div> <ul> <li>MacBook Pro &amp; Kindle Paperwhite</li> <li>Friday 5PM Off</li> <li>Service Incentive Leave &amp; Birthday Leave</li> <li>Gov’t Mandatory Benefits</li> <li>Sat &amp; Sun fixed rest days</li> <li>Christmas Break</li> </ul> <div>For sample, visit the link below:</div> <div> <div>https://play.google.com/store/apps/details?id=com.frecre.englishstory</div> <div>&nbsp;</div> <div>Like us on Facebook:</div> <div>https://www.facebook.com/FreCre.Inc/</div> <div>&nbsp;</div> <div><strong>Please note that walk-in application is discouraged.</strong></div> </div> </div> </div>`, jsLink: "https://www.jobstreet.com.ph/en/job/software-engineer-8294408", mynimoLink:""},
                       {job: 'Admin Officer', desc: `<div class="unselectable wrap-text" id="job_description"> <div><strong>ADMIN OFFICER</strong></div> <div>&nbsp;</div> <div><strong>Responsibilities</strong></div> <ul> <li>Participate in Admin and HR planning</li> <li>Help in system improvement</li> <li>Handle business and IT contracts and legal documents</li> <li>Collaborate with HR on implementing processes and policies</li> <li>Assist in processing/updating permits and documents for PEZA, BIR, SSS, SEC, etc.</li> <li>Resolve administrative issues</li> </ul> <div>​<strong>Qualifications</strong></div> <ul> <li>Deep passion for work</li> <li>Strong analytical skills and implementation skills</li> <li>Strong sense of initiative</li> <li> <div>Strong background in the following:</div> <ul> <li>General financial functions</li> <li>Business law &amp; legal documentation</li> </ul> </li> <li>Can work cross-functionally in a team</li> <li>Comfortable working in a startup company</li> <li>Has happy &amp; positive disposition</li> <li>Should have a degree in Accounting, Business Management, or any related field.</li> </ul> <div><strong>Offerings</strong></div> <ul> <li>Laptop and Kindle Paperwhite</li> <li>Paid leaves (birthday leave etc.)</li> <li>Mandatory government benefits</li> <li>Fixed rest days (Sat &amp; Sun)</li> <li>Friday 5PM off</li> </ul> <div>Pls note that we do not entertain walk-in application.</div> </div>`, jsLink: "https://www.jobstreet.com.ph/en/job/admin-officer-8281142", mynimoLink:""},
                    ];
        
    const jobs = jobList.map(item => <div className="jobs__item">
                                        <div className="item__title">
                                            <a className="job-item" href={`mailto:recruitment@frecre.com?subject=[${item.job}]`} target="blank_">{item.job}</a>
                                        </div>
                                        <div className="item__desc">
                                            <div className="desc__job" dangerouslySetInnerHTML={{__html: item.desc}}/>
                                                
                                            
                                        </div>
                                    </div>);
                                    // <p>{item.desc}</p></div>
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