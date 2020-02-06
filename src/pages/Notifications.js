import React from "react";
import { View } from "react-native";

import Navbar from "../components/Navbar";
import SearchComponent from "../components/SearchComponent";
import CardNotification from "../components/CardNotification";

function Notifications() {
  return (
    <View style={{ backgroundColor: "#EEEEEE", flexGrow: 1 }}>
      <Navbar />
      <SearchComponent title="Notificações" />
      <View style={{ flexGrow: 1, marginTop: 10 }}>
        <CardNotification
          icon="oportunidade"
          text="Vaga: Aulixiar Administrativo."
        />
        <CardNotification
          icon="evento"
          text="Hoje acontece o baile da gaiola em fortaleza!"
        />
        <CardNotification
          icon="apoio"
          text="Casa transformar abre vagas para LGBT+ em situação de vulnerabilidade."
        />
        <CardNotification
          icon="evento"
          text="Pablo Vittar faz show amanhã 03/04 no Dragão do mar."
        />
        <CardNotification
          icon="oportunidade"
          text="Cras do bairro João Cabral abre turmas para o EJA."
        />
      </View>
    </View>
  );
}

export default Notifications;
