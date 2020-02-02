import React from "react";

import Navbar from "../components/Navbar";
import SearchComponent from "../components/SearchComponent";
import CardVagas from "../components/cards/CardVagas";

function Trabalho() {
  return (
    <>
      <Navbar route="Oportunidades" />
      <SearchComponent title="Vagas de emprego" />
      <CardVagas
        text="Vaga: auxiliar administrativo, clique para ver mais detalhes."
        details="Conhecer as ferramentas Word e Excel."
      />
    </>
  );
}

export default Trabalho;
