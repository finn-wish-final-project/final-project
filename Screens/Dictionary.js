import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styles from '../styles/index.style'
// import {ENTRIES1} from '../static/entries';

const CardView = () => {
  const [data1,setData] = useState([]);

  useEffect(() => {
      sendData();
    }, []);

    const sendData=()=>{
      let data={userid:'1'};
        
      fetch('http://192.168.0.189:5000/dict',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'X-CSRFToken': '{{csrf_token}}'
        },
        body:JSON.stringify(data)
      }).then (
        (response)=>{
          return response.json();
      }).then(
        (result)=>{
          console.log('1111',result);
          setData(result);
        }
      ).catch(
        (error)=>{
          alert('Error:',error);
        }
      );
    };

  

  return(
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {data1.map((entry, index) => (
        <View style={styles.CardContainer} key={index}>
          <Text style={styles.CardTitle}>{entry.title}</Text>
          <Text style={styles.CardContent}>{entry.subtitle}</Text>
        </View>
      ))}
    </ScrollView>
    // <ScrollView>
    //     {Entires1.map((entry, index) => ( // key={index} : index를 사용하여 각 항목에 대한 유일한 키를 지정
    //       <View style={styles.CardContainer} key={index}> 
    //         <Text style={styles.CardTitle}>{entry.title}</Text>
    //         <Text style={styles.CardContent}>{entry.subtitle}</Text>
    //       </View>
    //     ))}
    // </ScrollView>
    )
}

export default CardView;