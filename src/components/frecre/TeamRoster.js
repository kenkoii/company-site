import React from 'react';
import PropTypes from 'prop-types'


const TeamRoster = (props) => {
    const teamList = [{name: 'Kaneko Teruaki',img: 'url', job: 'CEO', trait: [{stat: 'BOSS', stars: 5},{stat: 'BICEPS', stars: 5},{stat: 'KNOWLEDGE', stars: 5}]},
                      {name: 'Edsel Muzares',img: 'url', job: 'HR/ADMIN', trait: [{stat: 'OC', stars: 5},{stat: 'STRICT', stars: 5},{stat: 'stats3', stars: 5}]},
                      {name: 'Edsel Muzares',img: 'url', job: 'HR/ADMIN', trait: [{stat: 'OC', stars: 5},{stat: 'STRICT', stars: 5},{stat: 'stats3', stars: 5}]},
                      {name: 'Edsel Muzares',img: 'url', job: 'HR/ADMIN', trait: [{stat: 'OC', stars: 5},{stat: 'STRICT', stars: 5},{stat: 'stats3', stars: 5}]}];
    
    

    const team = teamList.map(item => <div className="col-xs-12 col-sm-6 col-md-4 col-l-4">
                                        <div className="employee">
                                            <div className="employee__img">
                                                <img src={item.img} />
                                            </div>
                                            <div className="employee__desc">
                                                <h3>{item.name}</h3>
                                                <p className="desc__info">
                                                    {item.job}
                                                </p>
                                                <ul className="desc__stats">
                                                  <li><span className="stats">{item.trait[0].stat}</span>: <span>{item.trait[0].stars}</span></li>
                                                  <li><span className="stats">{item.trait[1].stat}</span>: <span>{item.trait[1].stars}</span></li>
                                                  <li><span className="stats">{item.trait[2].stat}</span>: <span>{item.trait[2].stars}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                      </div>);
    
    return (
        <div className="row">
            {team}
        </div>
    )
}

export default TeamRoster;
//  {team.stats?team.stats.map(stats => <li><span className="stats">{stats.stat}</span> <span>{stats.stars}</span></li>):null}
// const traits = teamList.trait.map(item => <li><span className="stats">{item.stat}</span> <span>{item.stars}</span></li>);