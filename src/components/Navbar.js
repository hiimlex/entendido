import React from "react";
import { View, StyleSheet } from "react-native";
import { Header, Divider, Avatar } from "react-native-elements";
import Logo from "./Logo";

function Navbar() {
  return (
    <View>
      <Header
        leftComponent={{ icon: "account-circle", color: "#fff", size: 32 }}
        centerComponent={<Logo />}
        rightComponent={{ icon: "notifications", color: "#fff", size: 32 }}
        backgroundColor="#db0024"
      />
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#db0024",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
  }
});

export default Navbar;
