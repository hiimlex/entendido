import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: "Entendido"
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#db0024"
        },
        headerBackTitleVisible: false,
        headerTintColor: "#FFF"
      }
    }
  )
);

export default Routes;
