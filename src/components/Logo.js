import React from "react";
import { Image } from "react-native";
//componente para adequar a logo
function Logo() {
  return (
    <Image
      source={require("../../assets/logo.png")}
      style={{ width: 145, height: 30, justifyContent: "center" }}
    />
  );
}

export default Logo;
