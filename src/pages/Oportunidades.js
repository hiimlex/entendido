import React from "react";
import { View } from "react-native";

import Navbar from "../components/Navbar";
import SearchComponent from "../components/SearchComponent";

function Oportunidades() {
  return (
    <>
      <Navbar />
      <SearchComponent title="Oportunidades" />
    </>
  );
}

export default Oportunidades;
