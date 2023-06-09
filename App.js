// import React, { useState, useEffect } from 'react';
// import { View} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // import { createDrawerNavigator } from "@react-navigation/drawer";


// import TabNavigator1 from './navigations/tab_navigator1';
// import TabNavigator2 from './navigations/tab_navigator2';
// import TabNavigator3 from './navigations/tab_navigator3'

// import Loading from './login/Loading';

// // const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// // yellowgreen: '#28794D',
// //     green: '#CBE6D7',

// export default function App() {
//   const [loading, setLoading] = useState(true);

//   const mainApi = async () => {
//     setLoading(true); // api 호출 전에 true로 변경하여 로딩화면 띄우기
//       try {
//         const response = await fetch(``, {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(),
//         });

//         const result = await response.json();
//       console.log('mainData', result);
//       setLoading(false);
//     } catch (error) {
//       window.alert(error);
//     }
//   };

//   useEffect(() => {
//     mainApi();
//   }, []);


//   return (
//     <NavigationContainer>
//       {loading ? (
//         <View style={{ flex: 1 }}>
//           <Loading />
//         </View>
//       ) : (
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
//               }
        
//               // You can return any component that you like here!
//               return <Icon name={iconName} size={size}  color={color}/>;
//             },
//           })}
//           tabBarOptions={{
//             activeTintColor: 'darkgreen',
//             inactiveTintColor: 'gray',
//           }}>
//         <Tab.Screen name="Dictionary" component={TabNavigator2} options={{ headerShown: false }}/>
//         <Tab.Screen  name="Home" component={TabNavigator1} options={{ headerShown: false }} />
//         <Tab.Screen name="Challenge" component={TabNavigator3} options={{ headerShown: false }} />
//       </Tab.Navigator>
//       )}
//     </NavigationContainer>
//   );
// };













import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import TabNavigator1 from './navigations/tab_navigator1';
import TabNavigator2 from './navigations/tab_navigator2';
import TabNavigator3 from './navigations/tab_navigator3'

import Loading from './login/Loading';

const Tab = createBottomTabNavigator();

// yellowgreen: '#28794D',
//     green: '#CBE6D7',

export default function App() {
  const [loading, setLoading] = useState(true);

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
};















