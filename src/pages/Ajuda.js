import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { Input, CheckBox, Overlay } from "react-native-elements";

import Navbar from "../components/Navbar";
import color from "../components/color";

function Ajuda() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contato, setContato] = useState("");
  const [org, setOrg] = useState("");

  return (
    <View style={{ backgroundColor: "#EEEEEE", flexGrow: 1 }}>
      <Navbar />
      <View style={styles.container}>
        <Text style={styles.text}>Quero Ajudar!</Text>
      </View>
      <Overlay isVisible={visible} overlayStyle={styles.overlay}>
        <>
          <Text style={styles.textOverlay}>
            Seu Registro foi enviado e aguarde a resposta dos Administradores do
            sistema!
          </Text>
          <View style={{ marginTop: 10 }}>
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
          </View>
        </>
      </Overlay>
      <View style={styles.form}>
        <Input
          placeholder="Digite seu Nome"
          label="Nome"
          containerStyle={styles.input}
          labelStyle={{ color: "#424242", fontSize: 18 }}
          inputStyle={{ color: "#757575" }}
        />
        <Input
          placeholder="Digite seu Contato"
          label="Contato"
          keyboardType="number-pad"
          containerStyle={styles.input}
          labelStyle={{ color: "#424242", fontSize: 18 }}
        />
        <Input
          placeholder="Digite seu Email"
          label="Email"
          containerStyle={styles.input}
          labelStyle={{ color: "#424242", fontSize: 18 }}
        />
        <Input
          placeholder="Informe sua profissão ou órgão"
          label="Profissão ou Órgão"
          containerStyle={styles.input}
          labelStyle={{ color: "#424242", fontSize: 18 }}
        />
        <View style={styles.groupbtn}>
          <CheckBox
            title="Emprego"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              backgroundColor: "#fff",
              elevation: 0,
              borderWidth: 0
            }}
            textStyle={{ fontSize: 18 }}
            checked={checked1}
            onPress={() => {
              setChecked1(!checked1);
            }}
            checkedColor={color}
          />
          <CheckBox
            title="Estudo"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              backgroundColor: "#fff",
              elevation: 0,
              borderWidth: 0
            }}
            textStyle={{ fontSize: 18 }}
            checked={checked2}
            onPress={() => {
              setChecked2(!checked2);
            }}
            checkedColor={color}
          />
          <CheckBox
            title="Serviço"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              backgroundColor: "#fff",
              elevation: 0,
              borderWidth: 0
            }}
            textStyle={{ fontSize: 18 }}
            checked={checked3}
            onPress={() => {
              setChecked3(!checked3);
            }}
            checkedColor={color}
          />
        </View>

        <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
          <Button
            title="Enviar"
            color={color}
            onPress={() => {
              setVisible(true);
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: [color],
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
  },
  text: {
    fontFamily: "PoetsenOne-Regular",
    textAlign: "center",
    color: "#fff",
    fontSize: 28,
    marginBottom: 12
  },
  form: {
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    elevation: 12,
    justifyContent: "center"
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 15
  },
  groupbtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: "auto"
  },
  overlay: {
    width: 370,
    height: "auto"
  },
  textOverlay: {
    fontSize: 20,
    fontWeight: "400",
    textAlign: "justify",
    marginHorizontal: 10,
    marginVertical: 2
  }
});

export default Ajuda;
