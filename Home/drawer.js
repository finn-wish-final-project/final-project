// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {View, Text, Button} from 'react-native';

// function HomeScreen({navigation}) {
//   return (
//     <View>
//       <Text>Home</Text>
//       <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
//       <Button
//         title="Setting 열기"
//         onPress={() => navigation.navigate('Setting')}
//       />
//     </View>
//   );
// }

// function SettingScreen({navigation}) {
//   return (
//     <View>
//       <Text>Setting</Text>
//       <Button title="뒤로가기" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function DrawerNavigationApp() {
//   const Drawer = createDrawerNavigator();
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="Home"
//         drawerPosition="left"
//         backBehavior="history">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Setting" component={SettingScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default DrawerNavigationApp;

// import React, { useRef, useState } from 'react';
// import { View, Text, Button, DrawerLayoutAndroid } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const Toggle = () => {
//   const drawer = useRef(null);
//   const [drawerPosition] = useState('right');

//   const navigationView = () => {
//     return (
//       <View style={styles.navigationContainer}>
//         <Text style={styles.paragraph}>I'm in the Drawer!</Text>
//         <Button title="Close drawer" onPress={() => drawer.current.closeDrawer()} />
//       </View>
//     );
//   };

//   return (
//     <DrawerLayoutAndroid
//       ref={drawer}
//       drawerWidth={300}
//       drawerPosition={drawerPosition}
//       renderNavigationView={navigationView}
//     >
//       <View style={styles.container}>
//             <Icon name="bars" size={32} color="black" onPress={() => drawer.current.openDrawer()} />
                
//       </View>
//     </DrawerLayoutAndroid>
//   );
// };

// const styles = {
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
// };

// export default Toggle;

import React, {useRef, useState} from 'react';
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Card_Study from '../Home/Card_Study';
import BottomBar from '../Home/Bottom_Bar';
import styles2 from '../styles/index.style'

import Icon from 'react-native-vector-icons/FontAwesome';


const Toggle = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('right');


  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>여기 우리 필요한거 마이페이지랑 추가해야 하고요</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()} //https://focus-on-my.tistory.com/246 페이지 옮기는 방법
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => drawer.current.openDrawer()} style = {styles2.toggleArea}>
          <Icon name="bars" size={32} color="black" onPress={() => drawer.current.openDrawer()} />
        </TouchableOpacity>       
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Toggle;