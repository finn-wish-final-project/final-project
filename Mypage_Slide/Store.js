import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, ScrollView ,Image} from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dialog, Portal,  Provider,  Divider,Paragraph } from 'react-native-paper';
import styles from '../styles/Store.style'


function Store(){
    return(
        <>
            <ScrollView>
            
                <View style={styles.CardContainer}>
                <View style = {styles.ChallengeContainer1}>
                    <Image style = {styles.StoreImg} source = {require('../static/img/bbackdabang.png')} />
                    
                    <View style={styles.ChallengeContainer2}>
                        <Text style={styles.StoreName}>빽다방</Text>
                        <Text style={styles.StoreItem}>아이스크림 카페라떼</Text>
                        <Text style={styles.StorePrice}>3700 원 </Text>
                    </View>
                    
                </View>
                </View>
                <Divider style={{ borderWidth: 0.5,borderColor:'grey' }} width={'100%'}/>

                <View style={styles.CardContainer}>
                <View style = {styles.ChallengeContainer1}>
                    <Image style = {styles.StoreImg} source = {require('../static/img/ediya.jpg')} />
                    
                    <View style={styles.ChallengeContainer2}>
                        <Text style={styles.StoreName}>이디야커피</Text>
                        <Text style={styles.StoreItem}>아메리카노 ICED 커피</Text>
                        <Text style={styles.StorePrice}>3200 원 </Text>
                    </View>
                    
                </View>
                </View>
                <Divider style={{ borderWidth: 0.5,borderColor:'grey' }} width={'100%'}/>

                <View style={styles.CardContainer}>
                <View style = {styles.ChallengeContainer1}>
                    <Image style = {styles.StoreImg2} source = {require('../static/img/gs1000.png')} />
                    
                    <View style={styles.ChallengeContainer2}>
                        <Text style={styles.StoreName}>GS</Text>
                        <Text style={styles.StoreItem}>gs 1000원권</Text>
                        <Text style={styles.StorePrice}>1000 원 </Text>
                    </View>
                    
                </View>
                </View>
                <Divider style={{ borderWidth: 0.5,borderColor:'grey' }} width={'100%'}/>

                <View style={styles.CardContainer}>
                <View style = {styles.ChallengeContainer1}>
                    <Image style = {styles.StoreImg} source = {require('../static/img/hasamdong.jpg')} />
                    
                    <View style={styles.ChallengeContainer2}>
                        <Text style={styles.StoreName}>하삼동</Text>
                        <Text style={styles.StoreItem}>아메리카노 커피</Text>
                        <Text style={styles.StorePrice}>1500원 </Text>
                    </View>
                    
                </View>
                </View>
                <Divider style={{ borderWidth: 0.5,borderColor:'grey' }} width={'100%'}/>
                <View style={styles.CardContainer}>
                <View style = {styles.ChallengeContainer1}>
                    <Image style = {styles.StoreImg} source = {require('../static/img/mega.jpg')} />
                    
                    <View style={styles.ChallengeContainer2}>
                        <Text style={styles.StoreName}>MEGA coffee</Text>
                        <Text style={styles.StoreItem}>아메리카노 커피</Text>
                        <Text style={styles.StorePrice}>1500원 </Text>
                    </View>
                    
                </View>
                </View>
                <Divider style={{ borderWidth: 0.5,borderColor:'grey' }} width={'100%'}/>
                <View style={styles.CardContainer}>
                <View style = {styles.ChallengeContainer1}>
                    <Image style = {styles.StoreImg} source = {require('../static/img/theVenti.jpg')} />
                    
                    <View style={styles.ChallengeContainer2}>
                        <Text style={styles.StoreName}>the Venti</Text>
                        <Text style={styles.StoreItem}>아메리카노 커피</Text>
                        <Text style={styles.StorePrice}>1500원 </Text>
                    </View>
                    
                </View>
                </View>
                <Divider style={{ borderWidth: 0.5,borderColor:'grey' }} width={'100%'}/>
        
            </ScrollView>
        </>
    );
}

export default Store;