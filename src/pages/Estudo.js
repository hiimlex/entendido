import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";

import Navbar from "../components/Navbar";
import SearchComponent from "../components/SearchComponent";
import CardEstudo from "../components/CardEstudo";

function Estudo() {
  return (
    <View style={{ backgroundColor: "#EEEEEE", flexGrow: 1 }}>
      <Navbar route="Oportunidades" />
      <SearchComponent title="Oportunidades de estudo" />
      <SafeAreaView>
        <ScrollView>
          <View style={{ marginTop: 10, marginVertical: 20 }}>
            <CardEstudo
              text="CRAS abre Turmas para EJA no Bairro João Cabral."
              requisitos="Serão aceitos alunos com idade a partir de 18 anos."
              documentos="RG, CPF, Trânsferência."
            />
            <CardEstudo
              text="Cursos Técnicos Profissionalizantes."
              requisitos="Serão aceitos alunos que já concluírem o Ensino fundamental."
              documentos="RG, CPF, Trânsferência."
            />

            <CardEstudo
              text="Cursos de Design de Sombrancelha."
              requisitos="Vaga limitadas ao público LGBTQI+"
              documentos="RG, CPF, Trânsferência."
            />
            <CardEstudo
              text="Vagas para cursos superiores."
              requisitos="Serão aceitos alunos que já concluírem o Ensino Médio e obtiveram o coeficiente de rendimento maior que 8."
              documentos="RG, CPF, Trânsferência."
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default Estudo;
