import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, Pressable,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation,NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles/Quiz.style'



const Submit=()=>{
    const navigation = useNavigation();
    return(
        <>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={{backgroundColor:'white',width:'80%',marginVertical:'50%',marginHorizontal:'10%'}}>
            <Text style={{fontSize:30}}> FINN WISH에 3걸음 더 🍀</Text>
        </View>
        </View>
        </>
    )
}

export default Submit;

