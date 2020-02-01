import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-elements";
import Logo from "./Logo";

function NavigationButtons({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Noticias</Text>
      </View>
      <View style={styles.items}>
        <Avatar
          rounded
          size="medium"
          icon={{
            name: "building",
            type: "font-awesome",
            color: "#afafaf",
            size: 24
          }}
          overlayContainerStyle={{ backgroundColor: "white" }}
        />
        <Avatar
          rounded
          size="medium"
          icon={{
            name: "map-marker",
            type: "font-awesome",
            color: "#afafaf",
            size: 28
          }}
          overlayContainerStyle={{ backgroundColor: "white" }}
        />
        <Avatar
          rounded
          size="medium"
          icon={{
            name: "bullhorn",
            type: "font-awesome",
            color: "#afafaf",
            size: 24
          }}
          overlayContainerStyle={{ backgroundColor: "white" }}
        />
        <Avatar
          rounded
          size="medium"
          icon={{
            name: "handshake-o",
            type: "font-awesome",
            color: "#afafaf",
            size: 24
          }}
          overlayContainerStyle={{ backgroundColor: "white" }}
        />
        <Avatar
          rounded
          size="medium"
          icon={{
            name: "balance-scale",
            type: "font-awesome",
            color: "#afafaf",
            size: 24
          }}
          overlayContainerStyle={{ backgroundColor: "white" }}
        />
        <Avatar
          rounded
          size="medium"
          icon={{
            name: "book",
            type: "font-awesome",
            color: "#afafaf",
            size: 28
          }}
          overlayContainerStyle={{ backgroundColor: "white" }}
        />
      </View>
    </View>
  );
}

//estilização
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#db0024",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
    marginBottom: 12,
    fontWeight: "bold"
  }
});

export default NavigationButtons;
