import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

//components
import Navbar from "../components/Navbar";
import NavigationButtons from "../components/NavigationButtons";
import CardImg from "../components/CardImg";

function Main() {
  return (
    <>
      <Navbar />
      <NavigationButtons />
      <CardImg />
      <CardImg />
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Button
          title="Quero Ajudar!"
          buttonStyle={{ backgroundColor: "#db0024", borderRadius: 6 }}
          titleStyle={{ fontSize: 24, fontWeight: "bold" }}
        />
      </View>
    </>
  );
}

export default Main;
