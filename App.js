import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";


import TabNavigator1 from './navigations/tab_navigator1';
import TabNavigator2 from './navigations/tab_navigator2';
import TabNavigator3 from './navigations/tab_navigator3'

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// yellowgreen: '#28794D',
//     green: '#CBE6D7',


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
        
              if (route.name === 'Dictionary') {
                iconName = focused ? 'book' : 'book-outline';
              } else if (route.name === 'Home'){
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Challenge'){
                iconName = focused ? 'trophy' : 'trophy-outline';
              }
        
              // You can return any component that you like here!
              return <Icon name={iconName} size={size}  color={color}/>;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'darkgreen',
            inactiveTintColor: 'gray',
          }}>
        <Tab.Screen name="Dictionary" component={TabNavigator2} options={{ headerShown: false }}/>
        <Tab.Screen  name="Home" component={TabNavigator1} options={{ headerShown: false }} />
        <Tab.Screen name="Challenge" component={TabNavigator3} options={{ headerShown: false }} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}