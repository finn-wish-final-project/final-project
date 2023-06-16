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

export const IP = '192.168.0.111';


const Tab = createBottomTabNavigator();
// AsyncStorage.clear()
// yellowgreen: '#28794D',
//     green: '#CBE6D7',

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
        <Tab.Screen name="Dictionary" component={TabNavigator2} options={{ unmountOnBlur: true, headerShown: false }}/>
        <Tab.Screen  name="Home" component={TabNavigator1} options={{ unmountOnBlur: true, headerShown: false }} />
        <Tab.Screen name="Quiz" component={TabNavigator4} options={{ unmountOnBlur: true, headerShown: false }} />
        <Tab.Screen name="Challenge" component={TabNavigator3} options={{ unmountOnBlur: true, headerShown: false }} />
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










// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Image, Button } from 'react-native';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

// class App extends Component {

//   state = {
//     avatar: ''
//   }

//   addImage = () => {
//     launchCamera({}, response => {
//       // console.warn(response)
//       this.setState({
//         avatar: response.uri
//       })
//     })
//   }

//   render () {
//     return (
//       <View style={styles.container}>
//         <Image
//           style={styles.avatar}
//           source={{uri: this.state.avatar}}
//         />
      
//         <Button
//           title="Add an Image"
//           onPress={() => this.addImage()}
//         />
//       </View>
//     )
//  }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E4AB26',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   avatar: {
//     width: '100%',
//     height: 400
//   }
// });

// export default App;















