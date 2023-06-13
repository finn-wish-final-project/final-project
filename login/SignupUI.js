import * as React from 'react';
import { View, StyleSheet ,Text , Pressable, ScrollView} from 'react-native';
import { TextInput, DefaultTheme,Provider as PaperProvider   } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import styles from '../styles/login.style';


export default function SignupUI () {
  const [password, setPassword] = React.useState('');
  const [name, setname] = React.useState('');
  const [birth, setbirth] = React.useState('');
  const [phone, setphone] = React.useState('');
  const [email, setemail] = React.useState('');

  const navigation = useNavigation();
  
  const handleSignUp = () => {
    sendData(email, password, name, birth, phone); // 회원가입 데이터 전송

  }
  const sendData = async ( email, password, name, birth, phone) => {
    let data = {
      email: email,
      password: password,
      name: name,
      birth: birth,
      phone: phone
    };
  
    fetch('http://192.168.0.146:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': '{{csrf_token}}',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then (async (result) => {
        // 화원가입 완료
        if (result['msg']){
          console.log('2222', result);
          alert(result['msg']);
          navigation.navigate('LoginUI'); // 회원가입 후 로그인화면 이동
        }
        // 중복, 로그인 폼 이슈
        else if ( result['msg1'] ){
          alert(result['msg1']);
        }
        else if ( result['msg2'] ){
          alert(result['msg2']);
        }
      })
      .catch((error) => {
        alert('Error:', error);
      });
  }; 
  // }

  return (
    <NavigationContainer independent={true} >
      <PaperProvider theme={theme} >
          <ScrollView>
          <View style={{ alignItems: 'center', marginTop:"25%"}}>

              <Text>이메일</Text> 
              <TextInput   value={email} onChangeText ={setemail} style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>

              <Text>비밀번호</Text>
              <TextInput   value={password} onChangeText ={setPassword} placeholder="8자리 이상" placeholderTextColor={"lightgray"}
              style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>

              <Text>이름</Text>     
              <TextInput   value={name} onChangeText ={setname} style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>
            
            <Text>생년월일</Text>
            <TextInput   value={birth} onChangeText ={setbirth} placeholder="ex)020415" placeholderTextColor={"lightgray"}
                      keyboardType="numeric"  style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>
              <Text>전화번호</Text>
              <TextInput   value={phone} onChangeText ={setphone}
                      keyboardType="numeric"  style={{width:'70%' ,backgroundColor: 'transparent',marginBottom:20}}/>
            
            </View>
              <View style={styles.buttonContainer_sign}>
              <Pressable style={styles.button_sign} onPress={() => navigation.navigate('LoginUI')}>
                <Text style={{fontSize:17, color: "white"}}>뒤로가기</Text>
              </Pressable> 

              <Pressable style={styles.button2_sign } onPress={handleSignUp}>
                <Text style={{fontSize:17, color: "white",}}>회원가입</Text>
              </Pressable>
              
              </View>
          </ScrollView>
      </PaperProvider>
    </NavigationContainer>
  );
};
const theme = {

    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#30905B',
      backgroundColor:'red' },
    
  };

