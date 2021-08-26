import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Account from "../layouts/Account/Account";
import Guest from "../layouts/Account/Guest";
import Loged  from '../layouts/Account/Loged';
import Login from "../layouts/Account/Login";
import Register from "../layouts/Account/Register";
const Stack = createNativeStackNavigator();
export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="accont"
        component={Account}
        options={{title: "Cuenta"}}/>
      <Stack.Screen
        name="guest"
        component={Guest}
        options={{title: "Acceder"}}/>
    </Stack.Navigator>
    
  )
}
