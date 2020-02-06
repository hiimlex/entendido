import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Overlay, Button } from "react-native-elements";

import color from "./color";

function CardVagas(props) {
  const [visible, setVisible] = useState(false);

  const SetIsVisible = () => {
    if (props.requisitos) {
      setVisible(true);
    }
  };

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={SetIsVisible}
    >
      <Overlay isVisible={visible} overlayStyle={styles.overlay}>
        <>
          <View>
            <Text style={styles.text}>
              Pre-Requisitos: {props.requisitos} {"\n"}
            </Text>
            <Text style={styles.text}>
              Documentos Necessários: {props.documentos}
            </Text>
          </View>

          <Button
            title="Fechar"
            type="clear"
            color={color}
            containerStyle={{
              alignItems: "flex-end",
              justifyContent: "flex-end"
            }}
            onPress={() => {
              setVisible(false);
            }}
            titleStyle={{
              fontSize: 18,
              fontWeight: "bold",
              color: [color]
            }}
          />
        </>
      </Overlay>

      <View style={styles.textCard}>
        <Text style={styles.text}>{props.text}</Text>
        <Text style={styles.subtitle}>Clique para saber mais detalhes</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    width: "auto",
    height: "auto",
    elevation: 6,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 4,
    flexDirection: "row",
    paddingVertical: 6
  },
  textCard: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
    flexGrow: 1,
    width: 0
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
    textAlign: "justify",
    marginHorizontal: 10,
    marginVertical: 2
  },
  overlay: {
    width: 370,
    height: "auto"
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "justify",
    marginHorizontal: 10
  }
});

export default CardVagas;
