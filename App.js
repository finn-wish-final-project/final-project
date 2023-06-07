import React, {useRef, useState} from 'react';
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Card_Study from './Home/Card_Study';
import BottomBar from './Home/Bottom_Bar';
import styles2 from './styles/index.style';

import Icon from 'react-native-vector-icons/FontAwesome';



// const Home = () => {
//   const drawer = useRef(null);
//   const [drawerPosition, setDrawerPosition] = useState('right');


//   const navigationView = () => (
//     <View style={[styles.container, styles.navigationContainer]}>
//       <Text style={styles.paragraph}>여기 우리 필요한거 마이페이지랑 추가해야 하고요</Text>
//       <Button
//         title="Close drawer"
//         onPress={() => drawer.current.closeDrawer()} //https://focus-on-my.tistory.com/246 페이지 옮기는 방법
//       />
//     </View>
//   );

//   return (
//     <DrawerLayoutAndroid
//       ref={drawer}
//       drawerWidth={300}
//       drawerPosition={drawerPosition}
//       renderNavigationView={navigationView}>
//       <View style={styles.container}>
//         <TouchableOpacity onPress={() =>  navigation.navigate('OtherScreen')} style = {styles2.toggleArea}>
//           <Icon name="bars" size={32} color="darkgreen" onPress={() => drawer.current.openDrawer()} />
//           {/* <Image source={require('./static/img/toggle.png')} style = {styles2.toggleImage}/> */}
//         </TouchableOpacity>

//         <View style = {{ flex:1 }}>
//           <Card_Study />
//           <BottomBar />
//         </View>
        
//       </View>
//     </DrawerLayoutAndroid>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//     backgroundColor:'white'
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

// export default App;


import "react-native-gesture-handler";
// import React from "react";
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
        <Drawer.Screen name="Home" component={Card_Study} options={{ title: 'FINN WISH',headerTitleAlign: 'center',headerTitleStyle:{color:'darkgreen',fontWeight:'bold',fontSize:25}, }} />
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

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="FinnWish" component={Card_Study} /> 
//       <Drawer.Screen name="Dictionary" component={Dic} /> 
//       <Drawer.Screen name="Challenge" component={Challenge} /> 
//     </Drawer.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator initialRouteName="Home">
//         <Tab.Screen name="Dictionary" component={Dic} /> 
//         <Tab.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} /> 
//         <Tab.Screen name="Challenge" component={Challenge} /> 
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
