import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/Challenge_Recommend.style'
import Challenge1_1 from './Challenge1_1';
import Challenge1_2 from './Challenge1_2';
import Challenge1_3 from './Challenge1_3';
import Challenge1_4 from './Challenge1_4';
import Challenge2_1 from './Challenge2_1';
import Challenge3_1 from './Challenge3_1';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IP } from '../App';

const Challenge_Recommend = () => {
  const navigation = useNavigation();
  const [name,setName] = useState('');
  const [chalid, setChalid] = useState('');

    useEffect(() => {
      sendData();
    }, []);
    
    const sendData = async () => {
      try {
        const access_token = await AsyncStorage.getItem('access_token');
        const data = {userid : access_token};
    
        fetch(`http://${IP}:5000/challenge`, {
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
            const { username, chalid } = result;
            console.log('뭐받옴', result)
            setName(username);
            setChalid(chalid)
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      } catch (error) {
        console.error('Error:', error);
      }
    };



  return(
    <ScrollView>
      <Text style = {styles.title}>{name}님이 좋아할 챌린지</Text>
      <Text style = {styles.small_title}>AI기반으로 적절한 챌린지를 추천해드립니다. {"\n"}</Text>
      <ScrollView>
      {chalid === 1 ? <Challenge1_1 /> : null}
      {chalid === 2 ? <Challenge1_2 /> : null}
      {chalid === 3 ? <Challenge1_3 /> : null}
      {chalid === 4 ? <Challenge1_4 /> : null}
      {chalid === 5 ? <Challenge2_1 /> : null}
      {chalid === 6 ? <Challenge3_1 /> : null}
      </ScrollView>
    </ScrollView>

    )
}

export default Challenge_Recommend;