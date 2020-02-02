import React, { useState } from "react";
import { StatusBar } from "react-native";
import Router from "./src/routes";

import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "PoetsenOne-Regular": require("./assets/fonts/PoetsenOne-Regular.ttf")
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#db0024" />
      <Router />
    </>
  );
}
