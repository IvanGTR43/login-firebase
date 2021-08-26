import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserInfo from "../layouts/User/UserInfo";

const Stack = createNativeStackNavigator();

export default function UserInfoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="user-info"
        component={UserInfo}
        options={{title: "Informacion de la Cuenta"}}/>
    </Stack.Navigator>
  )
}
