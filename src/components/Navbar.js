import React from "react";
import { Text } from "react-native";
import { Header, Icon } from "react-native-elements";
import Logo from "./Logo";
import { useNavigation, useNavigationState } from "react-navigation-hooks";

function Navbar({ route }) {
  const { navigate } = useNavigation();
  const { routeName } = useNavigationState();

  const NavigateToRoute = () => {
    if (route) {
      navigate(route);
    } else {
      navigate("Main");
    }
  };

  return (
    <Header
      leftComponent={
        <Icon
          name={routeName === "Main" ? null : "arrow-back"}
          color="#fff"
          size={32}
          onPress={NavigateToRoute}
          activeOpacity={0.8}
        />
      }
      centerComponent={<Logo />}
      rightComponent={
        <Icon
          name={routeName === "Notifications" ? null : "notifications"}
          color="#fff"
          size={32}
          onPress={() => {
            navigate("Notifications");
          }}
        />
      }
      backgroundColor="#db0024"
    />
  );
}

export default Navbar;
