import React from 'react';
import Title from './Title';
import PlanetList from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <header>
          <Title headline="Planetas" />
        </header>
        { PlanetList.map((p) => (
          <PlanetCard key={ p.name } planetName={ p.name } planetImage={ p.image } />
        )) }
      </div>
    );
  }
}

// teste

export default SolarSystem;
