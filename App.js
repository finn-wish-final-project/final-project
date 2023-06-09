// import React, {useRef, useState} from 'react';
// import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
// import Card_Study from './Home/Card_Study';
// import BottomBar from './Home/Bottom_Bar';
// import styles from './styles/index.style';
// import Icon from 'react-native-vector-icons/Ionicons';
// import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Dic from "./Screens/Dictionary";
// import Challenge from "./Screens/Challenge";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import My_Chanllenge from './Mypage_Slide/My_Challenge';
// import News_scrap from './Mypage_Slide/News_scrap';
// import SignupUI from './login/signupUI';
// // import AsyncStorage from '@react-native-async-storage/async-storage';r
// import { useNavigation } from '@react-navigation/native';

// 수현언니 코드

// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// const TabNavigator =()=> {
//   return(
//     <>
//       <Drawer.Navigator 
      
//       screenOptions={{
//         drawerActiveBackgroundColor:'#CBE6D7', //커서 올라가있는 칸 전체 색
//         drawerActiveTintColor:'#28794D', // 커서 올라가있는 글자색
        
//       }}
//       initialRouteName="Home"
//       >
//         <Drawer.Screen name="Home" component={Card_Study} options={{ title: 'FINN WISH',headerTitleAlign: 'center',headerTitleStyle:{color:'darkgreen',fontWeight:'bold',fontSize:25}, }} />
//         <Drawer.Screen name="My Chanllenge" component={My_Chanllenge} />
//         <Drawer.Screen name="News scrap" component={News_scrap} />
//       </Drawer.Navigator>
//     </>
//   )
// }


// export default function App() {
//   return (
//     <NavigationContainer>


//       <Tab.Navigator 
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
//         <Tab.Screen name="Dictionary" component={Dic} />
//         <Tab.Screen  name="Home" component={TabNavigator} options={{ headerShown: false }} />
//         <Tab.Screen name="Challenge" component={Challenge} />
        
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }



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
//         <Drawer.Screen name="My Chanllenge" component={My_Chanllenge} />
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
//       {isSignedUp ? (
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




// export default function App() {
//   return (
//     <NavigationContainer>
//         <SignupUI />
//     </NavigationContainer>
//   );
// }


import * as React from 'react';
import { View, StyleSheet ,Text , Pressable, ScrollView} from 'react-native';
import { TextInput, DefaultTheme,Provider as PaperProvider   } from 'react-native-paper';
import {  NavigationContainer,useNavigation } from '@react-navigation/native';
import LoginUI from './login/LoginUI';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SignupUI({ access_token }) {
  const [password, setPassword] = React.useState('');
  const [name, setname] = React.useState('');
  const [birth, setbirth] = React.useState('');
  const [phone, setphone] = React.useState('');
  const [email, setemail] = React.useState('');

  const navigation = useNavigation();

  const handleSignUp = async (navigation) => {
    setIsSignedUp(true);
    const access_token = await sendData(email, password, name, birth, phone);
    if (access_token) {
      navigation.navigate('LoginUI');
    }
  };

  const sendData = async (email, password, name, birth, phone) => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      const data = { userid: 1 };

      return fetch('http://192.168.0.189:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': '{{csrf_token}}',
          'Authorization': `Bearer ${access_token}`
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((result) => {
          // console.log('1111', result);
          setData(result);
          return result.access_token;
        })
        .catch((error) => {
          console.error('Error:', error);
          return null;
        });
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  return (
    <NavigationContainer>
    <PaperProvider theme={theme}>
      {AsyncStorage.getItem('access_token') ? (
         <NavigationContainer>
          <LoginUI access_token={access_token} />
        </NavigationContainer>
      ) : (
        <ScrollView>
          <View style={{ alignItems: 'center', marginTop: 65 }}>
          <Text>이메일</Text> 
            <TextInput   value={email} onChangeText ={setemail} style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>

            <Text>비밀번호</Text>
            <TextInput   value={password} onChangeText ={setPassword}
                    keyboardType="numeric"  right={<TextInput.Icon name="eye" />}  style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>

            <Text>이름</Text>     
            <TextInput   value={name} onChangeText ={setname} style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>
          
           <Text>생년월일</Text>
           <TextInput   value={birth} onChangeText ={setbirth} placeholder="ex)020415" placeholderTextColor={"lightgray"}
                    keyboardType="numeric"  style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>
            <Text>전화번호</Text>
            <TextInput   value={phone} onChangeText ={setphone}
                    keyboardType="numeric"  right={<TextInput.Icon name="eye" />}  style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>
          
          </View>
          <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, styles.buttonClose]} >
              <Text style={{fontSize:17, color: "white"}}>뒤로가기</Text>
              {/* 로그인페이지로 이동 */}
            </Pressable> 
            <Pressable
                style={[styles.button2, styles.buttonClose2]}
                onPress={handleSignUp}
              >
                <Text style={{ fontSize: 17, color: 'white' }}>회원가입</Text>
              </Pressable>
            </View>
        </ScrollView>
      )}
      </PaperProvider>
      </NavigationContainer>
  );
}

const theme = {

  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#30905B',
    backgroundColor:'red' },
  
};
const styles = StyleSheet.create({

input: {
  marginTop: '50%',
  alignItems:'center',
  borderRadius: 5,
  
},
buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 10,
},
button: {
        borderRadius: 15,
        padding: 10,
        width: "25%",
        height:"30%",
        alignItems:'center',
        marginTop:30,
        fontSize: 20,
        justifyContent:'center',
        marginLeft:55,
        marginRight:45,
      },
      
      buttonClose: {
        backgroundColor: '#B4DBB1', 
      //   B4DBB1
      },
      button2: {
          borderRadius: 15,
          padding: 10,
          width: "25%",
          height:"30%",
          alignItems:'center',
          marginTop:30,
          fontSize: 20,
          justifyContent:'center',
          marginLeft:35,
          marginRight:55,
        },
        
        buttonClose2: {
          backgroundColor: '#30905B', 
        //   B4DBB1
        },
}
);