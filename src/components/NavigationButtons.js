import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-elements";

import { useNavigation } from "react-navigation-hooks";

import color from "./color";
import Logo from "./Logo";

function NavigationButtons() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <View style={styles.item}>
          <Avatar
            rounded
            size="medium"
            icon={{
              name: "building",
              type: "font-awesome",
              color: "#696969",
              size: 24
            }}
            overlayContainerStyle={{ backgroundColor: "white" }}
            onPress={() => {
              navigate("Oportunidades");
            }}
            activeOpacity={0.9}
          />
          <Text style={styles.subtitle}>Oportunidades</Text>
        </View>
        <View style={styles.item}>
          <Avatar
            rounded
            size="medium"
            icon={{
              name: "bullhorn",
              type: "font-awesome",
              color: "#696969",
              size: 24
            }}
            overlayContainerStyle={{ backgroundColor: "white" }}
            onPress={() => {
              navigate("Eventos");
            }}
            activeOpacity={0.9}
          />
          <Text style={styles.subtitle}>Eventos</Text>
        </View>
        <View style={styles.item}>
          <Avatar
            rounded
            size="medium"
            icon={{
              name: "handshake-o",
              type: "font-awesome",
              color: "#696969",
              size: 24
            }}
            overlayContainerStyle={{ backgroundColor: "white" }}
            onPress={() => {
              navigate("Apoio");
            }}
            activeOpacity={0.9}
          />
          <Text style={styles.subtitle}>Centrais de Apoio</Text>
        </View>
      </View>
    </View>
  );
}

//estilização
const styles = StyleSheet.create({
  container: {
    backgroundColor: [color],
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  item: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  subtitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});

export default NavigationButtons;
