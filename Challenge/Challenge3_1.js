import React from 'react';
import {View, Text, Image , ScrollView, TouchableOpacity,Linking, Alert} from 'react-native';
import styles from '../styles/Challenge1_1.style'
import { Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IP } from '../App';

const url = 'https://youtu.be/bB5bntqoAPc';
const id = 6;
const point = 300;

const Challenge3_1 = () => {
  const sendPoint = async () => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      const data = { chalid : id, userid : access_token, point : point };
      
      fetch(`http://${ IP }:5000/challenge/point`, {
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
          if (result['msg']){
            Alert.alert(result['msg'], '',[
              {
                text : '확인',
                onPress : () => {
                  Linking.openURL(url);
                }
              }
            ]);
        }
          })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <ScrollView style = {styles.container}>
      <View style={styles.lineContainer}>
      <Text style = {styles.title}> 금융교육 챌린지{'\n'}✨꿈을 향한 첫 걸음✨</Text>
  
        <View>
          <Text style = {styles.small_title}>🍀 Introduction:</Text>
          <Text style = {styles.text}>
          금융 교육은 중고등학생들이 현명한 금융 결정을 내리고 미래를 준비하는 데 중요한 역할을 합니다. 이 챌린지는 중고등학생들을 위한 금융 교육 동영상 클립을 활용하여 학생들의 금융 지식과 능력을 향상시키기 위해 만들어졌습니다. {'\n'}{'\n'}
      챌린지 동안 여러분은 금융감독원에서 제공하는 초·중·고 대상 금융교육 동영상 클립을 시청하고 학습함으로써 실생활에서 금융을 잘 활용하는 방법을 배우게 됩니다. 챌린지에 참여하여 중고등학생 시기부터 현명한 금융 습관을 길러보세요!{'\n'}          </Text>
        </View>
        <Image source = {require('../static/img/challenge3_1_1.jpg')}
          style = {styles.img}/>
        <Divider style={{ borderWidth: 0.5,borderColor:'lightgray' }} width={'100%'}/>

        <Text style = {styles.small_title}>🍀 Challenge Details: </Text>
        <Text style = {styles.text2}>
        <Text style={styles.text_bold}>동영상 클립 학습:</Text> {"\n"}👉금융감독원에서 제공하는 중고등학생을 위한 금융 교육 동영상 클립을 시청하고 학습합니다. {"\n"}👉이 동영상 클립들은 중고등학생들을 대상으로 제작되었으며, 예산 관리, 저축, 투자 등 다양한 주제를 다룹니다. {"\n"}👉동영상을 시청하고 내용을 정리하며, 중요한 포인트와 핵심 개념을 파악할 수 있습니다. {'\n'}{'\n'}
        </Text>
        <Text style = {styles.small_title}>🍀Why Join? </Text>
        <Text style = {styles.text2}>
        ✅ 금융교육의 필요성: 중고등학생 시기부터 금융에 대한 기본 지식을 습득하는 것은 중요합니다. 이 챌린지를 통해 여러분은 자신의 미래를 위한 금융적인 판단력을 키우고, 돈을 효율적으로 관리하는 방법을 배울 수 있습니다. {'\n'}{'\n'}
        ✅ 실생활에 적용 가능한 내용: 챌린지에서 배우는 내용은 실생활에서 바로 적용할 수 있는 내용들로 구성되어 있습니다. 여러분은 금융상품에 대한 이해도를 높이고, 돈을 관리하고 투자하는 방법을 배움으로써 미래에 더욱 안정적인 경제적인 삶을 쌓아갈 수 있습니다. {'\n'}
        </Text>

        <TouchableOpacity style={styles.button}
         onPress={sendPoint}>
          <Text style={styles.buttonText}>🍀 챌린지 참여하기 🍀</Text>
        </TouchableOpacity> 

        <Text style = {styles.text3}>
        챌린지에 참여하여 중고등학생 여러분들이 금융교육의 중요성을 깨닫고 미래를 위한 금융적인 판단력을 키우는 좋은 기회가 되길 바랍니다. 함께 배우고 성장하는 과정에서 여러분의 실생활에 적용할 수 있는 소중한 지식과 경험을 얻을 수 있을 것입니다.</Text>
        </View>
    </ScrollView>
    
  )
}



export default Challenge3_1;