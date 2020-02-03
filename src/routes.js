import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//Pages
import Main from "./pages/Main";
import Notifications from "./pages/Notifications";
import Oportunidades from "./pages/Oportunidades";
import Estudo from "./pages/Estudo";
import Emprego from "./pages/Emprego";
import Noticias from "./pages/Noticias";

//Rotas
const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: { screen: Main },
      Notifications: { screen: Notifications },
      Oportunidades: { screen: Oportunidades },
      Estudo: { screen: Estudo },
      Emprego: { screen: Emprego },
      Noticias: { screen: Noticias }
    },
    {
      defaultNavigationOptions: { headerShown: false, animationEnabled: false }
    }
  )
);

export default Routes;
