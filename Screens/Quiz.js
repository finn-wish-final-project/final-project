import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation,NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Quiz2 from './Quiz2';



const Stack = createStackNavigator();

const Quiz = () => {
    const navigation = useNavigation();

  return(
    <View style={{backgroundColor:'white'}} >
        <View style={{width:'80%',backgroundColor:'white',marginHorizontal:'10%',marginVertical:'50%'}}>
          <Text style={{fontSize:20}}> 단어 퀴즈 </Text>
          <Text style={{fontWeight:'bold',fontSize:22,marginVertical:15}}> 1. 집을 매입하기 위해 필요한 통장은? </Text>
          
          <Text style={{marginBottom:10,marginLeft:20,fontSize:17}}> (1) 청약 통장 </Text>
          <Text style={{marginBottom:10,marginLeft:20,fontSize:17}}> (2) 예금 통장 </Text>
          <Text style={{marginBottom:10,marginLeft:20,fontSize:17}}> (3) 파킹 통장 </Text>
          <Text style={{marginBottom:10,marginLeft:20,fontSize:17}}> (4) 대포 통장 </Text>
        </View>
        <Button style={{backgroundColor:'red'}} onPress={()=>navigation.navigate('Quiz2')}>
                <Text>다음</Text>
            </Button>
        <View>
            
        </View>
    </View>

    );
};






















const Quiz_Stack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={Quiz} options={{ headerShown: false }}  />
            <Stack.Screen name="Quiz2" component={Quiz2}  options={{ headerShown: false }} />
                {/* <Stack.Screen name="Quiz" component={Quiz} /> */}
        </Stack.Navigator>
   
    );
  };


export default Quiz_Stack;
