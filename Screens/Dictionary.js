import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, AsyncStorage, StatusBar } from 'react-native';
import styles from '../styles/Dictionary.style'
import { IP } from '../App';

const CardView = () => {  
  const [data1,setData] = useState([]);

  useEffect(() => {
      sendData();
    }, []);

   const sendData = async () => {
      try {
        const access_token = await AsyncStorage.getItem('access_token');
        const data = {access_token:'access_token'};
    
        fetch(`http://${ IP }:5000/dict`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{csrf_token}}',
            'Authorization': `Bearer ${access_token}`
          },
          body: JSON.stringify(data)
        })
          .then((response) => response.json())
          .then((result) => {
            // console.log('1111', result);
            if (result['msg']){
              alert(result['msg']);
            }
            else{setData(result);}

            
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      } catch (error) {
        console.error('Error:', error);
      }
    };

  

  return(
    <>
    <StatusBar
                translucent={true}
                backgroundColor={'#ffffff'}
                barStyle={'dark-content'}
              />
    <ScrollView contentContainerStyle ={styles.Container}>
      {data1.map((entry, index) => (
        <View style={styles.CardContainer} key={index}>
          <Text style={styles.CardTitle}>{entry.title}</Text>
          <Text style={styles.CardContent}>{entry.subtitle}</Text>
        </View>
      ))}
    </ScrollView>
    </>
    )
}

export default CardView;