// import * as React from 'react';
// import { View, StyleSheet ,Text , Pressable, ScrollView} from 'react-native';
// import { TextInput, DefaultTheme,Provider as PaperProvider   } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
// import LoginUI from './loginUI';

// // 넘어가긴 하는데 에러 뜨는 코드 안시 안 씀

// export default function SignupUI ({ setIsSignedUp }) {
//   const [password, setPassword] = React.useState('');
//   const [name, setname] = React.useState('');
//   const [birth, setbirth] = React.useState('');
//   const [phone, setphone] = React.useState('');
//   const [email, setemail] = React.useState('');

//   // onpress를 했을 때 딕셔너리로 보내
//   // const LoginForm = ( email, password, name, birth, phone) => {
//   const navigation = useNavigation();
  
//   const handleSignUp = () => {
//     setIsSignedUp(true);
//     sendData(email, password, name, birth, phone); // 회원가입 데이터 전송
//     navigation.navigate('LoginUI'); // 회원가입 후 화면 이동
//   }
//   const sendData = ( email, password, name, birth, phone,navigation) => {
//     let data = {
//       email: email,
//       password: password,
//       name: name,
//       birth: birth,
//       phone: phone
//     };
  
//     fetch('http://192.168.0.189:5000/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-CSRFToken': '{{csrf_token}}',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         console.log('1111', result);
//         alert(result['msg']);
//         navigation.navigate('loginUI');
//       })
//       .catch((error) => {
//         alert('Error:', error);
//       });
//   }; 
//   // }

//   return (
//     <PaperProvider theme={theme} >
//         <ScrollView>
//         <View style={{ alignItems: 'center', marginTop:65}}>

//             <Text>이메일</Text> 
//             <TextInput   value={email} onChangeText ={setemail} style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>

//             <Text>비밀번호</Text>
//             <TextInput   value={password} onChangeText ={setPassword}
//                     keyboardType="numeric"  right={<TextInput.Icon name="eye" />}  style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>

//             <Text>이름</Text>     
//             <TextInput   value={name} onChangeText ={setname} style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>
          
//            <Text>생년월일</Text>
//            <TextInput   value={birth} onChangeText ={setbirth} placeholder="ex)020415" placeholderTextColor={"lightgray"}
//                     keyboardType="numeric"  style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>
//             <Text>전화번호</Text>
//             <TextInput   value={phone} onChangeText ={setphone}
//                     keyboardType="numeric"  right={<TextInput.Icon name="eye" />}  style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>
          
//           </View>
//             <View style={styles.buttonContainer}>
//              <Pressable style={[styles.button, styles.buttonClose]} >
//               <Text style={{fontSize:17, color: "white"}}>뒤로가기</Text>
//               {/* 로그인페이지로 이동 */}
//             </Pressable> 
//             {/* <Pressable style={[styles.button2, styles.buttonClose2]} onPress={() => sendData(email, password, name, birth, phone,navigation)}> */}
//             {/* sendData(email,password,name,birth,phone) */}
//             <Pressable
//       style={[styles.button2, styles.buttonClose2]}
//       onPress={handleSignUp}
//     >
//               <Text style={{fontSize:17, color: "white",}}>회원가입</Text>
//             </Pressable>
//             </View>
//         </ScrollView>
//     </PaperProvider>
//   );
// };
// const theme = {

//     ...DefaultTheme,
//     colors: {
//       ...DefaultTheme.colors,
//       primary: '#30905B',
//       backgroundColor:'red' },
    
//   };
//   const styles = StyleSheet.create({

//   input: {
//     marginTop: '50%',
//     alignItems:'center',
//     borderRadius: 5,
    
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   button: {
//           borderRadius: 15,
//           padding: 10,
//           width: "25%",
//           height:"30%",
//           alignItems:'center',
//           marginTop:30,
//           fontSize: 20,
//           justifyContent:'center',
//           marginLeft:55,
//           marginRight:45,
//         },
        
//         buttonClose: {
//           backgroundColor: '#B4DBB1', 
//         //   B4DBB1
//         },
//         button2: {
//             borderRadius: 15,
//             padding: 10,
//             width: "25%",
//             height:"30%",
//             alignItems:'center',
//             marginTop:30,
//             fontSize: 20,
//             justifyContent:'center',
//             marginLeft:35,
//             marginRight:55,
//           },
          
//           buttonClose2: {
//             backgroundColor: '#30905B', 
//           //   B4DBB1
//           },
// }
// );


// import * as React from 'react';
// import { View, StyleSheet ,Text , Pressable, ScrollView} from 'react-native';
// import { TextInput, DefaultTheme,Provider as PaperProvider   } from 'react-native-paper';

// export default function signupUI () {
//   const [password, setPassword] = React.useState('');
//   const [name, setname] = React.useState('');
//   const [birth, setbirth] = React.useState('');
//   const [phone, setphone] = React.useState('');
//   const [email, setemail] = React.useState('');

//   // onpress를 했을 때 딕셔너리로 보내
//   const LoginForm = (email, password, name, birth, phone ) => {
//     let data = {
//       email: email,
//       password: password,
//       name: name,
//       birth: birth,
//       phone: phone
//     };
  
//     fetch('http://192.168.0.189:5000/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-CSRFToken': '{{csrf_token}}',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         console.log('1111', result);
//         alert(result['msg']);
//       })
//       .catch((error) => {
//         alert('Error:', error);
//       });
//   };
  
  

//   return (
//     <PaperProvider theme={theme} >
//         <ScrollView >
//         <View style={{ alignItems: 'center', marginTop:65}}>

//             <Text>이메일</Text> 
//             <TextInput   value={email} onChangeText ={setemail} style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>

//             <Text>비밀번호</Text>
//             <TextInput   value={password} onChangeText ={setPassword}
//                     keyboardType="numeric"  right={<TextInput.Icon name="eye" />}  style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>

//             <Text>이름</Text>     
//             <TextInput   value={name} onChangeText ={setname} style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>
          
//            <Text>생년월일</Text>
//            <TextInput   value={birth} onChangeText ={setbirth} placeholder="ex)020415" placeholderTextColor={"lightgray"}
//                     keyboardType="numeric"  style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>
//             <Text>전화번호</Text>
//             <TextInput   value={phone} onChangeText ={setphone}
//                     keyboardType="numeric"  right={<TextInput.Icon name="eye" />}  style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>
          
//           </View>
//             <View style={styles.buttonContainer}>
//           <Pressable style={[styles.button, styles.buttonClose]} >
//               <Text style={{fontSize:17, color: "white"}}>뒤로가기</Text>
//             </Pressable>
//             <Pressable style={[styles.button2, styles.buttonClose2]} onPress={() => LoginForm(email, password, name, birth, phone)}>
//             {/* sendData(email,password,name,birth,phone) */}
//               <Text style={{fontSize:17, color: "white",}}>회원가입</Text>
//             </Pressable>
//             </View>
//         </ScrollView>
//     </PaperProvider>
//   );
// };
// const theme = {

//     ...DefaultTheme,
//     colors: {
//       ...DefaultTheme.colors,
//       primary: '#30905B',
//       backgroundColor:'red' },
    
//   };
//   const styles = StyleSheet.create({

//   input: {
//     marginTop: '50%',
//     alignItems:'center',
//     borderRadius: 5,
    
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   button: {
//           borderRadius: 15,
//           padding: 10,
//           width: "25%",
//           height:"30%",
//           alignItems:'center',
//           marginTop:30,
//           fontSize: 20,
//           justifyContent:'center',
//           marginLeft:55,
//           marginRight:45,
//         },
        
//         buttonClose: {
//           backgroundColor: '#B4DBB1', 
//         //   B4DBB1
//         },
//         button2: {
//             borderRadius: 15,
//             padding: 10,
//             width: "25%",
//             height:"30%",
//             alignItems:'center',
//             marginTop:30,
//             fontSize: 20,
//             justifyContent:'center',
//             marginLeft:35,
//             marginRight:55,
//           },
          
//           buttonClose2: {
//             backgroundColor: '#30905B', 
//           //   B4DBB1
//           },
// }
// );

import * as React from 'react';
import { View, StyleSheet ,Text , Pressable, ScrollView} from 'react-native';
import { TextInput, DefaultTheme,Provider as PaperProvider   } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import LoginUI from '../login/LoginUI';




// // 넘어가긴 하는데 에러 뜨는 코드 안시 안 씀
useNavigation
export default function SignupUI ({ setIsSignedUp }) {
  const [password, setPassword] = React.useState('');
  const [name, setname] = React.useState('');
  const [birth, setbirth] = React.useState('');
  const [phone, setphone] = React.useState('');
  const [email, setemail] = React.useState('');

  // onpress를 했을 때 딕셔너리로 보내
  // const LoginForm = ( email, password, name, birth, phone) => {
  const navigation = useNavigation();
  
  const handleSignUp = () => {
    setIsSignedUp(true);
    sendData(email, password, name, birth, phone); // 회원가입 데이터 전송
    navigation.navigate('LoginUI'); // 회원가입 후 화면 이동
  }
  const sendData = ( email, password, name, birth, phone,navigation) => {
    let data = {
      email: email,
      password: password,
      name: name,
      birth: birth,
      phone: phone
    };
  
    fetch('http://192.168.0.189:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': '{{csrf_token}}',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('1111', result);
        alert(result['msg']);
        navigation.navigate('loginUI');
      })
      .catch((error) => {
        alert('Error:', error);
      });
  }; 
  // }

  return (
    <PaperProvider theme={theme} >
        <ScrollView>
        <View style={{ alignItems: 'center', marginTop:65}}>

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
            {/* <Pressable style={[styles.button2, styles.buttonClose2]} onPress={() => sendData(email, password, name, birth, phone,navigation)}> */}
            {/* sendData(email,password,name,birth,phone) */}
            <Pressable
      style={[styles.button2, styles.buttonClose2]}
      onPress={handleSignUp}
    >
              <Text style={{fontSize:17, color: "white",}}>회원가입</Text>
            </Pressable>
            </View>
        </ScrollView>
    </PaperProvider>
  );
};
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

