import React, {useRef, useState} from 'react';
import { Button,Image, DrawerLayoutAndroid, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Card_Study from './Home/Card_Study';

import styles2 from './styles/index.style';

// import Icon from 'react-native-vector-icons/FontAwesome';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dic from "./Screens/Dictionary";
import Challenge from "./Screens/Challenge";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Store from './Mypage_Slide/Store';
import News_scrap from './Mypage_Slide/News_scrap';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
// import SignupUI from './login/SingupUI';
import TabNavigator1 from './navigations/tab_navigator1'
import TabNavigator2 from './navigations/tab_navigator2'
import TabNavigator3 from './navigations/tab_navigator3'
import Quiz from './Screens/QUIZ/Quiz';
import Quiz2 from './Screens/QUIZ/Quiz2';

const Stack = createStackNavigator();





const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const colors={yellowgreen: '#28794D',
                green: '#CBE6D7'}

                


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
              } else if (route.name === 'Quiz'){
                iconName = focused ? 'create' : 'create-outline';
              }
        
              // You can return any component that you like here!
              return <Icon name={iconName} size={size}  color={color}/>;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'darkgreen',
            inactiveTintColor: 'gray',
          }}>
       
        {/* <Tab.Screen  name="Quiz2" component={Quiz2} /> */}
        <Tab.Screen  name="Dictionary" component={TabNavigator2} />
        <Tab.Screen  name="Home" component={TabNavigator1} options={{ headerShown: false }} />
        {/* <Tab.Screen name="login" component={SignupUI}/> */}
        <Tab.Screen name="Quiz" component={Quiz}/>
        <Tab.Screen name="Challenge" component={TabNavigator3} />
        
      </Tab.Navigator>
      
    </NavigationContainer>
  );
        }


