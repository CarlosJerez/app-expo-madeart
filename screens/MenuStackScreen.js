import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuScreen from "./MenuScreen";
import DetalleScreen from './DetalleScreen'

const MenuStack = createNativeStackNavigator()

export default function MenuStackScreen() {
  return(
    <MenuStack.Navigator>
        <MenuStack.Screen name='Menu' component={MenuScreen} />
        <MenuStack.Screen name='Detalle' component={DetalleScreen} />
    </MenuStack.Navigator>
  )
}

