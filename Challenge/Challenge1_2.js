import React, {useEffect, useState} from 'react';
import {View, Text, Image , ScrollView, TouchableOpacity, Linking, Alert} from 'react-native';
import styles from '../styles/Challenge1_1.style'
import { Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IP } from '../App';

const url = 'https://m.busanbank.co.kr/ib20/mnu/MWPFPM3000FPM10?FPCD=0010100132&ACSYS_FPCD=0&FP_HLV_DVCD=00101&FP_LRG_CLACD=001010102&TRG_BTE_DPO_EGM_NTRT=5.75&FP_NM=2030%EB%B6%80%EC%82%B0%EC%9B%94%EB%93%9C%EC%97%91%EC%8A%A4%ED%8F%AC%EC%A0%81%EA%B8%88&FP_OTL_CNTN=2030%EB%85%84+%EC%9B%94%EB%93%9C%EC%97%91%EC%8A%A4%ED%8F%AC%EC%9D%98+%EB%B6%80%EC%82%B0+%EC%9C%A0%EC%B9%98%EB%A5%BC+%EA%B8%B0%EC%9B%90%ED%95%98%EB%8A%94+%EC%83%81%ED%92%88&DPID=&TPCD=&IS_FPM=&SELL_STP_YN=&TIT_NM=&FP_MD_CLACD=000000000&MENU_ID=&ib20_wc=MWPFPM200000V10M%3AMWPFPM310000V00M&app_uuid=&preMenuId=MWPFPM2100FPM20&ib20.persistent.lang.code=ko&';
const id = 2;
const point = 500;

const Challenge1_2 = () => {
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
      <Text style = {styles.title}> 해외여행을 위한 적금 챌린지{"\n"}✨꿈을 향한 첫 걸음✨</Text>
  
        <View>
          <Text style = {styles.small_title}>🍀 Introduction:</Text>
          <Text style = {styles.text}>
          해외여행은 더 넓은 세상을 바라 볼 수 있게 해주는 좋은 경험입니다. {"\n"}{"\n"}
          중고등학생 시절부터 매달 조금씩 적금을 시작한다면, 여행을 위한 경비를 마련하는데 큰 도움이 될 것입니다.{"\n"}{"\n"}
          이 챌린지 페이지는 여러분이 꿈을 향한 첫 걸음을 내딛을 수 있는 특별한 기회입니다. {"\n"}함께 해외여행을 위한 적금 챌린지에 참여하여 여러분의 꿈을 이루는 여정을 시작해보세요.{"\n"}
          </Text>
        </View>
        <Image source = {require('../static/img/challenge1_2_1.jpg')}
          style = {styles.img}/>
        <Divider style={{ borderWidth: 0.5,borderColor:'lightgray' }} width={'100%'}/>

        <Text style = {styles.small_title}>🍀 Challenge Details: </Text>
        <Text style = {styles.text2}>
        <Text style = {styles.text_bold}>1️⃣ 목표 설정:{"\n"}</Text> 매달 정해진 금액을 적금으로 저축하여 해외여행을 위한 경비를 마련합니다. 여행 일정과 필요한 금액을 고려하여 목표 금액과 저축 기간을 설정해보세요.{"\n"}{"\n"}
        <Text style = {styles.text_bold}>2️⃣ 적금 계획:{"\n"}</Text> 적금 계좌를 개설하고, 매달 정해진 금액을 저축하도록 계획을 세워보세요. {"\n"}{"\n"}
        <Text style = {styles.text_bold}>3️⃣ 정기 점검:{"\n"}</Text> 매달 저축한 금액을 확인하고, 목표에 도달하기 위해 얼마나 더 노력해야 하는지 정기적으로 점검해보세요. {"\n"}{"\n"}
        <Text style = {styles.text_bold}>4️⃣ FINN WISH:{"\n"}</Text> 행복한 해외여행을 통해 챌린지를 성공적으로 완수해보세요! {"\n"}{"\n"}
        </Text>

        <Text style = {styles.small_title}>🍀Why Join? </Text>
        <Text style = {styles.text2}>
          ✅ 금융 교양: 적금 챌린지를 통해 여행을 위한 자금을 효과적으로 관리하는 방법을 배울 수 있습니다. 금융 교양은 여행을 비롯한 삶의 다양한 영역에서 도움이 될 것입니다. {"\n"}{"\n"}
          ✅ 자금 조달 도움: 적금 챌린지를 통해 매달 조금씩 저축하여 해외여행이란 더 넓은 식견을 가지기 위한 자금을 조달할 수 있습니다.
        </Text>


        <TouchableOpacity style={styles.button}
         onPress={sendPoint}>
          <Text style={styles.buttonText}>🍀 챌린지 참여하기 🍀</Text>
        </TouchableOpacity> 

        <Text style = {styles.text3}>
        해외여행을 위한 적금 챌린지에 참여하여 꿈을 향한 첫 걸음을 내딛어보세요. 중고등학생 시절부터 매달 조금씩 저축하여 여행을 위한 경비를 마련하며, 새로운 경험과 추억을 만들어보세요. 챌린지에 참여하여 여러분의 꿈을 이루는 여정에 함께할 준비가 되셨나요?
        </Text>
        </View>
    </ScrollView>
  )
}



export default Challenge1_2;