import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planeta) => (
          <PlanetCard
            key={ planeta.name }
            planetName={ planeta.name }
            planetImage={ planeta.image }
          />))}
      </div>
    );
  }
}

export default SolarSystem;
