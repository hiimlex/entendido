import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-elements";

function CardNotification(props) {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    if (props.icon === "oportunidade") {
      setIcon("building");
    } else if (props.icon === "evento") {
      setIcon("bullhorn");
    } else if (props.icon === "apoio") {
      setIcon("handshake-o");
    }
  });

  return (
    <View style={styles.card}>
      <View style={styles.avatarPosition}>
        <Avatar
          rounded
          size="medium"
          icon={{
            name: `${icon}`,
            type: "font-awesome",
            color: "#696969",
            size: 24
          }}
          overlayContainerStyle={{ backgroundColor: "#E8E8E8" }}
        />
      </View>
      <View style={styles.textCard}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "auto",
    height: 70,
    elevation: 12,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 4,
    flexDirection: "row"
  },
  avatarPosition: {
    marginHorizontal: 10,
    marginTop: 10
  },
  textCard: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
    flexGrow: 1,
    width: 0
  },
  text: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "justify",
    marginHorizontal: 5
  }
});

export default CardNotification;
