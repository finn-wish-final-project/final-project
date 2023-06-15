import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import styles from '../styles/Challenge1_1.style';
import { Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
        
import { IP } from '../App';

const url = 'https://m.busanbank.co.kr/ib20/mnu/MWPFPME000FPM10?FPCD=0010100172&ACSYS_FPCD=0&FP_HLV_DVCD=00101&FP_LRG_CLACD=001010101&TRG_BTE_DPO_EGM_NTRT=0&FP_NM=%EB%A7%88!%EC%9D%B4%ED%86%B5%EC%9E%A5&FP_OTL_CNTN=%3Cb%3EMZ%EC%84%B8%EB%8C%80%EB%A5%BC+%EC%9C%84%ED%95%9C%3C%2Fb%3E%3Cbr%3E%EB%86%92%EC%9D%80+%EA%B8%88%EB%A6%AC%EC%99%80+%EB%8B%A4%EC%96%91%ED%95%9C+%EC%84%9C%EB%B9%84%EC%8A%A4&DPID=&TPCD=&IS_FPM=&SELL_STP_YN=&TIT_NM=&FP_MD_CLACD=000000000&MENU_ID=&ib20_wc=MWPFPM200000V10M%3AMWPFPME10000V00M&app_uuid=&preMenuId=MWPFPME000FPM10&ib20.persistent.lang.code=ko&';
const id = 3;
const point = 500;

const Challenge1_3 = () => {
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
    <ScrollView style={styles.container}>
      <View style={styles.lineContainer}>
      <Text style={styles.title}>부모님 생신&어버이날 돈 모으기 챌린지</Text>

      <View>
        <Text style={styles.small_title}>🍀 Introduction:</Text>
        <Text style={styles.text}>
          부모님의 생일이나 어버이날은 부모님께 감사와 사랑을 표현하는 좋은 기회입니다.{"\n"} {"\n"}
           이 챌린지에서는 중고등학생들이 부모님을 위해 돈을 모아 근사한 선물이나 경험을 선물하는 것을 목표로 합니다. {"\n"}
        </Text>
      </View>

      <Image source={require('../static/img/challenge1_3_1.jpg')} style={styles.img} />

      <Divider style={{ borderWidth: 0.5, borderColor: 'lightgray' }} width={'100%'} />

      <View>
        <Text style={styles.small_title}>🍀 Challenge Details:</Text>
        <Text style={styles.text_bold}>1️⃣ 돈 모으기 계획 수립: </Text>
        <Text style={styles.text}>
          생일이나 어버이날까지 돈을 모을 계획을 수립합니다. 매주 얼마를 모을지 계획합니다.{"\n"} 
        </Text>
        <Text style={styles.text_bold}>2️⃣ 저축 계좌 개설 & 목표 설정: </Text>
        <Text style={styles.text}>
          저축 계좌를 개설하고, 매주 혹은 정기적으로 일정 금액을 입금하여 저축을 시작합니다. {"\n"}
        </Text>
        <Text style={styles.text_bold}> 3️⃣저축 동기 부여: </Text>
        <Text style={styles.text}>
          저축을 위해 동기 부여 방법을 찾습니다. 예를 들어, 저축한 금액에 따라 특별한 보상을 받을 수 있습니다.{"\n"}
        </Text>
        <Text style={styles.text_bold}>4️⃣FINN WISH: </Text>
        <Text style={styles.text}>
          부모님 생일이나 어버이날에 근사한 선물이나 경험을 선물하기 위해 준비합니다. 행복한 기념일 보내세요.{"\n"}
        </Text>
      </View>

      <Text style={styles.small_title}>🍀Why Join?</Text>
      <Text style={styles.text2}>
        이 챌린지에 참여함으로써 얻을 수 있는 이점들입니다:{"\n"}
      </Text>
      <Text style={styles.text}> 
        ✅ 선물이나 이벤트 등을 통해 부모님에게 기쁨을 선사하며 부모님에 대한 감사와 사랑을 표현할 수 있습니다.{'\n'}{"\n"}
        ✅ 저축과 계획 세우기의 중요성을 배울 수 있으며 자신의 목표 달성 능력을 향상시킬 수 있습니다. {'\n'}
      </Text>

      <TouchableOpacity style={styles.button}
         onPress={sendPoint}>
          <Text style={styles.buttonText}>🍀 챌린지 참여하기 🍀</Text>
      </TouchableOpacity> 

      <Text style={styles.text3}>
        이 챌린지에 참여하여 부모님에게 우리의 사랑과 감사를 전하고, 근사한 선물이나 경험을 선사해 보세요!
      </Text>
      </View>
    </ScrollView>
  );
};

export default Challenge1_3;

