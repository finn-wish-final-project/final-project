import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from '../styles/Challenge.style'

const Challenge3 = () => {
  
  return(
    <ScrollView>
      <View style={styles.ChallengeCardContainer}>
        <View style = {styles.ChallengeContainer1}>
          <Text style={styles.CardTitle}> 여기 세번째 챌린지 ! </Text>
          <Text style = {styles.Point}> 1000🍀</Text>
        </View>
        <View style = {styles.ChallengeContainer2}>
            <Image style = {styles.ChallengeImg} source = {require('../static/img/challenge1.jpg')} />
              <View style = {styles.ChallengeTxt}>
                <Text style={styles.CardContent}> 52명 참여중</Text>
                <Text style={styles.CardContent}> 나만의 계좌를 개설하여 합리적인 소비를 해보자 ! </Text>
              </View>
        </View>
      </View> 

    </ScrollView>

    )
}

export default Challenge3;