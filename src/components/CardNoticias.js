import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "react-navigation-hooks";

function CardImg(props) {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => {
        navigate("Noticias", {
          uri: `${props.link}`
        });
      }}
    >
      <Image source={props.imageUri} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { marginHorizontal: 10, marginTop: 20 },
  image: {
    width: "auto",
    height: 150,
    flexGrow: 1,
    resizeMode: "contain",
    borderRadius: 10
  }
});

export default CardImg;
