import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import Navbar from "../components/Navbar";
import SearchComponent from "../components/SearchComponent";
import CardVagas from "../components/CardVagas";

function Trabalho() {
  return (
    <View style={{ backgroundColor: "#EEEEEE", flexGrow: 1 }}>
      <Navbar route="Oportunidades" />
      <SearchComponent title="Vagas de emprego" />
      <SafeAreaView>
        <ScrollView style={{ marginBottom: 10 }}>
          <View style={{ marginTop: 10, marginVertical: 20 }}>
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

            <CardVagas
              text="Vaga: Design de sombrancelha."
              requisitos="Ter experiência na área."
              documentos="Curriculo e RG."
            />

            <CardVagas
              text="Vaga: Chef de cozinha."
              requisitos="Ter curso de gastronomia ou experiência em cozinha."
              documentos="RG, Curriculo ou ."
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default Trabalho;
