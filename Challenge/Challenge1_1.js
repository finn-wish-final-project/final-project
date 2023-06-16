import React, {useEffect, useState} from 'react';
import {View, Text, Image , ScrollView, TouchableOpacity, Linking, Alert} from 'react-native';
import styles from '../styles/Challenge1_1.style'
import { Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IP } from '../App';

const url = 'https://m.busanbank.co.kr/ib20/mnu/MWPFPM3000FPM10?FPCD=0010100132&ACSYS_FPCD=0&FP_HLV_DVCD=00101&FP_LRG_CLACD=001010102&TRG_BTE_DPO_EGM_NTRT=5.75&FP_NM=2030%EB%B6%80%EC%82%B0%EC%9B%94%EB%93%9C%EC%97%91%EC%8A%A4%ED%8F%AC%EC%A0%81%EA%B8%88&FP_OTL_CNTN=2030%EB%85%84+%EC%9B%94%EB%93%9C%EC%97%91%EC%8A%A4%ED%8F%AC%EC%9D%98+%EB%B6%80%EC%82%B0+%EC%9C%A0%EC%B9%98%EB%A5%BC+%EA%B8%B0%EC%9B%90%ED%95%98%EB%8A%94+%EC%83%81%ED%92%88&DPID=&TPCD=&IS_FPM=&SELL_STP_YN=&TIT_NM=&FP_MD_CLACD=000000000&MENU_ID=&ib20_wc=MWPFPM200000V10M%3AMWPFPM310000V00M&app_uuid=&preMenuId=MWPFPM2100FPM20&ib20.persistent.lang.code=ko&';
const id = 1;
const point = 500;

const Challenge1_1 = () => {
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
                  Linking.openURL('https://m.busanbank.co.kr/ib20/mnu/MWPFPM3000FPM10?FPCD=0010100132&ACSYS_FPCD=0&FP_HLV_DVCD=00101&FP_LRG_CLACD=001010102&TRG_BTE_DPO_EGM_NTRT=5.75&FP_NM=2030%EB%B6%80%EC%82%B0%EC%9B%94%EB%93%9C%EC%97%91%EC%8A%A4%ED%8F%AC%EC%A0%81%EA%B8%88&FP_OTL_CNTN=2030%EB%85%84+%EC%9B%94%EB%93%9C%EC%97%91%EC%8A%A4%ED%8F%AC%EC%9D%98+%EB%B6%80%EC%82%B0+%EC%9C%A0%EC%B9%98%EB%A5%BC+%EA%B8%B0%EC%9B%90%ED%95%98%EB%8A%94+%EC%83%81%ED%92%88&DPID=&TPCD=&IS_FPM=&SELL_STP_YN=&TIT_NM=&FP_MD_CLACD=000000000&MENU_ID=&ib20_wc=MWPFPM200000V10M%3AMWPFPM310000V00M&app_uuid=&preMenuId=MWPFPM2100FPM20&ib20.persistent.lang.code=ko&');
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
      <Text style = {styles.title}> 대학 등록금 마련을 위한 적금 챌린지{"\n"}✨꿈을 위한 첫 걸음✨</Text>
  
        <View>
          <Text style = {styles.small_title}>🍀 Introduction:</Text>
          <Text style = {styles.text}>
            이 챌린지는 대학 등록금을 미리 준비하여 꿈을 실현하기 위한 첫 걸음을 내딛는 데 도움을 주는 특별한 챌린지입니다.{"\n"}{"\n"}여러분들이 중고등학생 때부터 매달 조금씩 적금을 넣기 시작하면, 앞으로의 대학 등록금을 마련하는 데 도움이 될 것입니다.{"\n"}{"\n"}이 챌린지에 참여하여 여러분의 꿈을 향한 여정을 시작해보세요. {"\n"}
          </Text>
        </View>
        <Image source = {require('../static/img/challenge1_1_1.jpg')}
          style = {styles.img}/>
        <Divider style={{ borderWidth: 0.5,borderColor:'lightgray' }} width={'100%'}/>

        <Text style = {styles.small_title}>🍀 Challenge Details: </Text>
        <Text style = {styles.text2}>
        <Text style = {styles.text_bold}>1️⃣ 목표 설정:{"\n"}</Text>목표는 매달 정해진 금액을 적금으로 저축하여 대학 등록금을 마련하는 것입니다. 각자의 목표 금액과 저축 기간을 설정해보세요. {"\n"}{"\n"}
        <Text style = {styles.text_bold}>2️⃣ 적금 개설:{"\n"}</Text>하단의 챌린지 참여하기 버튼을 통해 적금 계좌를 개설하고, 매달 정해진 금액을 저축하세요. {"\n"}{"\n"}
        <Text style = {styles.text_bold}>3️⃣ 정기 점검:{"\n"}</Text>매달 저축한 금액을 확인하고, 목표에 도달하기 위해 얼마나 더 노력해야 하는지 정기적으로 점검해보세요. {"\n"}{"\n"}
        <Text style = {styles.text_bold}>4️⃣ FINN WISH:{"\n"}</Text>적금 챌린지를 통해 보다 편안한 대학 생활에 한 걸음 더 다가가세요! {"\n"}{"\n"}
        </Text>

        <Text style = {styles.small_title}>🍀Why Join? </Text>
        <Text style = {styles.text2}>
          ✅ 저축 역량: 적금 챌린지를 통해 자신의 돈을 효과적으로 저축하는 방법을 배울 수 있습니다. {"\n"}{"\n"}
          ✅ 자금 조달: 또래들과 함께 챌린지를 진행하며 추후 경제적인 안정을 확보하고 미래를 준비할 수 있습니다.
        </Text>

        <TouchableOpacity style={styles.button}
         onPress={sendPoint}>
          <Text style={styles.buttonText}>🍀 챌린지 참여하기 🍀</Text>
        </TouchableOpacity> 


        <Text style = {styles.text3}>
        미래를 준비하는 여정에 참여하여 여러분의 꿈을 이루는 첫 걸음을 내딛어보세요.{"\n"}챌린지에 참여하여 여러분의 꿈을 이루는 여정에 함께할 준비가 되셨나요?
        </Text>
        </View>
    </ScrollView>
    
  )
}



export default Challenge1_1;