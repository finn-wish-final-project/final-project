import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/Challenge.style'

const Challenge2 = () => {
  const navigation = useNavigation();
  return(
    <ScrollView>
      <TouchableOpacity style={styles.ChallengeCardContainer} 
       onPress={() => navigation.navigate('Challenge2_1')}>
        <View style = {styles.ChallengeContainer1}>
          <Text style={styles.CardTitle}> 모의 투자 참가하기 </Text>
          <Text style = {styles.Point}> 300🍀</Text>
        </View>
        <View style = {styles.ChallengeContainer2}>
            <Image style = {styles.ChallengeImg} source = {require('../static/img/challenge2.jpg')} />
              <View style = {styles.ChallengeTxt}>
                <Text style={styles.CardContent}> 74명 참여중 </Text>
                <Text style={styles.CardContent}>5,000만 원을 내 마음대로 굴릴 수 있다고? {"\n"}모의투자로 주식 시장을 직접 경험해보자</Text>
              </View>
        </View>
      </TouchableOpacity>
    </ScrollView>

    )
}

export default Challenge2;