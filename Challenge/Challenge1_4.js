import React, {useEffect, useState} from 'react';
import {View, Text, Image , ScrollView, TouchableOpacity, Linking, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/Challenge1_1.style'
import { Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IP } from '../App';

const url = 'https://m.busanbank.co.kr/ib20/mnu/MWPFPM2500FPM10?FPCD=0010100117&ACSYS_FPCD=0&FP_HLV_DVCD=00101&FP_LRG_CLACD=001010104&TRG_BTE_DPO_EGM_NTRT=2.1&FP_NM=%EC%A3%BC%ED%83%9D%EC%B2%AD%EC%95%BD%EC%A2%85%ED%95%A9%EC%A0%80%EC%B6%95&FP_OTL_CNTN=%EB%AF%BC%EC%98%81%EC%A3%BC%ED%83%9D+%EB%B0%8F+%EA%B5%AD%EB%AF%BC%EC%A3%BC%ED%83%9D%3Cbr%3E%EB%AA%A8%EB%91%90+%EC%B2%AD%EC%95%BD+%EA%B0%80%EB%8A%A5%ED%95%9C+%EB%A7%8C%EB%8A%A5%EC%83%81%ED%92%88&DPID=&TPCD=&IS_FPM=&SELL_STP_YN=&TIT_NM=&FP_MD_CLACD=000000000&MENU_ID=&ib20_wc=MWPFPM200000V10M%3AMWPFPM310000V00M&app_uuid=&preMenuId=MWPFPM2500FPM10&ib20.persistent.lang.code=ko&'
const id = 4;
const point = 100;

const Challenge1_4 = () => {
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
      <Text style = {styles.title}> 주택청약 챌린지{"\n"}🏠내 집 마련하자🏠</Text>
  
        <View>
          <Text style = {styles.small_title}>🍀 Introduction:</Text>
          <Text style = {styles.text}>
          청소년 시기부터 주택을 마련하는 꿈을 품고 계신가요? 이 챌린지는 주택청약을 통해 청소년 여러분의 꿈을 이루는 데 도움을 주기 위해 만들어졌습니다. {"\n"}{"\n"}
          주택청약은 경제적인 안정과 미래를 위한 투자로 많은 사람들이 선택하는 방법 중 하나입니다. 이 챌린지를 통해 여러분은 주택청약에 대해 알아보고 준비하는 과정을 시작할 수 있습니다.{"\n"}          </Text>
        </View>
        <Image source = {require('../static/img/challenge1_4_1.jpg')}
          style = {styles.img}/>
        <Divider style={{ borderWidth: 0.5,borderColor:'lightgray' }} width={'100%'}/>

        <Text style = {styles.small_title}>🍀 Challenge Details: </Text>
        <Text style = {styles.text2}>
        <Text style={styles.text_bold}>1️⃣ 목표 설정:{"\n"}</Text> 주택청약에 참여하기 위한 목표를 설정해보세요. 특정 기간 동안 정해진 금액을 저축하고 주택을 마련하는 것을 목표로 정할 수 있습니다. {"\n"}{"\n"}
        <Text style={styles.text_bold}>2️⃣ 주택 조건 확인:{"\n"}</Text> 지역별로 다른 청약 조건과 절차에 대해 자세히 알아보세요. 주택 종류, 면적, 가격 등을 확인하고 자신에게 맞는 조건을 찾아보세요. {"\n"}{"\n"}
        <Text style={styles.text_bold}>3️⃣ 자금 조달 방안:{"\n"}</Text> 주택을 마련하기 위해 필요한 자금 조달 방안을 계획해보세요. 금융기관과 상담하거나 다양한 저축 방법을 알아보세요. {"\n"}{"\n"}
        <Text style={styles.text_bold}>4️⃣ 정기 점검:{"\n"}</Text> 주택 청약을 위한 자금을 저축할 때마다 목표에 도달하기 위한 진행 상황을 정기적으로 점검해보세요. {"\n"}{"\n"}
        <Text style={styles.text_bold}>5️⃣ FINN WISH:{"\n"}</Text> 주택을 마련하는 것은 큰 도전이지만, 자신의 공간을 가지고 안정적인 생활을 할 수 있는 보람을 느낄 수 있을 것입니다.{"\n"} 
        </Text>

        <Text style = {styles.small_title}>🍀Why Join? </Text>
        <Text style = {styles.text2}>
          ✅ 주택 마련 교양: 주택청약 챌린지를 통해 주택 마련에 대한 지식과 경험을 쌓을 수 있습니다. 주택 구매를 위한 조건, 절차, 자금 조달 방법 등에 대해 배우고 준비하세요. {"\n"}{"\n"}
          ✅ 경제적인 안정: 주택은 경제적인 안정을 위한 큰 자산입니다. 주택청약을 통해 주택 마련에 대한 자금을 조달하고 미래에 안정적인 삶을 꾸릴 수 있습니다.{"\n"}
        </Text>


        <TouchableOpacity style={styles.button}
         onPress={sendPoint}>
          <Text style={styles.buttonText}>🍀 챌린지 참여하기 🍀</Text>
        </TouchableOpacity> 



        <Text style = {styles.text3}>
          주택 청약은 빠르게 시작할수록 당첨 가능성이 더욱 커집니다. 주택청약 챌린지에 참여하여 내 집 마련의 꿈을 향한 여정을 시작해보세요.
        </Text>
        </View>
    </ScrollView>
    
  )
}



export default Challenge1_4;