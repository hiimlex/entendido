import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { Overlay, Button } from "react-native-elements";

import color from "./color";

function CardEventos(props) {
  const [visible, setVisible] = useState(false);

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => {
        setVisible(true);
      }}
    >
      <Overlay isVisible={visible} overlayStyle={styles.overlay}>
        <>
          <View>
            <Text style={styles.text}>
              Local: {props.local} {"\n"}
            </Text>
            <Text style={styles.text}>Detalhes: {props.details}</Text>
          </View>
          <Button
            title="Fechar"
            type="clear"
            color={color}
            containerStyle={{
              alignItems: "flex-end",
              justifyContent: "flex-end"
            }}
            titleStyle={{ fontSize: 18, fontWeight: "bold" }}
            onPress={() => {
              setVisible(false);
            }}
          />
        </>
      </Overlay>
      <Image source={props.imageUri} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { marginHorizontal: 10, marginTop: 20, elevation: 8 },
  image: {
    width: "auto",
    height: 150,
    borderRadius: 12,
    flexGrow: 1,
    resizeMode: "contain"
  },
  overlay: {
    width: 370,
    height: "auto"
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
    textAlign: "justify",
    marginHorizontal: 10,
    marginVertical: 2
  }
});

export default CardEventos;
