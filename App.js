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

// AsyncStorage.setItem('access_token',
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4NjI5MjUyOSwianRpIjoiOTQ1NTY5ZmUtOGY0OC00MWUzLThhNTgtODI0MTg2NTI3YzIwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjg2MjkyNTI5fQ.797Z_n9G_20rv2_mQ5dUyJ5kZFuWrKA4gvfuUNhICQ8", 
// () => {
//   console.log('유저 닉네임 저장 완료')
// });

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
};


// 스택쌓아서 해야할듯

// 마이 페이지 수정하기 버튼 누른 후
// 회원가입할 때 보냈던 정보 그대로 다시 보내줘야 함
// 그리고 수정하면 다시 보내줄거임 업뎃요망

// import React from 'react';
// import { Divider } from 'react-native-paper';
// import { View, StyleSheet ,Text , Pressable, ScrollView} from 'react-native';
// import { TextInput, DefaultTheme,Provider as PaperProvider   } from 'react-native-paper';
// // import { useNavigation } from '@react-navigation/native';
// // import { NavigationContainer } from "@react-navigation/native";
// import styles from './styles/login.style';


// export default function Mypage () {
//   const [password, setPassword] = React.useState('');
//   const [name, setname] = React.useState('');
//   const [birth, setbirth] = React.useState('');
//   const [phone, setphone] = React.useState('');
//   const [email, setemail] = React.useState('');

//   // const navigation = useNavigation();
  
//   const handleSignUp = () => {
//     sendData(email, password, name, birth, phone); // 회원가입 데이터 전송

//   }
//   const sendData = async ( email, password, name, birth, phone) => {
//     let data = {
//       email: email,
//       password: password,
//       name: name,
//       birth: birth,
//       phone: phone
//     };
  
//     fetch('http://192.168.0.111:5000/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-CSRFToken': '{{csrf_token}}',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then (async (result) => {
//         // 화원가입 완료
//         if (result['msg']){
//           console.log('2222', result);
//           alert(result['msg']);
//           // navigation.navigate('LoginUI'); // 회원가입 후 로그인화면 이동
//         }
//         // 중복, 로그인 폼 이슈
//         else if ( result['msg1'] ){
//           alert(result['msg1']);
//         }
//         else if ( result['msg2'] ){
//           alert(result['msg2']);
//         }
//       })
//       .catch((error) => {
//         alert('Error:', error);
//       });
//   }; 
//   // }

//   return (
//       <PaperProvider theme={theme} >
//         <ScrollView>
//           <View style={{ alignItems: 'center', marginTop:"30%"}}>
//               <Text>이름</Text>
              
//               <Text>비밀번호</Text>
//               <TextInput   value={password} onChangeText ={setPassword} placeholder="8자리 이상" placeholderTextColor={"lightgray"}
//               style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>
            
//             <Text>생년월일</Text>
//             <TextInput   value={birth} onChangeText ={setbirth} placeholder={birth} placeholderTextColor={"black"}
//                       keyboardType="numeric"  style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>
//               <Text>전화번호</Text>
//               <TextInput   value={phone} onChangeText ={setphone}  placeholder={phone} placeholderTextColor={"black"}
//                       keyboardType="numeric"  style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>
            
//             </View>
//               <View style={styles.buttonContainer_sign}>
//               <Pressable style={styles.button_sign} >  
//               {/* onPress={() => navigation.navigate('LoginUI')} */}
//                 <Text style={{fontSize:17, color: "white"}}>뒤로가기</Text>
//               </Pressable> 

//               <Pressable style={styles.button2_sign } onPress={handleSignUp}>
//                 <Text style={{fontSize:17, color: "white",}}>수정하기</Text>
//               </Pressable>
              
//               </View>
//           </ScrollView>
//       </PaperProvider>

//   );
// };
// const theme = {

//     ...DefaultTheme,
//     colors: {
//       ...DefaultTheme.colors,
//       primary: '#30905B',
//       backgroundColor:'red' },
    
//   };





