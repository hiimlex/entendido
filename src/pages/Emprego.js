import React from "react";
import { View } from "react-native";
import Navbar from "../components/Navbar";
import SearchComponent from "../components/SearchComponent";
import CardVagas from "../components/CardVagas";

function Trabalho() {
  return (
    <>
      <Navbar route="Oportunidades" />
      <SearchComponent title="Vagas de emprego" />
      <View style={{ marginTop: 10 }}>
        <CardVagas
          text="Vaga: Auxiliar administrativo."
          details="Pre-requisitos: Conhecer Excel e Word."
        />
        <CardVagas
          text="Vaga: Professor particular."
          details="Pre-requisitos: Ter concluido o Ensino Médio."
        />
      </View>
    </>
  );
}

export default Trabalho;
