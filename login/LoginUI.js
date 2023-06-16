import React, {useEffect } from 'react';
import { View,Text , Pressable} from 'react-native';
import { TextInput, DefaultTheme,Provider as PaperProvider,Divider   } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/login.style';
import {IP} from '../App';


export default function LoginUI ({ setHasToken}) {
  const [email, setemail] = React.useState('');
  const [password, setPassword] = React.useState('');

  useEffect(() => {
    sendData();
  }, []);

  const navigation = useNavigation();
  
  const handleSignUp = () => {
    sendData(email, password); // 로그인 데이터 전송
  }
  const sendData = async (email,password) => {

    const data={email:email, password:password};
    
      fetch(`http://${IP}:5000/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': '{{csrf_token}}',
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((result) => {
          
          if (result['access_token']){
            AsyncStorage.setItem('access_token',result['access_token']);
            setHasToken('access_token');
            alert(result['msg']);
          }
          else if ( !result['access_token'] && result['msg'] ){
            alert(result['msg']);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });

  };
  
  return (
    <PaperProvider theme={theme} >
        <View style = {styles.input}>
          <TextInput   value={email} onChangeText ={setemail} placeholder="id를 입력하세요" style={{width:'80%' ,marginTop:25,backgroundColor: 'transparent',}}/>
          <TextInput   value={password} onChangeText ={setPassword} placeholder="비밀번호를 입력하세요"  secureTextEntry={true}
                       style={{width:'80%', marginTop:10 ,backgroundColor: 'transparent',}}/>
          <Pressable
              style={[styles.button]} onPress={handleSignUp}>
              <Text style={{fontSize:20, color: "white"}}>로그인</Text>
            </Pressable>
            <Pressable
              style={[styles.button2]} onPress={() => navigation.navigate('SignupUI')}>
              <Text style={{fontSize:20, color: "white",}}>회원가입</Text>
            </Pressable>
        </View>
    </PaperProvider>
  );
};

const theme = {

    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#30905B',
 },
    
  };
