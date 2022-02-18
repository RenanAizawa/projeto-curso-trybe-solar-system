import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { system: { name: planetName, image: planetImage } } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          {planetName}
        </p>
        <img src={ planetImage } alt={ `Planeta  ${planetName}` } />
      </div>

    );
  }
}

PlanetCard.propTypes = {
  system: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlanetCard;
