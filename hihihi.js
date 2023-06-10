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
import SignupUI from './login/SingupUI';
import TabNavigator1 from './navigations/tab_navigator1'
import TabNavigator2 from './navigations/tab_navigator2'
import TabNavigator3 from './navigations/tab_navigator3'
import Quiz from './Screens/Quiz';
import Quiz2 from './Screens/Quiz2';

const Stack = createStackNavigator();

const App2 = () => {
    return (
       
            <Stack.Navigator >
                <Stack.Screen name="Quiz2" component={Quiz2} />
                {/* <Stack.Screen name="Quiz" component={Quiz} /> */}
            </Stack.Navigator>
        
        
   
    );
  };

  export default App2;
