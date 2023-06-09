import * as React from 'react';
import { View, StyleSheet ,Text , Pressable} from 'react-native';
import { TextInput, DefaultTheme,Provider as PaperProvider   } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

// // 안시 쓰기전

// export default function LoginUI ({ setIsSignedUp }) {
//   const [id, setID] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   return (
//     <PaperProvider theme={theme} >
//         <View style = {styles.input}>
//           <TextInput   value={id} onChangeText ={setID} placeholder="id를 입력하세요" style={{width:'80%' ,marginTop:25,backgroundColor: 'transparent',}}/>
//           <TextInput   value={password} onChangeText ={setPassword} placeholder="비밀번호를 입력하세요" 
//                     keyboardType="numeric"  right={<TextInput.Icon name="eye" />}  style={{width:'80%', marginTop:10 ,backgroundColor: 'transparent',}}/>
//           <Pressable
//               style={[styles.button, styles.buttonClose]}>
//               <Text style={{fontSize:20, color: "white"}}>로그인</Text>
//             </Pressable>
//             <Pressable
//               style={[styles.button2, styles.buttonClose2]}>
//               <Text style={{fontSize:20, color: "white",}}>회원가입</Text>
//             </Pressable>
//         </View>
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
//   button: {
//           borderRadius: 30,
//           padding: 10,
//           width: "70%",
//           height:"15%",
//           alignItems:'center',
//           marginTop:60,
//           fontSize: 20,
//           justifyContent:'center',
//         },
        
//         buttonClose: {
//           backgroundColor: '#B4DBB1',
//         },
//         button2: {
//           borderRadius: 30,
//           padding: 10,
//           width: "70%",
//           height:"15%",
//           alignItems:'center',
//           marginTop:20,
//           fontSize: 20,
//           justifyContent:'center',
       
//         },
        
//         buttonClose2: {
//           backgroundColor: '#30905B',
//         },
// }
// );

export default function LoginUI ({ access_token }) {
  const [id, setID] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <PaperProvider theme={theme} >
        <View style = {styles.input}>
          <TextInput   value={id} onChangeText ={setID} placeholder="id를 입력하세요" style={{width:'80%' ,marginTop:25,backgroundColor: 'transparent',}}/>
          <TextInput   value={password} onChangeText ={setPassword} placeholder="비밀번호를 입력하세요" 
                    keyboardType="numeric"  right={<TextInput.Icon name="eye" />}  style={{width:'80%', marginTop:10 ,backgroundColor: 'transparent',}}/>
          <Pressable
              style={[styles.button, styles.buttonClose]}>
              <Text style={{fontSize:20, color: "white"}}>로그인</Text>
            </Pressable>
            <Pressable
              style={[styles.button2, styles.buttonClose2]}>
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