// import React, {useState} from 'react';
// import { AsyncStorage} from 'react-native';
// import Card_Study from './Home/Card_Study';
// import Icon from 'react-native-vector-icons/Ionicons';
// import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Dic from "./Screens/Dictionary";
// import Challenge from "./Screens/Challenge";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import News_scrap from './Mypage_Slide/News_scrap';
// import SignupUI from './login/SignupUI';


// 안시 쓰기전

// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();


// const TabNavigator = () => {
//   return (
//     <>
//       <Drawer.Navigator 
//         screenOptions={{
//           drawerActiveBackgroundColor: '#CBE6D7',
//           drawerActiveTintColor: '#28794D',
//         }}
//         initialRouteName="Home"
//       >
//         <Drawer.Screen
//           name="Home"
//           component={Card_Study}
//           options={{
//             title: 'FINN WISH',
//             headerTitleAlign: 'center',
//             headerTitleStyle: {
//               color: 'darkgreen',
//               fontWeight: 'bold',
//               fontSize: 25,
//             },
//           }}
//         />
//         <Drawer.Screen name="My Chanllenge" />
//         <Drawer.Screen name="News scrap" component={News_scrap} />
//       </Drawer.Navigator>
//     </>
//   );
// }

// export default function App() {
//   const [isSignedUp, setIsSignedUp] = useState(false);

//   const handleSignUp = () => {
//     setIsSignedUp(true);
//   }

//   return (
//     <NavigationContainer>
//       {AsyncgetItem ? (
//         <Tab.Navigator
//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;

//               if (route.name === 'Dictionary') {
//                 iconName = focused ? 'book' : 'book-outline';
//               } else if (route.name === 'Home') {
//                 iconName = focused ? 'home' : 'home-outline';
//               } else if (route.name === 'Challenge') {
//                 iconName = focused ? 'trophy' : 'trophy-outline';
//               }

//               return <Icon name={iconName} size={size} color={color} />;
//             },
//           })}
//           tabBarOptions={{
//             activeTintColor: 'darkgreen',
//             inactiveTintColor: 'gray',
//           }}
//         >
//           <Tab.Screen name="Dictionary" component={Dic} />
//           <Tab.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
//           <Tab.Screen name="Challenge" component={Challenge} />
//         </Tab.Navigator>
//       ) : (
//         <SignupUI setIsSignedUp={setIsSignedUp} />
//       )}
//     </NavigationContainer>
//   );
// }





// 성은언니 코드

import React, { useState, useEffect } from 'react';
import { View, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabNavigator1 from './navigations/tab_navigator1';
import TabNavigator2 from './navigations/tab_navigator2';
import TabNavigator3 from './navigations/tab_navigator3'
import Loading from './login/Loading';
import LoginUI from './login/LoginUI';
import StackNavigation from './navigations/login_navigator';

const Tab = createBottomTabNavigator();

// 토큰 제거
// AsyncStorage.removeItem('access_token');

// yellowgreen: '#28794D',
//     green: '#CBE6D7',

export default function App() {
  const [loading, setLoading] = useState(true);
  const [hasToken, setHasToken] = useState(false);

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
    // access_token이 있는 경우, 인증된 컴포넌트를 표시
    return (
      <NavigationContainer>
        {hasToken ? (
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


// 안시 시도

// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// // 로딩
//   const [loading, setLoading] = useState(true);

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

// const TabNavigator = () => {
//   return (
//     <>
//       <Drawer.Navigator 
//         screenOptions={{
//           drawerActiveBackgroundColor: '#CBE6D7',
//           drawerActiveTintColor: '#28794D',
//         }}
//         initialRouteName="Home"
//       >
//         <Drawer.Screen
//           name="Home"
//           component={Card_Study}
//           options={{
//             title: 'FINN WISH',
//             headerTitleAlign: 'center',
//             headerTitleStyle: {
//               color: 'darkgreen',
//               fontWeight: 'bold',
//               fontSize: 25,
//             },
//           }}
//         />
//         <Drawer.Screen name="My Chanllenge" />
//         <Drawer.Screen name="News scrap" component={News_scrap} />
//       </Drawer.Navigator>
//     </>
//   );
// }

// export default function App() {

//   //access_token이 있을 때
//   if (access_token) {
//     return (
//       <NavigationContainer>
//           <Tab.Navigator
//             screenOptions={({ route }) => ({
//               tabBarIcon: ({ focused, color, size }) => {
//                 let iconName;
  
//                 if (route.name === 'Dictionary') {
//                   iconName = focused ? 'book' : 'book-outline';
//                 } else if (route.name === 'Home') {
//                   iconName = focused ? 'home' : 'home-outline';
//                 } else if (route.name === 'Challenge') {
//                   iconName = focused ? 'trophy' : 'trophy-outline';
//                 }
  
//                 return <Icon name={iconName} size={size} color={color} />;
//               },
//             })}
//             tabBarOptions={{
//               activeTintColor: 'darkgreen',
//               inactiveTintColor: 'gray',
//             }}
//           >
//             <Tab.Screen name="Dictionary" component={Dic} />
//             <Tab.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
//             <Tab.Screen name="Challenge" component={Challenge} />
//           </Tab.Navigator>
//       </NavigationContainer>
//     );
//   } else {
//     return  <LoginUI/>
//   }

  
// }












