import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { Error } from "./Error";
import PropTypes from "prop-types";

export const Form = ({ setBusqueda }) => {
  const [error, setError] = useState(false);

  const { formValues, handleInputChange, reset } = useForm({
    ciudad: "",
    pais: "",
  });

  const { ciudad, pais } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ciudad.trim() === "" || pais.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setBusqueda(formValues);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Error mensaje="Ambos Campos son Obligatorios" />}

      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          autoComplete="off"
          value={ciudad}
          onChange={handleInputChange}
        />
        <label htmlFor="ciudad">Ciudad: </label>
      </div>

      <div className="input-field col s12">
        <input
          type="text"
          name="pais"
          id="pais"
          autoComplete="off"
          value={pais}
          onChange={handleInputChange}
        />
        <label htmlFor="pais">Pais: </label>

        <div className="input-field col s12">
          <button
            type="submit"
            className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
            value="buscar clima"
          >
            Buscar Clima
          </button>
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  setBusqueda: PropTypes.func.isRequired,
};
