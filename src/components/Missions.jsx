import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((missao) => <MissionCard key={ missao.name } { ...missao } />)}
      </div>
    );
  }
}

export default Missions;
