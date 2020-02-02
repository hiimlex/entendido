import React from "react";

import Navbar from "../components/Navbar";
import SearchComponent from "../components/SearchComponent";

function Estudo() {
  return (
    <>
      <Navbar route="Oportunidades" />
      <SearchComponent title="Oportunidades de estudo" />
    </>
  );
}

export default Estudo;
