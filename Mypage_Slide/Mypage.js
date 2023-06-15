import React,{useEffect} from 'react';
import { Divider } from 'react-native-paper';
import { View, StyleSheet ,Text , Pressable, ScrollView} from 'react-native';
import { TextInput, DefaultTheme,Provider as PaperProvider   } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
// import { NavigationContainer } from "@react-navigation/native";
import styles from '../styles/login.style';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Mypage () {
    const navigation = useNavigation();
  const [point, setPoint] = React.useState('');
  const [name, setname] = React.useState('');
  const [email, setemail] = React.useState('');

  useEffect(() => {
    sendData();
   }, []);

  const sendData = async () => {
    const access_token = await AsyncStorage.getItem('access_token');
    const data = { access_token:access_token };
  
    fetch('http://192.168.0.111:5000/mypage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': '{{csrf_token}}',
        'Authorization': `Bearer ${access_token}`
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then (async (result) => {
        console.log(result);
        setemail(result[0]['email']);
        setname(result[0]['name']);
        setPoint(result[0]['point']);

      })
      .catch((error) => {
        alert('Error:', error);
      });
  }; 
  // }

  return (
      <PaperProvider theme={theme} >
        <View style={{  display:'flex',justifyContent: 'center',alignItems: 'center',marginTop:"30%",borderWidth:2, borderColor:'darkgreen',borderRadius:20,
            width:350,marginLeft:30}}>
    {/* style={{ alignItems: 'center', }} */}
            <Text style={{fontSize:25, alignItems:'center',textAlign:'left',marginTop:25}}>{name}{'\n'} </Text>
           <Divider style={{ borderWidth: 0.5,borderColor:'darkgreen' }} width={'90%'}/>
           <Text style={{fontSize:25, alignItems:'center',textAlign:'left',marginBottom:60}}>
           {'\n'}{email}{'\n'}

           {'\n'}나의 포인트  {point}{'\n'}</Text>


              <View>
              <Pressable style={styles.button_back}  
              onPress={() => navigation.navigate('Home')} >
                <Text style={{fontSize:17, color: "white"}}>뒤로가기</Text>
              </Pressable> 
              </View>

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

