import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/Challenge.style'

const Challenge4 = () => {
  const navigation = useNavigation();
  return(
    <ScrollView>
      <TouchableOpacity style={styles.ChallengeCardContainer} 
       onPress={() => navigation.navigate('Challenge1_1')}>
        <View style = {styles.ChallengeContainer1}>
          <Text style={styles.CardTitle}> I LOVE BNK </Text>
          <Text style = {styles.Point}> 1000🍀</Text>
        </View>
        <View style = {styles.ChallengeContainer2}>
            <Image style = {styles.ChallengeImg} source = {require('../static/img/challenge4_3.jpg')} />
              <View style = {styles.ChallengeTxt}>
                <Text style={styles.CardContent}>  DSBA </Text>
                <Text style={styles.CardContent}>  취뽀하자</Text>
              </View>
        </View>
      </TouchableOpacity> 

      {/* <TouchableOpacity style={styles.ChallengeCardContainer} 
       onPress={() => navigation.navigate('Challenge1_1')}>
        <View style = {styles.ChallengeContainer1}>
          <Text style={styles.CardTitle}> 지정맥 생체인증 등록하기</Text>
          <Text style = {styles.Point}> 1000🍀</Text>
        </View>
        <View style = {styles.ChallengeContainer2}>
            <Image style = {styles.ChallengeImg} source = {require('../static/img/challenge4_1.jpg')} />
              <View style = {styles.ChallengeTxt}>
                <Text style={styles.CardContent}> 72명 참여중</Text>
                <Text style={styles.CardContent}>출금계좌를 등록하여 카드나 통장 없이! 휴대폰 만으로 ATM에서 출금 가능하게 설정해보자 ! </Text>
              </View>
        </View>
      </TouchableOpacity>  */}

    </ScrollView>

    )
}

export default Challenge4;