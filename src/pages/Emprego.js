import React from "react";

import Navbar from "../components/Navbar";
import SearchComponent from "../components/SearchComponent";

function Trabalho() {
  return (
    <>
      <Navbar route="Oportunidades" />
      <SearchComponent title="Vagas de emprego" />
    </>
  );
}

export default Trabalho;
