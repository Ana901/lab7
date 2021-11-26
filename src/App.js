import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Program from "./program";
import Formular from "./formular";

export default function App() {
  const [lista, setLista] = useState([]);

  const stergActiv = (id) => {
    const listaNoua = lista.filter((item) => item.id !== id);
    setLista(listaNoua);
  };

  const adaugaActiv = (act) => {
    act.id = lista.length + 1;
    setLista([...lista, act]);
  };

  const stil = {
    container: { maxWidth: "700px" }
  };

  return (
    <Container style={stil.container}>
      <Program activitati={lista} sterge={stergActiv} />
      <Formular transmit={adaugaActiv} />
    </Container>
  );
}
