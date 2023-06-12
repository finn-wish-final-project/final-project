import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/Challenge.style'

const Challenge3 = () => {
  const navigation = useNavigation();
  return(
    <ScrollView>
      <TouchableOpacity style={styles.ChallengeCardContainer} 
       onPress={() => navigation.navigate('Challenge1_1')}>
        <View style = {styles.ChallengeContainer1}>
          <Text style={styles.CardTitle}> 마이데이터 연동 챌린지 </Text>
          <Text style = {styles.Point}> 1000🍀</Text>
        </View>
        <View style = {styles.ChallengeContainer2}>
            <Image style = {styles.ChallengeImg} source = {require('../static/img/challenge1.jpg')} />
              <View style = {styles.ChallengeTxt}>
                <Text style={styles.CardContent}> 19명 참여중</Text>
                <Text style={styles.CardContent}>마이데이터를 연동하여 내 전체 계좌를 합리적으로 관리해보자 !</Text>
              </View>
        </View>
      </TouchableOpacity> 

    </ScrollView>

    )
}

export default Challenge3;