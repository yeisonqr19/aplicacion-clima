import React, { useState, useEffect } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/ui/Header";

function App() {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarApi = async () => {
      if (ciudad !== "" || pais !== "") {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
          ciudad
        )},${encodeURI(pais)}&lang=es&appid=4813f5dfc1b41f8440029db8081156aa`;

        const peticion = await fetch(url);
        const resultado = await peticion.json();

        console.log(resultado);
      }
    };
    consultarApi();
  }, [busqueda]);

  return (
    <>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form setBusqueda={setBusqueda} />
            </div>

            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
