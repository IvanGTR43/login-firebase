import React from 'react'
import { Icon } from "native-base";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons  } from "@expo/vector-icons";

import AccountStack from "./AccountStack";
import UserInfo from "./UserInfo";
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="user-info"
        screenOptions={({route}) => ({
          tabBarIcon:({focused, color, size}) => (
            screenOption(route, focused, color, size)
          ),
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{title: "Cuenta"}}/>
        <Tab.Screen
          name="user-info"
          component={UserInfo}
          options={{title: "Información"}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

function screenOption(route, focused, color, size){
  let iconName;
  if (route.name === 'account') {
    iconName = focused
      ? 'home'
      : 'home';
  } else if (route.name === 'user-info') {
    iconName = focused ? 'information-circle' : 'information-circle-outline';
  }
  return <Icon as={Ionicons} name={iconName} size={size} color={color}/>
}
