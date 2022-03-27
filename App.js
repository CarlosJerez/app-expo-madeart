import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import FavoritoScreen from "./screens/FavoritoScreen";
import UserScreen from "./screens/UserScreen";
import MenuStackScreen from "./screens/MenuStackScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Product"
          component={MenuStackScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Menu",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="notebook" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favoritos"
          component={FavoritoScreen}
          options={{
            tabBarLabel: "Favoritos",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={FavoritoScreen}
          options={{
            tabBarBadge: 3,
            tabBarLabel: "Cart",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarLabel: "User",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}