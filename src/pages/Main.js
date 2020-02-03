import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";

//components
import Navbar from "../components/Navbar";
import NavigationButtons from "../components/NavigationButtons";
import CardNoticias from "../components/CardNoticias";

function Main() {
  return (
    <>
      <Navbar />
      <NavigationButtons />
      <Text style={styles.title}>Noticias</Text>
      <CardNoticias />
      <CardNoticias />
      <View style={{ marginHorizontal: 20, marginTop: 40 }}>
        <Button
          title="Quero Ajudar!"
          buttonStyle={{ backgroundColor: "#db0024", borderRadius: 6 }}
          titleStyle={styles.titleButton}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleButton: { fontSize: 20, fontFamily: "PoetsenOne-Regular" },
  title: {
    fontSize: 28,
    fontFamily: "PoetsenOne-Regular",
    alignSelf: "center",
    marginTop: 10
  }
});

export default Main;
