import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Explore from "../pages/Explore";
import Search from "../pages/Search";
import Favorites from "../pages/Favorites";
import Tv from "../pages/Tv";

const { Navigator, Screen } = createBottomTabNavigator();

const Tabs: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 60,
          borderTopColor: "#1d1d1d",
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },

        /*         labelStyle: {
          fontFamily: "Poppins_400Regular",
          fontSize: 13,
          marginLeft: 16,
        }, */
        // bg do botao
        inactiveBackgroundColor: "#1d1d1d",
        activeBackgroundColor: "#151515",

        // texto do botao
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#5F5BFF",
      }}
    >
      <Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => {
            return <Feather name="home" size={20} color={color} />;
          },
        }}
      />

      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => {
            return <Feather name="search" size={20} color={color} />;
          },
        }}
      />

      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => {
            return <Feather name="heart" size={20} color={color} />;
          },
        }}
      />
      <Screen
        name="Tv"
        component={Tv}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => {
            return <Feather name="tv" size={20} color={color} />;
          },
        }}
      />
    </Navigator>
  );
};

export default Tabs;
