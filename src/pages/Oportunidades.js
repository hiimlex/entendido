import React from "react";
import { View } from "react-native";

import Navbar from "../components/Navbar";
import SearchComponent from "../components/SearchComponent";
import CardOportunidades from "../components/CardOportunidades";

function Oportunidades() {
  return (
    <View style={{ backgroundColor: "#EEEEEE", flexGrow: 1 }}>
      <Navbar />
      <SearchComponent title="Oportunidades" />
      <CardOportunidades icon="briefcase" text="Emprego" />
      <CardOportunidades icon="graduation-cap" text="Estudo" />
    </View>
  );
}

export default Oportunidades;
