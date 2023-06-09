import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styles from '../styles/index.style'
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

export default CardView;