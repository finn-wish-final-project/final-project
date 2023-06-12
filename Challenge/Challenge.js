import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/Challenge.style'

const Challenge = () => {
  const navigation = useNavigation();

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
                <Text style={styles.CardContent}>등록금 ,,,, 아까우니까 ,,, 장학금 타라 ,,,? 열심히 살어 ,, </Text>
              </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ChallengeCardContainer} 
       onPress={() => navigation.navigate('Challenge1_1')}>
        <View style = {styles.ChallengeContainer1}>
          <Text style={styles.CardTitle}> 해외여행 경비 마련 챌린지 </Text>
          <Text style = {styles.Point}> 1000🍀</Text>
        </View>
        <View style = {styles.ChallengeContainer2}>
            <Image style = {styles.ChallengeImg} source = {require('../static/img/challenge1_1.jpg')} />
              <View style = {styles.ChallengeTxt}>
                <Text style={styles.CardContent}> 52명 참여중</Text>
                <Text style={styles.CardContent}>일본, 대만 등 가까운 해외부터 유럽, 미국까지 ! {"\n"}짜릿한 여행을 위한 경비를 마련해보자</Text>
              </View>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.ChallengeCardContainer} 
       onPress={() => navigation.navigate('Challenge1_1')}>
        <View style = {styles.ChallengeContainer1}>
          <Text style={styles.CardTitle}> 효도 챌린지 </Text>
          <Text style = {styles.Point}> 300🍀</Text>
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
       onPress={() => navigation.navigate('Challenge1_1')}>
        <View style = {styles.ChallengeContainer1}>
          <Text style={styles.CardTitle}> 주택청약 챌린지 </Text>
          <Text style = {styles.Point}> 300🍀</Text>
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