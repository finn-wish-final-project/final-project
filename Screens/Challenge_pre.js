// import React, {useRef, useState} from 'react';
// import { Button, DrawerLayoutAndroid,Drawer, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Tab = createBottomTabNavigator();

// function Challenge({navigation}){
//   return(
//       <>
//           <View>
//               <Text>I'm Challenge</Text>

//           </View>
//       </>
//   );
// }
// export default Challenge;



import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styles from '../styles/index.style'

const Challenge = () => {
  

  return(
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.CardContainer}>
          <Text style={styles.CardTitle}> 챌린지 만들거임 </Text>
          <Text style={styles.CardContent}> 대충 내용 </Text>
        </View>
    </ScrollView>

    )
}

export default Challenge;