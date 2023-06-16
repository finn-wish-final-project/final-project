import React, {useEffect, useState} from 'react';
import {View, Text, Image , ScrollView, TouchableOpacity, Linking, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/Challenge1_1.style'
import { Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IP } from '../App';

const url = 'https://main.krxverse.co.kr/_contents/ACA/02/02010400/ACA02010400P1.jsp';
const id = 5;
const point = 200;

const Challenge2_1 = () => {
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
      <Text style = {styles.title}> 모의 투자 챌린지 {"\n"} 📈 재무 교육과 성장의 시작 📈 </Text>
        
        <View >
          <Text style = {styles.small_title}>🍀 Introduction:</Text>
          <Text style = {styles.text}>
            청소년 여러분들에게 재무 교육과 성장의 기회를 제공하는 모의 투자 챌린지를 소개합니다.{"\n"} {"\n"}이 챌린지는 투자의 기본 개념과 실전 투자 경험을 쌓을 수 있는 특별한 기회입니다. 여러분들은 모의 투자를 통해 재무적인 지식을 습득하고 금융적인 안목을 키울 수 있습니다.{"\n"}{"\n"}함께 도전하며 성장해보세요!
          </Text>
        </View>
        <Image source = {require('../static/img/challenge2.jpg')}
          style = {styles.img}/>
        <Divider style={{ borderWidth: 0.5,borderColor:'lightgray' }} width={'100%'}/>

        <Text style = {styles.small_title}>🍀 Challenge Details: </Text>
        <Text style = {styles.text2}>
        <Text style = {styles.text_bold}>1️⃣ 가상 포트폴리오 구성:{"\n"}</Text>각자의 가상 포트폴리오를 구성해보세요. 주식, 채권, 펀드 등 다양한 자산에 투자하고 수익을 추구하는 전략을 계획해보세요. {"\n"}{"\n"}
        <Text style = {styles.text_bold}>2️⃣ 투자 시뮬레이션:{"\n"}</Text>모의 투자 플랫폼을 활용하여 가상의 시장에서 실제와 유사한 투자 환경을 체험해보세요. 실시간 가격 변동과 투자 결과를 확인하며 자신의 투자 전략을 검증해보세요. {"\n"}{"\n"}
        <Text style = {styles.text_bold}>3️⃣ 전략 개선과 조정:{"\n"}</Text>투자 결과와 시장 동향을 분석하고 자신의 전략을 개선해보세요. 투자 방식을 조정하고 포트폴리오 조절을 통해 최적화하는 경험을 쌓아보세요. {"\n"}{"\n"}
        
        </Text>

        <Text style = {styles.small_title}>   🍀Why Join? </Text>
        <Text style = {styles.text2}>
          ✅ 재무 교육: 모의 투자를 통해 투자의 기본 개념과 금융 시장에 대한 이해를 쌓을 수 있습니다. 투자 전략과 금융 지식을 습득하며 재무 교육을 받을 수 있습니다. {"\n"}{"\n"}
          ✅ 자기 성장: 모의 투자를 통해 자신의 의사결정과 위험 관리 능력을 향상시킬 수 있습니다. 실패와 성공을 경험하며 자기 성장과 자신감을 키울 수 있습니다.{"\n"}{"\n"}
          ✅ 미래를 위한 준비: 금융적인 안목과 투자 지식을 습득하는 것은 미래를 위한 좋은 준비입니다. 재무적인 안정과 경제적인 성공을 위해 지금부터 시작해보세요.
        </Text>
        
        <TouchableOpacity style={styles.button}
         onPress={sendPoint}>
          <Text style={styles.buttonText}>🍀 챌린지 참여하기 🍀</Text>
        </TouchableOpacity> 

        
        <Text style = {styles.text3}>
        이 챌린지에 참여하여 모의 투자를 경험하고 재무적인 지식을 습득해보세요. 청소년 여러분들의 재무 교육과 성장을 응원합니다. 함께 도전하는 여정에서 많은 성과를 이루시길 바랍니다.
        </Text>
        </View>
  </ScrollView>
    
  )
}



export default Challenge2_1;