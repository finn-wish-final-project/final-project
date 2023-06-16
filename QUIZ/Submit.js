import React from 'react';
import {  Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const Submit=()=>{
    const navigation = useNavigation();
    return(
        <>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={{backgroundColor:'white',width:'80%',marginVertical:'75%',marginHorizontal:'10%'}}>
            <Text style={{fontSize:30, textAlign:'center'}}> FINN WISH에 3걸음 더 🍀</Text>
        </View>
        </View>
        </>
    )
}

export default Submit;
