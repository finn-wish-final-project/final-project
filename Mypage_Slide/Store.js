import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, ScrollView ,Image} from 'react-native';
import { Dialog, Portal,  Provider,  Divider,Paragraph } from 'react-native-paper';
import styles from '../styles/Store.style'


function Store(){
    return(
        <>
            <ScrollView>
            
                <View style={styles.CardContainer}>
                <View style = {styles.ChallengeContainer1}>
                    <Image style = {styles.StoreImg} source = {require('../static/img/bbackdabang.png')} />
                    
                    <View>
                        <Text style={styles.StoreName}>빽다방</Text>
                        <Text style={styles.StoreItem}>아이스크림 카페라떼</Text>
                        <Text style={styles.StorePrice}>3700🍀 </Text>
                    </View>
                    
                </View>
                </View>
                <Divider style={{ borderWidth: 0.5,borderColor:'grey' }} width={'100%'}/>

                <View style={styles.CardContainer}>
                <View style = {styles.ChallengeContainer1}>
                    <Image style = {styles.StoreImg} source = {require('../static/img/ediya.jpg')} />
                    
                    <View>
                        <Text style={styles.StoreName}>이디야커피</Text>
                        <Text style={styles.StoreItem}>아메리카노 ICED 커피</Text>
                        <Text style={styles.StorePrice}>3200🍀 </Text>
                    </View>
                    
                </View>
                </View>
                <Divider style={{ borderWidth: 0.5,borderColor:'grey' }} width={'100%'}/>

                <View style={styles.CardContainer}>
                <View style = {styles.ChallengeContainer1}>
                    <Image style = {styles.StoreImg2} source = {require('../static/img/gs1000.png')} />
                    
                    <View>
                        <Text style={styles.StoreName}>GS</Text>
                        <Text style={styles.StoreItem}>gs 1000원권</Text>
                        <Text style={styles.StorePrice}>1000🍀 </Text>
                    </View>
                    
                </View>
                </View>
                <Divider style={{ borderWidth: 0.5,borderColor:'grey' }} width={'100%'}/>

                <View style={styles.CardContainer}>
                <View style = {styles.ChallengeContainer1}>
                    <Image style = {styles.StoreImg2} source = {require('../static/img/gs3000.png')} />
                    
                    <View>
                        <Text style={styles.StoreName}>GS</Text>
                        <Text style={styles.StoreItem}>gs 3000원권</Text>
                        <Text style={styles.StorePrice}>1000🍀 </Text>
                    </View>
                    
                </View>
                </View>
                <Divider style={{ borderWidth: 0.5,borderColor:'grey' }} width={'100%'}/>

                <View style={styles.CardContainer}>
                <View style = {styles.ChallengeContainer1}>
                    <Image style = {styles.StoreImg} source = {require('../static/img/hasamdong.jpg')} />
                    
                    <View>
                        <Text style={styles.StoreName}>하삼동</Text>
                        <Text style={styles.StoreItem}>아메리카노 커피</Text>
                        <Text style={styles.StorePrice}>1500🍀 </Text>
                    </View>
                    
                </View>
                </View>
                <Divider style={{ borderWidth: 0.5,borderColor:'grey' }} width={'100%'}/>
                <View style={styles.CardContainer}>
                <View style = {styles.ChallengeContainer1}>
                    <Image style = {styles.StoreImg} source = {require('../static/img/mega.jpg')} />
                    
                    <View>
                        <Text style={styles.StoreName}>MEGA coffee</Text>
                        <Text style={styles.StoreItem}>아메리카노 커피</Text>
                        <Text style={styles.StorePrice}>1500🍀 </Text>
                    </View>
                    
                </View>
                </View>
                <Divider style={{ borderWidth: 0.5,borderColor:'grey' }} width={'100%'}/>
                <View style={styles.CardContainer}>
                <View style = {styles.ChallengeContainer1}>
                    <Image style = {styles.StoreImg} source = {require('../static/img/theVenti.jpg')} />
                    
                    <View>
                        <Text style={styles.StoreName}>the Venti</Text>
                        <Text style={styles.StoreItem}>아메리카노 커피</Text>
                        <Text style={styles.StorePrice}>1500🍀 </Text>
                    </View>
                    
                </View>
                </View>
                <Divider style={{ borderWidth: 0.5,borderColor:'grey' }} width={'100%'}/>
        
            </ScrollView>
        </>
    );
}

export default Store;