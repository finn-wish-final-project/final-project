import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from '../styles/Challenge.style'

const Challenge = () => {
  

  return(
    <ScrollView>
      <View style={styles.ChallengeCardContainer}>
        
        <View style = {styles.ChallengeContainer1}>
          <Text style={styles.CardTitle}> 💸 계좌 개설하기 </Text>
          <Text style = {styles.Point}> 100Point</Text>
        </View>

        <View style = {styles.ChallengeContainer2}>
            <Image style = {styles.ChallengeImg} source = {require('../static/img/challenge1.jpg')} />
              <View style = {styles.ChallengeTxt}>
                <Text style={styles.CardContent}> 52명 참여중</Text>
                <Text style={styles.CardContent}> 나만의 계좌를 개설하여 합리적인 소비를 해보자 ! </Text>
              </View>
        </View>
      </View> 

      <View style={styles.ChallengeCardContainer}>
        <Text style={styles.CardTitle}> ⚔ 모의 투자 참가하기 </Text>
        <View style = {styles.ChallengeContainer2}>
            <Image style = {styles.ChallengeImg} source = {require('../static/img/challenge2.jpg')} />
              <View style = {styles.ChallengeTxt}>
                <Text style={styles.CardContent}> 74명 참여중 </Text>
                <Text style={styles.CardContent}> 나만의 계좌를 개설하여 합리적인 소비를 해보자 ! </Text>
              </View>
        </View>
      </View>

      <View style={styles.ChallengeCardContainer}>
        <Text style={styles.CardTitle}> 💵 환전하기 ..? ㅜㅜ </Text>
        <View style = {styles.ChallengeContainer2}>
            <Image style = {styles.ChallengeImg} source = {require('../static/img/challenge3.jpg')} />
              <View style = {styles.ChallengeTxt}>
                <Text style={styles.CardContent}> 21명 참여중 </Text>
                <Text style={styles.CardContent}> 환전 미리 해보쇼 </Text>
              </View>
        </View>
      </View>

      <View style={styles.ChallengeCardContainer}>
        <Text style={styles.CardTitle}> ⚔ 모의 투자 참가하기 </Text>
        <View style = {styles.ChallengeContainer2}>
            <Image style = {styles.ChallengeImg} source = {require('../static/img/challenge3.jpg')} />
              <View style = {styles.ChallengeTxt}>
                <Text style={styles.CardContent}> 74명 참여중 </Text>
                <Text style={styles.CardContent}> 나만의 계좌를 개설하여 합리적인 소비를 해보자 ! </Text>
              </View>
        </View>
      </View>
    </ScrollView>

    )
}

export default Challenge;