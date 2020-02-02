import React from "react";
import { View, StyleSheet, Image } from "react-native";

function CardImg() {
  return (
    <View style={styles.card}>
      <Image
        source={require("../../../assets/cardimg.jpg")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { marginHorizontal: 10, marginTop: 10 },
  image: {
    width: "auto",
    height: 150,
    flexGrow: 1,
    resizeMode: "contain",
    borderRadius: 10
  }
});

export default CardImg;
