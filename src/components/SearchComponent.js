import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SearchBar } from "react-native-elements";

function SearchComponent(props) {
  const [text, setText] = useState("");

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{props.title}</Text>
        </View>
        <SearchBar
          platform="android"
          containerStyle={{
            borderRadius: 12,
            height: 40,
            marginHorizontal: 10,
            marginVertical: 6
          }}
          inputContainerStyle={{ height: 25 }}
          placeholder="Buscar"
          value={text}
          onChangeText={setText}
          autoCorrect={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#db0024",
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
  }
});

export default SearchComponent;
