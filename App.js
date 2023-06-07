import React, {useRef, useState} from 'react';
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Card_Study from './Home/Card_Study';
import BottomBar from './Home/Bottom_Bar';
import styles2 from './styles/index.style';

import Icon from 'react-native-vector-icons/FontAwesome';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dic from "./Screens/Dictionary";
import Challenge from "./Screens/Challenge";
import { createDrawerNavigator } from "@react-navigation/drawer";
import My_Chanllenge from './Mypage_Slide/My_Challenge';
import News_scrap from './Mypage_Slide/News_scrap';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// yellowgreen: '#28794D',
//     green: '#CBE6D7',
const TabNavigator =()=> {
  return(
    <>
      <Drawer.Navigator 
      
      screenOptions={{
        drawerActiveBackgroundColor:'#CBE6D7', //커서 올라가있는 칸 전체 색
        drawerActiveTintColor:'#28794D', // 커서 올라가있는 글자색
        
      }}
      initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={Card_Study} />
        <Drawer.Screen name="My Chanllenge" component={My_Chanllenge} />
        <Drawer.Screen name="News scrap" component={News_scrap} />
      </Drawer.Navigator>
    </>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Dictionary" component={Dic} />
        <Tab.Screen  name="Home" component={TabNavigator} options={{ headerShown: false }} />
        <Tab.Screen name="Challenge" component={Challenge} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

