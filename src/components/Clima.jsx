import React from "react";
import PropTypes from "prop-types";

export const Clima = ({ resultado }) => {
  const { name, main, weather } = resultado;

  if (!name) return null;
  const { description } = !!weather && weather[0];
  const { temp, temp_max, temp_min } = main;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {name} esta: </h2>
        <p className="flow-text">{description}</p>
        <h2>con una Temperatura de: </h2>
        <p className="temperatura">
          {temp}
          <span>&#x2103;</span>
        </p>

        <p>
          Temperatura Maxima:
          {temp_max}
          <span>&#x2103;</span>
        </p>

        <p>
          Temperatura Minima:
          {temp_min}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
};
