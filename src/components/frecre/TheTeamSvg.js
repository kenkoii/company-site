import React from 'react';
import {FormattedMessage} from 'react-intl';

export default (props) => {
    return (
        <div className="section-info section-info--p10px">
                  <div className={`section-info__image section--svg ${props.isVisible?'active animate':''}`}>
                    <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                      <style type="text/css">
                        {`.st0-tc{fill:none;stroke:#E5E5E5;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                        .st1-tc{fill:none;stroke:#5EB764;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                        .st2-tc{fill:#B2B2B2;}`}
                      </style>
                      <g id='XMLID_121_'>
                          <g id='XMLID_79_'>
                              <circle id='XMLID_83_' className='st0-tc' cx='256' cy='256.1' r='227.7' />
                              <path id='XMLID_82_' className='st0-tc' d='M355,32.1c26.4,11.7,50.4,27.9,70.9,47.7'
                              />
                              <path id='XMLID_81_' className='st0-tc' d='M28.4,346.2c-11.1-27.9-17.1-58.3-17.1-90.1C11.2,120.9,120.8,11.3,256,11.3 c19.4,0,38.4,2.3,56.5,6.6'
                              />
                              <path id='XMLID_80_' className='st0-tc' d='M469.6,136.3c19.9,35.4,31.3,76.3,31.3,119.8c0,135.2-109.6,244.8-244.8,244.8 c-55.3,0-106.2-18.3-147.2-49.2'
                              />
                          </g>
                          <g id='XMLID_93_'>
                              <path id='XMLID_111_' className='st1-tc' d='M360.9,362.3c-70,0-140,0-210.1,0c0.6-6.2,0.9-12.4,2-18.5c2.8-16.7,10.8-29.8,27-36.4 c11.7-4.8,23.6-9,35.5-13.5c4.1-1.6,8.4-3,12.3-5c5.8-3.1,7.2-10.7,3.9-16.2c-3.1-5.1-6.2-10.4-8.5-15.9 c-7.7-18.5-11.8-37.7-8.6-57.8c2.4-15.4,11.7-25.5,26.6-28.7c9.4-2,18.9-2.1,28.3,0c14.2,3.1,23.3,11.8,26.1,26 c1.3,6.7,1.7,13.7,1.4,20.4c-1,19.5-6.4,37.8-16.8,54.5c-3.6,5.7-1.5,14.9,4.6,18c3.6,1.9,7.6,3.2,11.4,4.7 c12.3,4.8,24.7,9.2,36.8,14.4c14.7,6.2,23,17.9,25.7,33.4C359.7,348.4,360.1,355.4,360.9,362.3z'
                              />
                              <path id='XMLID_109_' className='st1-tc' d='M388.9,309.6c-9.2,0-18.4-0.1-27.6,0c-3.4,0-6.1-0.9-9.2-2.8c-7.6-4.9-15.6-9.4-23.9-12.9 c-9.8-4.2-20-7.3-30.1-10.9c-1.8-0.6-3.6-1.3-5.3-2.1c-2.5-1.2-3.1-3-1.6-5.4c9-14.6,14.2-30.6,16.8-47.5 c1.6-10.1,2-20.2,0.2-30.3c-2.1-11.6-6.9-21.7-16.9-29.7c3.8-1,7-2.5,10.3-2.6c6.3-0.3,12.8-0.6,18.9,0.5 c11.9,2.2,19,10.8,20.1,23.3c1.8,18.7-2.7,36-12.3,52.1c-2.7,4.5-1.3,11.3,3.5,13.6c3.6,1.8,7.4,3,11.2,4.4 c8.3,3.2,16.6,6.2,24.7,9.7c12.2,5.2,18.2,15.2,20,28c0.3,2.5,0.8,4.9,1.2,7.4C388.9,306.2,388.9,307.9,388.9,309.6z'
                              />
                              <path id='XMLID_108_' className='st1-tc' d='M123.2,304.5c0.6-3.6,1.1-7.2,1.9-10.8c2.2-10.4,7.1-19.2,17.2-23.6c9.8-4.3,20-7.9,30-11.9 c2.2-0.8,4.3-1.7,6.5-2.5c3.5-1.3,5.3-3.9,6.1-7.4c0.5-2,0.1-3.5-1-5.3c-10.7-16.8-15.7-35-13.2-54.9c1.8-14,9.9-21.5,24.1-23.1 c8.1-0.9,16.2-0.8,24.1,3.1c-1.7,1.6-3.4,3-4.8,4.6c-9.2,10-12.5,22.2-12.7,35.3c-0.4,24.7,5.9,47.6,18.9,68.7 c1.5,2.4,0.7,3.4-1.5,4.2c-8.7,3-17.4,6-26,9c-11,3.9-21.9,8.1-31.1,15.3c-4.7,3.7-9.2,4.5-14.7,4.4c-7.9-0.3-15.8-0.1-23.8-0.1 C123.2,307.9,123.2,306.2,123.2,304.5z'
                              />
                          </g>
                          <g id='XMLID_95_'>
                              <circle id='XMLID_101_' className='st2-tc' cx='272.5' cy='433.6' r='14.5'
                              />
                              <circle id='XMLID_100_' className='st2-tc' cx='177.8' cy='414.9' r='14.9'
                              />
                              <circle id='XMLID_99_' className='st2-tc' cx='224.5' cy='411.4' r='11.3'
                              />
                              <circle id='XMLID_98_' className='st2-tc' cx='320' cy='416.7' r='18' />
                              <circle id='XMLID_97_' className='st2-tc' cx='264.7' cy='402.6' r='6.7' />
                              <circle id='XMLID_96_' className='st2-tc' cx='236.4' cy='437.3' r='3.6' />
                          </g>
                          <g id='XMLID_102_'>
                              <circle id='XMLID_107_' className='st2-tc' cx='408.9' cy='349' r='19.8' />
                              <circle id='XMLID_106_' className='st2-tc' cx='439.9' cy='313.4' r='12' />
                              <circle id='XMLID_105_' className='st2-tc' cx='418.4' cy='279.2' r='12' />
                              <circle id='XMLID_104_' className='st2-tc' cx='446.9' cy='267.1' r='7.7'
                              />
                              <circle id='XMLID_103_' className='st2-tc' cx='427.9' cy='247.6' r='5.1'
                              />
                          </g>
                          <g id='XMLID_110_'>
                              <circle id='XMLID_116_' className='st2-tc' cx='100.2' cy='342.6' r='19.8'
                              />
                              <circle id='XMLID_115_' className='st2-tc' cx='69.2' cy='307' r='12' />
                              <circle id='XMLID_114_' className='st2-tc' cx='90.7' cy='272.8' r='12' />
                              <circle id='XMLID_113_' className='st2-tc' cx='62.2' cy='260.7' r='7.7' />
                              <circle id='XMLID_112_' className='st2-tc' cx='81.2' cy='241.2' r='5.1' />
                          </g>
                          <circle id='XMLID_117_' className='st2-tc' cx='129.9' cy='385.9' r='9.9'
                          />
                          <circle id='XMLID_118_' className='st2-tc' cx='383.6' cy='403.7' r='22.7'
                          />
                          <circle id='XMLID_119_' className='st2-tc' cx='343' cy='386' r='5' />
                          <circle id='XMLID_120_' className='st2-tc' cx='131.6' cy='412' r='8.3' />
                      </g>
                  </svg>
                  </div>
                  <h1 className="section-info__text section--text-center"><FormattedMessage id="FreCre_Section3Title"/></h1>
                  <p className="section-info__text section--text-gray"><FormattedMessage id="FreCre_Section3Description"/></p>
                </div>
    )
}