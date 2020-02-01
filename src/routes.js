import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Notifications from "./pages/Notifications";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: { screen: Main },
      Notifications: { screen: Notifications }
    },
    { defaultNavigationOptions: { headerShown: false } }
  )
);

export default Routes;
