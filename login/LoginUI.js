import React, {useEffect } from 'react';
import { View, StyleSheet ,Text , Pressable} from 'react-native';
import { TextInput, DefaultTheme,Provider as PaperProvider   } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import SignupUI from '../login/SignupUI';


// // 안시 쓰기전

export default function LoginUI ({ setHasToken }) {
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
    
      fetch('http://192.168.0.189:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': '{{csrf_token}}',
        },
        body: JSON.stringify(data)
      })
        .then((response) => { 
          return response.json() 
        })
        .then(async (result) => {
          console.log('1111', result);
          
          if (result['access_token']){
            AsyncStorage.setItem('access_token',result['access_token']);
            setHasToken(true);
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
          <TextInput   value={password} onChangeText ={setPassword} placeholder="비밀번호를 입력하세요" 
                       right={<TextInput.Icon name="eye" />}  style={{width:'80%', marginTop:10 ,backgroundColor: 'transparent',}}/>
          <Pressable
              style={[styles.button, styles.buttonClose]} onPress={handleSignUp}>
              <Text style={{fontSize:20, color: "white"}}>로그인</Text>
            </Pressable>
            <Pressable
              style={[styles.button2, styles.buttonClose2]} onPress={() => navigation.navigate('SignupUI')}>
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
      backgroundColor:'red' },
    
  };
  const styles = StyleSheet.create({

  input: {
    marginTop: '50%',
    alignItems:'center',
    borderRadius: 5,
    
  },
  button: {
          borderRadius: 30,
          padding: 10,
          width: "70%",
          height:"15%",
          alignItems:'center',
          marginTop:60,
          fontSize: 20,
          justifyContent:'center',
        },
        
        buttonClose: {
          backgroundColor: '#B4DBB1',
        },
        button2: {
          borderRadius: 30,
          padding: 10,
          width: "70%",
          height:"15%",
          alignItems:'center',
          marginTop:20,
          fontSize: 20,
          justifyContent:'center',
       
        },
        
        buttonClose2: {
          backgroundColor: '#30905B',
        },
}
);

