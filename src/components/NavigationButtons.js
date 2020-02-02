import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-elements";
import Logo from "./Logo";
import { useNavigation } from "react-navigation-hooks";

function NavigationButtons() {
  const { navigate } = useNavigation();

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
            color: "#696969",
            size: 24
          }}
          overlayContainerStyle={{ backgroundColor: "white" }}
          onPress={() => {
            navigate("Oportunidades");
          }}
          activeOpacity={0.7}
        />
        <Avatar
          rounded
          size="medium"
          icon={{
            name: "map-marker",
            type: "font-awesome",
            color: "#696969",
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
            color: "#696969",
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
            color: "#696969",
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
            color: "#696969",
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
            color: "#696969",
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
    fontFamily: "PoetsenOne-Regular",
    textAlign: "center",
    color: "#fff",
    fontSize: 28,
    marginBottom: 12
  }
});

export default NavigationButtons;
