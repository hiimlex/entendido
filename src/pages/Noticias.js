import React from "react";
import { WebView, View } from "react-native-webview";

import Navbar from "../components/Navbar";

function Noticias({ navigation }) {
  const uri = navigation.getParam("uri");

  return (
    <>
      <Navbar />
      <WebView style={{ flex: 1 }} source={{ uri: `${uri}` }} />
    </>
  );
}

export default Noticias;
