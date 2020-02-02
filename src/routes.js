import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//Pages
import Main from "./pages/Main";
import Notifications from "./pages/Notifications";
import Oportunidades from "./pages/Oportunidades";
import Estudo from "./pages/Estudo";
import Emprego from "./pages/Emprego";

//Rotas
const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: { screen: Main },
      Notifications: { screen: Notifications },
      Oportunidades: { screen: Oportunidades },
      Estudo: { screen: Estudo },
      Emprego: { screen: Emprego }
    },
    { defaultNavigationOptions: { headerShown: false } }
  )
);

export default Routes;
