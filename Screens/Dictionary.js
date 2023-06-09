// import React, {useRef, useState} from 'react';
// import { Text, View } from 'react-native';
// // import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// // const Tab = createBottomTabNavigator();
// function Dic(){
//     return(
//         <>
//             <View>
//                 <Text>I'm dictionary</Text>
//             </View>
//         </>
//     );
// }

// export default Dic;


import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {ENTRIES1} from '../static/entries';

const CardView = () => {
  return(
    <ScrollView>
        {ENTRIES1.map((entry, index) => ( // key={index} : index를 사용하여 각 항목에 대한 유일한 키를 지정
          <View style={styles.CardContainer} key={index}> 
            <Text style={styles.CardTitle}>{entry.title}</Text>
            <Text style={styles.CardContent}>{entry.subtitle}</Text>
          </View>
        ))}
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    CardContainer: {
        elevation: 5, // 그림자
        borderRadius: 10,
        // borderWidth: 0.5,
        // borderColor: '#d6d7da', 
        margin: 20,
        height : 130,
        backgroundColor : '#DBEDE3',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    CardTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 23,
        color : '#143C26',
        paddingHorizontal: 10,
        paddingBottom: 7
    },
    CardContent: {
        width: '100%',
        color : '#507557',
        fontSize: 18,
        paddingHorizontal : 10
    },
});

export default CardView;