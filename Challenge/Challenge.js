import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/Challenge.style'

const Challenge = () => {
  const navigation = useNavigation();
  // const [number, setnumber] = React.useState('');
  // const [title, settitle] = React.useState('');
  
  // useEffect(() => {
  //   sendData();
  // }, []);

  // const handleChallenge = () => {
  //   sendData(number, title); 
  // }
  // const sendData = async (number,title) => {
  //   const data={number:number, title:title};
    
   
  //   fetch('http://192.168.0.146:5000/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-CSRFToken': '{{csrf_token}}',
  //       'Authorization': `Bearer ${access_token}`
  //     },
  //     body: JSON.stringify(data)
  //     })
  //       .then((response) => response.json())
  //       .then((result) => {
  //         console.log('1111', result);
          
  //         if (result['access_token']){
  //           AsyncStorage.setItem('access_token',result['access_token']);
  //           setHasToken('access_token');
  //           alert(result['msg']);
  //         }
  //         else if ( !result['access_token'] && result['msg'] ){
  //           alert(result['msg']);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('Error:', error);
  //       });

  //     };



  return(
    <ScrollView>
      <TouchableOpacity style={styles.ChallengeCardContainer} 
       onPress={() => navigation.navigate('Challenge1_1')}>
        <View style = {styles.ChallengeContainer1}>
          <Text style={styles.CardTitle} > 꿈을 위한 첫 걸음</Text>
          <Text style = {styles.Point}> 500🍀</Text>
        </View>
        <View style = {styles.ChallengeContainer2}>
            <Image style = {styles.ChallengeImg} source = {require('../static/img/challenge1_3.jpg')} />
              <View style = {styles.ChallengeTxt}>
                <Text style={styles.CardContent}> 21명 참여중 </Text>
                <Text style={styles.CardContent}>대학 등록금, 조금씩 미리 준비해서 대학 생활 부담 덜어보자!</Text>
              </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ChallengeCardContainer} 
       onPress={() => navigation.navigate('Challenge1_2')}>
        <View style = {styles.ChallengeContainer1}>
          <Text style={styles.CardTitle}> 우물 안 개구리 벗어나기 </Text>
          <Text style = {styles.Point}> 500🍀</Text>
        </View>
        <View style = {styles.ChallengeContainer2}>
            <Image style = {styles.ChallengeImg} source = {require('../static/img/challenge1_1.jpg')} />
              <View style = {styles.ChallengeTxt}>
                <Text style={styles.CardContent}> 52명 참여중</Text>
                <Text style={styles.CardContent}>일본, 대만 등 가까운 해외부터 유럽, 미국까지! {"\n"}짜릿한 여행을 위한 경비를 마련해보자</Text>
              </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.ChallengeCardContainer} 
       onPress={() => navigation.navigate('Challenge1_3')}>
        <View style = {styles.ChallengeContainer1}>
          <Text style={styles.CardTitle}> 효도 챌린지 </Text>
          <Text style = {styles.Point}> 500🍀</Text>
        </View>
        <View style = {styles.ChallengeContainer2}>
            <Image style = {styles.ChallengeImg} source = {require('../static/img/challenge1_2.jpg')} />
              <View style = {styles.ChallengeTxt}>
                <Text style={styles.CardContent}> 46명 참여중 </Text>
                <Text style={styles.CardContent}>어버이날, 생신 등 기념일만 다가오면 텅텅 빈 잔고,,, 미리 조금씩 모아 더욱 완벽한 날을 만들어 보자! </Text>
              </View>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={styles.ChallengeCardContainer} 
       onPress={() => navigation.navigate('Challenge1_4')}>
        <View style = {styles.ChallengeContainer1}>
          <Text style={styles.CardTitle}> 내 집 마련하자 </Text>
          <Text style = {styles.Point}> 100🍀</Text>
        </View>
        <View style = {styles.ChallengeContainer2}>
            <Image style = {styles.ChallengeImg} source = {require('../static/img/challenge1_4.jpg')} />
              <View style = {styles.ChallengeTxt}>
                <Text style={styles.CardContent}> 33명 참여중 </Text>
                <Text style={styles.CardContent}>내집마련 하고 싶지 않나요? {"\n"}주택청약 통장저축에 가입해보자 ! </Text>
              </View>
        </View>
      </TouchableOpacity>
    </ScrollView>

    )
}

export default Challenge;