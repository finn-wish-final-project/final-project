import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView ,Pressable,StatusBar,AsyncStorage} from 'react-native';
import { Dialog, Portal,  Provider,  Divider } from 'react-native-paper';
import styles from '../styles/NewsScrap.style';
import { IP } from '../App';

const Challenge = () => {
  const [newsList, setNewsList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    sendData();
  }, []);

  const sendData = async () => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      const data = {userid:1 };

      fetch(`http://${ IP }:5000/news/show`, {
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
          if (result['msg']) {
            alert(result['msg']);
          } else {
            setNewsList(result);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleNewsSelect = (news) => {
    setSelectedNews(news);
    showDialog();
  };

  return (
    <Provider>
      <ScrollView style={{ backgroundColor: 'lightgrey' }}>
        <Portal>
          {newsList.map((news, index) => (
            <Pressable key={index} onPress={() => handleNewsSelect(news)}>
              <View style={styles.CardContainer}>
                <Text style={styles.CardTitle}>{news.title}</Text>
              </View>
            </Pressable>
          ))}
          <Dialog style={styles.dialogContainer} visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>{selectedNews?.title}</Dialog.Title>
            <Divider style={{ borderWidth: 1, marginHorizontal: 15 }} width={'90%'} />
            <Dialog.ScrollArea style={styles.ScrollArea}>
              <ScrollView contentContainerStyle={{ paddingHorizontal: 0 }}>
                <Text style={styles.ArticleText}>{selectedNews?.article}</Text>
              </ScrollView>
              <Pressable onPress={hideDialog}>
                <Text style={styles.CloseButton}>닫기</Text>
              </Pressable>
            </Dialog.ScrollArea>
          </Dialog>
        </Portal>
      </ScrollView>
    </Provider>
  );
};

export default Challenge;