import React from "react";

import Navbar from "../components/Navbar";
import SearchComponent from "../components/SearchComponent";
import CardEventos from "../components/CardEventos";

function Eventos() {
  const imgs = {
    img1: require("../../assets/travestidas.jpg"),
    img2: require("../../assets/cangaço.jpg")
  };

  return (
    <>
      <Navbar />
      <SearchComponent title="Eventos" />
      <CardEventos
        imageUri={imgs.img1}
        local="Fortaleza/CE"
        details="LET'S GET PHYSICAL!!! Todos os corpos nessa festa da carne cheia de cor, luta e liberdade! O Bloco essa semana é em dose dupla: a gente dança até o chão da Praça da Gentilândia, a partir das 20h. E no sábado a folia começa no Largo dos Tremembés (ali atrás do Estoril) 20h. Essas são as programações gratuitas. Mas, lembrando, que no sábado tem bloco até o sol raiar no After no Mambembe!"
      />
      <CardEventos
        imageUri={imgs.img2}
        local="Juazeiro do Norte/CE"
        details="TOMECOOL ed. Pré Carnavrau, O bloquinho da TOMECOOL garante para você uma festa recheada de músicas incríveis, calor humano, gente bonita e muitas outras surpresinhas! Bora abalar?"
      />
    </>
  );
}

export default Eventos;
