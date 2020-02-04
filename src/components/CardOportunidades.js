import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "react-navigation-hooks";
import color from "./color";

function CardOportunidades(props) {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => {
        navigate(props.text);
      }}
    >
      <View style={{ justifyContent: "center", marginTop: 22 }}>
        <Icon name={props.icon} type="font-awesome" size={56} color="#494949" />
      </View>
      <View style={styles.textCard}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "auto",
    height: 140,
    elevation: 6,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 30,
    borderRadius: 4
  },
  textCard: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  text: {
    fontSize: 28,
    fontFamily: "PoetsenOne-Regular",
    textAlign: "justify",
    marginHorizontal: 5,
    color: [color]
  }
});

export default CardOportunidades;
