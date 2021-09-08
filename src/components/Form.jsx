import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

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
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <p className="red darken-4 error">Todos los campos son Obligatorios</p>
      )}

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
        <select name="pais" id="pais" value={pais} onChange={handleInputChange}>
          <option value="">-- Seleccione un pais--</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
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
