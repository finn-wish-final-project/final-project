import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/Challenge.style'

const Challenge3 = () => {
  const navigation = useNavigation();
  return(
    <>
    <TouchableOpacity style={{height:40,backgroundColor:'white',marginHorizontal:'5%',marginVertical:15,borderWidth:2,borderColor:'darkgreen',borderRadius:20,justifyContent:'center'}} 
    onPress={() => navigation.navigate('BoardScreen_Education')}>
     <View >
       <Text style={{textAlign:'center',fontWeight:'bold',color:'black',fontSize:20}} > 교육 게시판 바로가기</Text>
     
     </View>
    
   </TouchableOpacity>
    <ScrollView>
      <TouchableOpacity style={styles.ChallengeCardContainer} 
       onPress={() => navigation.navigate('Challenge3_1')}>
        <View style = {styles.ChallengeContainer1}>
          <Text style={styles.CardTitle}> 금융교육 유튜브 시청하기 </Text>
          <Text style = {styles.Point}> 1000🍀</Text>
        </View>
        <View style = {styles.ChallengeContainer2}>
            <Image style = {styles.ChallengeImg} source = {require('../static/img/challenge3_1.jpg')} />
              <View style = {styles.ChallengeTxt}>
                <Text style={styles.CardContent}> 19명 참여중</Text>
                <Text style={styles.CardContent}>금융감독원에서 제공하는 유튜브 영상을 시청하자</Text>
              </View>
        </View>
      </TouchableOpacity> 

    </ScrollView>
    </>
    )
}

export default Challenge3;