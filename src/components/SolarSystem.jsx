import React from 'react';
import Title from './Title';
import PlanetList from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="SolarSystem">
        <header>
          <Title headline="Planetas" />
        </header>
        <article>
          { PlanetList.map((p) => (
            <PlanetCard key={ p.name } planetName={ p.name } planetImage={ p.image } />
          )) }
        </article>
      </div>
    );
  }
}

export default SolarSystem;
