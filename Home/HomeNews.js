// import * as React from 'react';
// import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
// import { StyleSheet,  Pressable} from 'react-native';

// const HomeNews = () => {
//   const [visible, setVisible] = React.useState(false);

//   const showModal = () => setVisible(true);
//   const hideModal = () => setVisible(false);
//   const containerStyle = {backgroundColor: 'white', padding: 100};

//   return (
//     <Provider>
//       <Portal>
//         <Modal animationType="slide" visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
//           <Text>여기는 기사 나올 공간</Text>
//           <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={hideModal}>
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//         </Modal>
//       </Portal>
//       <Button style={{marginTop: 200 }} onPress={showModal}>
//         오늘의 뉴스 보기
//       </Button>
//     </Provider>
//   );
// };

// const styles = StyleSheet.create({
    
//     button: {
//       borderRadius: 20,
//       padding: 10,
//       elevation: 2,
//     },
    
//     buttonClose: {
//       backgroundColor: '#CBE6D7',
//     },
//     textStyle: {
//       color: 'white',
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
   
//   });
  
// export default HomeNews;

import React, { useState,useEffect } from 'react';
// import React from 'react';
import { View, ScrollView, Text, SafeAreaView, StatusBar, Button,Pressable,StyleSheet,AsyncStorage } from 'react-native';
import { Dialog, Portal,  Provider,  Divider,Paragraph } from 'react-native-paper';
import style from '../styles/HomeNews.style'
// import styles2 from './styles/index.style';

// import Icon from 'react-native-vector-icons/FontAwesome';
import "react-native-gesture-handler";
import { log } from 'react-native-reanimated';

const HomeNews = () => {
  const [visible, setVisible] = useState(false);
  const [news,setData]=useState({title:'', article:''});
  // const [token, setToken] = useState(null);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    sendData();
  }, []);

  

  // console.log(data1);
  const sendData = async () => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      const data = {userid:1};
  
      fetch('http://192.168.0.189:5000/home/news', {
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
          console.log('1111', result);
          setData(result[0]);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  

  return (
    <Provider >
      <View >
        <Portal >
        <Pressable style={{marginTop:'68%',}}onPress={showDialog}>
            <Text style={style.textStyle}>오늘의 뉴스 보러가기</Text>
          </Pressable>
          {/* <Button style={styles.modalbButton}
          onPress={showDialog} title="오늘의 뉴스 보러가기" /> */}
          <Dialog
          contentStyle={{ backgroundColor: 'transparent' }} 
          style={style.dialogContainer} visible={visible} onDismiss={hideDialog} >
          <Dialog.Title>{news.title}</Dialog.Title>
          <Divider style={{ borderWidth: 1,marginHorizontal:15,borderColor:'darkgreen' }} width={'90%'}/>
            <Dialog.ScrollArea>
              <ScrollView  contentContainerStyle={{paddingHorizontal: 0 }}>
              
                <Text style={style.article}>{news.article}</Text>

              </ScrollView>
              <Pressable onPress={hideDialog}>
                  <Text style={style.CloseButton}>닫기</Text>
                </Pressable>
            </Dialog.ScrollArea>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

export default HomeNews;