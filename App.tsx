import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";

import {
  PTSerif_400Regular,
  PTSerif_700Bold,
} from "@expo-google-fonts/pt-serif";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";

import AppStack from "./src/routes/AppStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    PTSerif_400Regular,
    PTSerif_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="auto" />
      </>
    );
  }
}
