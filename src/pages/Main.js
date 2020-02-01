import React from "react";
import { View } from "react-native";
import { Header, Icon } from "react-native-elements";
import Logo from "../components/Logo";
import NavigationButtons from "../components/NavigationButtons";

function Main() {
  return (
    <>
      <Header
        leftComponent={<Icon name="account-circle" color="#fff" size={32} />}
        centerComponent={<Logo />}
        rightComponent={<Icon name="notifications" color="#fff" size={32} />}
        backgroundColor="#db0024"
      />
      <NavigationButtons />
    </>
  );
}

export default Main;
