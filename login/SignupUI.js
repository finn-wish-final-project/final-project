
// import * as React from 'react';
// import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
// import { TextInput, DefaultTheme, NavigationContainer, Provider as PaperProvider } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
// import LoginUI from '../login/LoginUI';
// import styles from '../styles/SignupUI.style';

// export default function SignupUI( ) {
//   const [password, setPassword] = React.useState('');
//   const [name, setname] = React.useState('');
//   const [birth, setbirth] = React.useState('');
//   const [phone, setphone] = React.useState('');
//   const [email, setemail] = React.useState('');
//   const [isPasswordHidden, setPasswordHidden] = React.useState(true);
//   // const [IsSignedUp, setIsSignedUp] = React.useState(true);

//   // const navigation = useNavigation();

//   const handleSignUp = () => {
//     setIsSignedUp(true);
//     sendData(email, password, name, birth, phone);
//     navigation.navigate('LoginUI');
//   };

//   const sendData = (email, password, name, birth, phone) => {
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

//   const togglePasswordVisibility = () => {
//     setPasswordHidden(!isPasswordHidden);
//   };

//   return (
//     <PaperProvider theme={theme}>
//       <ScrollView contentContainerStyle={styles.container}>
//         <View style={{ alignItems: 'center', marginTop: 65 }}>
//           <Text>이메일</Text>
//           <TextInput value={email} onChangeText={setemail} style={styles.textinput} />

//           <Text>비밀번호</Text>
//           <TextInput
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry={isPasswordHidden}
//             right={<TextInput.Icon name={isPasswordHidden ? 'eye' : 'eye-off'} onPress={togglePasswordVisibility} />}
//             style={styles.textinput}
//           />

//           <Text>이름</Text>
//           <TextInput value={name} onChangeText={setname} style={styles.textinput} />

//           <Text>생년월일</Text>
//           <TextInput
//             value={birth}
//             onChangeText={setbirth}
//             placeholder="ex)020415"
//             placeholderTextColor={'lightgray'}
//             keyboardType="numeric"
//             style={styles.textinput}
//           />
//           <Text>전화번호</Text>
//           <TextInput
//             value={phone}
//             onChangeText={setphone}
//             keyboardType="numeric"
//             right={<TextInput.Icon name="eye" />}
//             style={styles.textinput}
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Pressable style={[styles.button_back]}>
//             <Text style={{ fontSize: 17, color: 'white' }}>뒤로가기</Text>
//           </Pressable>

//           <Pressable style={[styles.button_signup]} onPress={()=>handleSignUp}>
//             <Text style={{ fontSize: 17, color: 'white' }}>회원가입</Text>
//           </Pressable>
//         </View>
//       </ScrollView>
//     </PaperProvider>
//   );
// }


// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#30905B',
//     backgroundColor: 'red',
//   },
// };







import * as React from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import { TextInput, DefaultTheme, NavigationContainer, Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import LoginUI from '../login/LoginUI';
import styles from '../styles/SignupUI.style';

export default function SignupUI( ) {
  const [password, setPassword] = React.useState('');
  const [name, setname] = React.useState('');
  const [birth, setbirth] = React.useState('');
  const [phone, setphone] = React.useState('');
  const [email, setemail] = React.useState('');
  const [isPasswordHidden, setPasswordHidden] = React.useState(true);
  // const [IsSignedUp, setIsSignedUp] = React.useState(true);

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
  // const LoginForm = (email, password, name, birth, phone ) => {
  //   let data = {
  //     email: email,
  //     password: password,
  //     name: name,
  //     birth: birth,
  //     phone: phone
  //   };

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

  const togglePasswordVisibility = () => {
    setPasswordHidden(!isPasswordHidden);
  };

  return (
    <PaperProvider theme={theme}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ alignItems: 'center', marginTop: 65 }}>
          <Text>이메일</Text>
          <TextInput value={email} onChangeText={setemail} style={styles.textinput} />

          <Text>비밀번호</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry={isPasswordHidden}
            right={<TextInput.Icon name={isPasswordHidden ? 'eye' : 'eye-off'} onPress={togglePasswordVisibility} />}
            style={styles.textinput}
          />

          <Text>이름</Text>
          <TextInput value={name} onChangeText={setname} style={styles.textinput} />

          <Text>생년월일</Text>
          <TextInput
            value={birth}
            onChangeText={setbirth}
            placeholder="ex)020415"
            placeholderTextColor={'lightgray'}
            keyboardType="numeric"
            style={styles.textinput}
          />
          <Text>전화번호</Text>
          <TextInput
            value={phone}
            onChangeText={setphone}
            keyboardType="numeric"
            right={<TextInput.Icon name="eye" />}
            style={styles.textinput}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button_back]}>
            <Text style={{ fontSize: 17, color: 'white' }}>뒤로가기</Text>
          </Pressable>
          {/* <Pressable style={[styles.button_signup]} onPress={()=> LoginForm(email, password, name, birth, phone)}>
            <Text style={{ fontSize: 17, color: 'white' }}>회원가입</Text>
          </Pressable> */}
          <Pressable
      style={[styles.button_signup]}
      onPress={handleSignUp}
    >
              <Text style={{fontSize:17, color: "white",}}>회원가입</Text>
            </Pressable>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#30905B',
    backgroundColor: 'red',
  },
};