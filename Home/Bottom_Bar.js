import * as React from 'react';
import { Text, View , TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/StatisticsScreen.js';
// import StatisticsScreen from './screens/StatisticsScreen.js';
// import SettingsScreen from './screens/SettingScreen.js';
import Icon from 'react-native-vector-icons/Ionicons';
import Toggle from '../Home/drawer';
import styles2 from '../styles/index.style';

const Tab = createBottomTabNavigator();

export default function BottomBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === '메인') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === '통계'){
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === '설정'){
              iconName = focused ? 'document-attach' : 'document-attach-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size}  color={color}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="메인" component={HomeScreen} />
        <Tab.Screen name="통계" component={HomeScreen} />
        <Tab.Screen name="설정" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const Tab = createBottomTabNavigator();

// // const HomeScreen = () => <Text>Home Screen</Text>;

// export default function BottomBar() {
//   return (
//     <NavigationContainer>
//       <View style={{ flex: 1 }}>
//         <Tab.Navigator
//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;

//               if (route.name === '메인') {
//                 iconName = focused ? 'book' : 'book-outline';
//               } else if (route.name === '통계') {
//                 iconName = focused ? 'home' : 'home-outline';
//               } else if (route.name === '설정') {
//                 iconName = focused ? 'document-attach' : 'document-attach-outline';
//               }

//               return <Icon name={iconName} size={size} color={color} />;
//             },
//           })}
//           tabBarOptions={{
//             activeTintColor: 'black',
//             inactiveTintColor: 'gray',
//           }}
//         >
//           <Tab.Screen name="메인" component={HomeScreen} />
//           <Tab.Screen name="통계" component={HomeScreen} />
//           <Tab.Screen name="설정" component={HomeScreen} />
//         </Tab.Navigator>
//       </View>
//       <View style={styles.container}>
//         <TouchableOpacity onPress={() => drawer.current.openDrawer()} style = {{position : 'absolute',zIndex: 999,right : 30,height : 30,width : 30,top : 50,}}>
//           <Icon name="bars" size={32} color="black" onPress={() => drawer.current.openDrawer()} />
//         </TouchableOpacity>       
//       </View>
//     </NavigationContainer>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//   },
//   navigationContainer: {
//     backgroundColor: '#ecf0f1',
//   },
//   paragraph: {
//     padding: 16,
//     fontSize: 15,
//     textAlign: 'center',
//   },
// });
