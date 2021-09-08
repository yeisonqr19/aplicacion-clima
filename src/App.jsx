import React, { useState, useEffect } from "react";
import { Clima } from "./components/Clima";
import { Form } from "./components/Form";
import { Header } from "./components/ui/Header";
import { Error } from "./components/Error";

function App() {
  let resultadoInicial = JSON.parse(localStorage.getItem("busqueda"));

  if (!resultadoInicial) {
    resultadoInicial = {};
  }

  const [busqueda, setBusqueda] = useState(resultadoInicial);

  const [resultado, setResultado] = useState({});

  useEffect(() => {
    localStorage.setItem("busqueda", JSON.stringify(busqueda));
  }, [busqueda]);

  const [error, setError] = useState(false);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda.ciudad !== "" || busqueda.pais !== "") {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
          busqueda.ciudad
        )},${encodeURI(
          busqueda.pais
        )}&lang=es&units=metric&appid=4813f5dfc1b41f8440029db8081156aa`;

        const peticion = await fetch(url);
        const resultado = await peticion.json();

        setResultado(resultado);

        if (resultado?.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    consultarApi();
  }, [busqueda]);

  let Componente;
  if (error) {
    Componente = <Error mensaje={resultado.message} />;
  } else {
    Componente = <Clima resultado={resultado} />;
  }

  setTimeout(() => {
    setError(false);
  }, 4000);

  return (
    <>
      <Header titulo="Aplicacion Del Clima" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form setBusqueda={setBusqueda} />
            </div>
            <div className="col m6 s12">{Componente}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
