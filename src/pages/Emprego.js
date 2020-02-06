import React from "react";
import { View } from "react-native";
import Navbar from "../components/Navbar";
import SearchComponent from "../components/SearchComponent";
import CardVagas from "../components/CardVagas";

function Trabalho() {
  return (
    <View style={{ backgroundColor: "#EEEEEE", flexGrow: 1 }}>
      <Navbar route="Oportunidades" />
      <SearchComponent title="Vagas de emprego" />
      <View style={{ marginTop: 10 }}>
        <CardVagas
          text="Vaga: Auxiliar administrativo."
          requisitos="Conhecer Excel e Word."
          documentos="RG, CPF, Curriculo, Histórico Escolar ou Certificado de Conclusão do Ensino Médio."
        />
        <CardVagas
          text="Vaga: Professor particular."
          requisitos="Ter concluido o Ensino Médio e disponibilidade para trabalhar 48 horas semanais."
          documentos="RG, CPF, Histórico Escolar ou Certificado de Conclusão do Ensino Médio."
        />
      </View>
    </View>
  );
}

export default Trabalho;
