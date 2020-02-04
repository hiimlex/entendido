import React from "react";
import { View } from "react-native";

import Navbar from "../components/Navbar";
import SearchComponent from "../components/SearchComponent";
import CardVagas from "../components/CardVagas";

function Estudo() {
  return (
    <>
      <Navbar route="Oportunidades" />
      <SearchComponent title="Oportunidades de estudo" />
      <View style={{ marginTop: 10 }}>
        <CardVagas
          text="CRAS abre Turmas para EJA no Bairro João Cabral."
          requisitos="Serão aceitos alunos com idade a partir de 18 anos."
          documentos="RG, CPF, Trânsferência."
        />
        <CardVagas
          text="Cursos Técnicos Profissionalizantes."
          requisitos="Serão aceitos alunos que já concluírem o Ensino fundamental."
          documentos="RG, CPF, Trânsferência."
        />
      </View>
    </>
  );
}

export default Estudo;
