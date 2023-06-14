// import React, {useRef, useState} from 'react';
// import { Button,Image, DrawerLayoutAndroid, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
// import Card_Study from './Home/Card_Study';

// import styles2 from './styles/index.style';

// // import Icon from 'react-native-vector-icons/FontAwesome';
// import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Dic from "./Screens/Dictionary";
// import Challenge from "./Screens/Challenge";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Store from './Mypage_Slide/Store';
// import News_scrap from './Mypage_Slide/News_scrap';
// // import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/Ionicons';
// // import SignupUI from './login/SingupUI';
// import TabNavigator1 from './navigations/tab_navigator1'
// import TabNavigator2 from './navigations/tab_navigator2'
// import TabNavigator3 from './navigations/tab_navigator3'
// import Quiz from './Screens/QUIZ/Quiz';
// import Quiz2 from './Screens/QUIZ/Quiz2';
// import Challenge1_1 from './test';
// const Stack = createStackNavigator();





// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();


// const colors={yellowgreen: '#28794D',
//                 green: '#CBE6D7'}

                


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator initialRouteName="Home"
//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;
        
//               if (route.name === 'Dictionary') {
//                 iconName = focused ? 'book' : 'book-outline';
//               } else if (route.name === 'Home'){
//                 iconName = focused ? 'home' : 'home-outline';
//               } else if (route.name === 'Challenge'){
//                 iconName = focused ? 'trophy' : 'trophy-outline';
//               } else if (route.name === 'Quiz'){
//                 iconName = focused ? 'create' : 'create-outline';
//               }
        
//               // You can return any component that you like here!
//               return <Icon name={iconName} size={size}  color={color}/>;
//             },
//           })}
//           tabBarOptions={{
//             activeTintColor: 'darkgreen',
//             inactiveTintColor: 'gray',
//           }}>
       
//         {/* <Tab.Screen  name="Quiz2" component={Quiz2} /> */}
//         <Tab.Screen  name="Dictionary" component={TabNavigator2} />
//         <Tab.Screen  name="Home" component={TabNavigator1} options={{ headerShown: false }} />
//         {/* <Tab.Screen name="login" component={SignupUI}/> */}
//         <Tab.Screen name="Quiz" component={Quiz}/>
//         <Tab.Screen name="Challenge" component={TabNavigator3} />
//         {/* <Tab.Screen name='test' component={Challenge1_1}/> */}
//       </Tab.Navigator>
      
//     </NavigationContainer>
//   );
//         }
















// import React, { useState, useEffect } from 'react';
// import { View, AsyncStorage } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import TabNavigator1 from './navigations/tab_navigator1';
// import TabNavigator2 from './navigations/tab_navigator2';
// import TabNavigator3 from './navigations/tab_navigator3'
// import Loading from './login/Loading';
// import StackNavigation from './navigations/login_navigator';
// import Quiz from './Screens/QUIZ/Quiz';


// const Tab = createBottomTabNavigator();

// // yellowgreen: '#28794D',
// //     green: '#CBE6D7',

// export default function App() {
//   const [loading, setLoading] = useState(true);
//   const [hasToken, setHasToken] = useState('');

//   useEffect(() => {
//     // 3초 후에 로딩 상태를 false로 변경
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     // 로딩 중일 때 로딩 화면 표시
//     return (
//       <View style={{ flex: 1 }}>
//         <Loading />
//       </View>
//     );
//   }
//   AsyncStorage.getItem('access_token').then((value)=>setHasToken(value));
  
  
//     // access_token이 있는 경우, 인증된 컴포넌트를 표시
//     return (
//       <NavigationContainer>
//         {hasToken!=null ? (
//           <Tab.Navigator initialRouteName="Home"
//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;
        
//               if (route.name === 'Dictionary') {
//                 iconName = focused ? 'book' : 'book-outline';
//               } else if (route.name === 'Home'){
//                 iconName = focused ? 'home' : 'home-outline';
//               } else if (route.name === 'Challenge'){
//                 iconName = focused ? 'trophy' : 'trophy-outline';
//               } else if (route.name === 'Quiz'){
//                 iconName = focused ? 'create' : 'create-outline';
//               }
      
//               return <Icon name={iconName} size={size}  color={color}/>;
//             },
//           })}
//           tabBarOptions={{
//             activeTintColor: 'darkgreen',
//             inactiveTintColor: 'gray',
//           }}>
//         <Tab.Screen name="Dictionary" component={TabNavigator2} options={{ headerShown: false }}/>
//         <Tab.Screen  name="Home" component={TabNavigator1} options={{ headerShown: false }} />
//         <Tab.Screen name="Quiz" component={Quiz}/>
//         <Tab.Screen name="Challenge" component={TabNavigator3} options={{ headerShown: false }} />
//       </Tab.Navigator>
//         ):(
//           // access_token이 없는 경우, 비인증 컴포넌트를 표시
//           <StackNavigation setHasToken={setHasToken}/>
//         )}      
//       </NavigationContainer>
//     );

  // AsyncStorage.setItem('access_token',
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4NjI5MjUyOSwianRpIjoiOTQ1NTY5ZmUtOGY0OC00MWUzLThhNTgtODI0MTg2NTI3YzIwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjg2MjkyNTI5fQ.797Z_n9G_20rv2_mQ5dUyJ5kZFuWrKA4gvfuUNhICQ8", 
  // () => {
  //   console.log('유저 닉네임 저장 완료')
  // });

  


  
// };









import React, { useState, useEffect } from 'react';
import { View, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabNavigator1 from './navigations/tab_navigator1';
import TabNavigator2 from './navigations/tab_navigator2';
import TabNavigator3 from './navigations/tab_navigator3';
import TabNavigator4 from './navigations/tab_navigator4';
import Loading from './login/Loading';
import StackNavigation from './navigations/login_navigator';


const Tab = createBottomTabNavigator();
// AsyncStorage.clear()
// yellowgreen: '#28794D',
//     green: '#CBE6D7',
export const IP ='192.168.0.111';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [hasToken, setHasToken] = useState('');

  useEffect(() => {
    // 3초 후에 로딩 상태를 false로 변경
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // 로딩 중일 때 로딩 화면 표시
    return (
      <View style={{ flex: 1 }}>
        <Loading />
      </View>
    );
  }
  AsyncStorage.getItem('access_token').then((value)=>setHasToken(value));
  
  
    // access_token이 있는 경우, 인증된 컴포넌트를 표시
    return (
      <NavigationContainer>
        {hasToken!=null ? (
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
      
              return <Icon name={iconName} size={size}  color={color}/>;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'darkgreen',
            inactiveTintColor: 'gray',
          }}>
        <Tab.Screen name="Dictionary" component={TabNavigator2} options={{ headerShown: false }}/>
        <Tab.Screen  name="Home" component={TabNavigator1} options={{ headerShown: false }} />
        <Tab.Screen name="Quiz" component={TabNavigator4} options={{ headerShown: false }} />
        <Tab.Screen name="Challenge" component={TabNavigator3} options={{ headerShown: false }} />
      </Tab.Navigator>
        ):(
          // access_token이 없는 경우, 비인증 컴포넌트를 표시
          <StackNavigation setHasToken={setHasToken}/>
        )}      
      </NavigationContainer>
    );

  // AsyncStorage.setItem('access_token',
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4NjI5MjUyOSwianRpIjoiOTQ1NTY5ZmUtOGY0OC00MWUzLThhNTgtODI0MTg2NTI3YzIwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjg2MjkyNTI5fQ.797Z_n9G_20rv2_mQ5dUyJ5kZFuWrKA4gvfuUNhICQ8", 
  // () => {
  //   console.log('유저 닉네임 저장 완료')
  // });

  


  
};










