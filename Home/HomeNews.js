import React, { useState,useEffect } from 'react';

import { View, ScrollView, Text, SafeAreaView, StatusBar, Button,Pressable,StyleSheet,AsyncStorage } from 'react-native';
import { Dialog, Portal,  Provider,  Divider,Paragraph } from 'react-native-paper';
import style from '../styles/HomeNews.style'
import "react-native-gesture-handler";
import { log } from 'react-native-reanimated';
import {IP} from '../App';


const HomeNews = () => {
  const [visible, setVisible] = useState(false);
  const [newsID,setnewsID] = useState('')
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
      const data = {access_token:access_token};
  
      fetch(`http://${IP}:5000/home/news`, {
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
          setData(result[0]);
          setnewsID(result[0]['newsid'])
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const newsidsendData = async (newsID) => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      const data = {newsid:newsID};
  
      fetch(`http://${IP}:5000/news/save`, {
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
          alert(result['msg'])
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
            <Dialog.ScrollArea style = {style.ScrollArea}>
              <ScrollView  contentContainerStyle={{paddingHorizontal: 0 }}>
              
                <Text style={style.article}>{news.article}</Text>

              </ScrollView>
              <View style={style.ButtonContainer}>
                <Pressable onPress={()=>newsidsendData(newsID)}>
                    <Text style={style.ScrapButton}>스크랩</Text>
                </Pressable>
                <Pressable onPress={hideDialog}>
                  <Text style={style.CloseButton}>닫기</Text>
                </Pressable>
              </View>
              {/* <View style={{marginLeft:-14,height:30,borderRadius:10,backgroundColor:'darkgreen', bottom: 0, flexDirection: 'row', justifyContent:'space-between', width: '110%', paddingHorizontal: '15%'}}>
                <Pressable onPress={()=>newsidsendData(newsID)}>
                    <Text style={{fontSize:20,color:'white'}}>스크랩</Text>
                </Pressable>
                <Text style={{fontSize:25,color:'white'}}>|</Text>
                <Pressable onPress={hideDialog}>
                  <Text style={{fontSize:20,color:'white'}} >닫기</Text>
                </Pressable>
              </View> */}
            </Dialog.ScrollArea>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

export default HomeNews;