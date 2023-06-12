import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, Pressable,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation,NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '/Users/PC3/finnwish/finnwish/styles/Quiz.style'



const Submit=()=>{
    const navigation = useNavigation();
    return(
        <>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={{backgroundColor:'white',width:'80%',marginVertical:'50%',marginHorizontal:'10%'}}>
            <Text style={{fontSize:30}}> FINN WISH에 3걸음 더 🍀</Text>
            
            <TouchableOpacity 
            style={{backgroundColor:'#CBE6D7',marginTop:50,height:70,justifyContent:'center',alignItems:'center',borderRadius:20,width: '80%',marginHorizontal:'10%' }}
            onPress={() => navigation.navigate('Quiz')}>
                <Text style={{color:'black',fontSize:25,overflow:'visible'}}>문제 다시 풀기</Text>
            </TouchableOpacity>
        </View>
        </View>
        </>
    )
}

export default Submit;

