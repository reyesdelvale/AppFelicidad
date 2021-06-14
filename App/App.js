import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Untitled from "./src/screens/Untitled";
import Screen from "./src/screens/Screen";
import Screen1 from "./src/screens/Screen1";
import Copy from "./src/screens/Copy";
import Screen2 from "./src/screens/Screen2";
import Screen3 from "./src/screens/Screen3";
import Screen4 from "./src/screens/Screen4";

const DrawerNavigation = createDrawerNavigator({
  Untitled: Untitled,
  Screen: Screen,
  Screen1: Screen1,
  Copy: Copy,
  Screen2: Screen2,
  Screen3: Screen3,
  Screen4: Screen4
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Untitled: Untitled,
    Screen: Screen,
    Screen1: Screen1,
    Copy: Copy,
    Screen2: Screen2,
    Screen3: Screen3,
    Screen4: Screen4
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "nunito-regular": require("./src/assets/fonts/nunito-regular.ttf"),
      "nunito-800": require("./src/assets/fonts/nunito-800.ttf"),
      "nunito-700": require("./src/assets/fonts/nunito-700.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
