import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, SafeAreaView, StatusBar, AsyncStorage } from 'react-native';
import Carousel  from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import SliderEntry from '../components/SliderEntry';
import styles from '../styles/index.style'
import { ENTRIES1 } from '../static/entries';
import HomeNews from './HomeNews';
import { Dialog, Portal,  Provider,  Divider,Paragraph } from 'react-native-paper';

import { IP } from '../App';

const Card_Study = () => {
  const [data1,setData] = useState([]);

    const _renderItem = ({item, index}) => {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }; 

    useEffect(() => {
      sendData();
    }, []);
    

    // AsyncStorage.getItem('access_token',(err,result)=>{
    //   setAcessToken(result)
    //   console.log('!!!!!!!!!!!!!!!!!',access_token);
    // });
    
    if(AsyncStorage.getItem('access_token')){
      console.log('토큰 존재함');
    }else{
      console.log('토큰 없음');
    }

    //  AsyncStorage.setItem('access_token',
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4NjI5MjUyOSwianRpIjoiOTQ1NTY5ZmUtOGY0OC00MWUzLThhNTgtODI0MTg2NTI3YzIwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjg2MjkyNTI5fQ.797Z_n9G_20rv2_mQ5dUyJ5kZFuWrKA4gvfuUNhICQ8", 
    // () => {
    //   console.log('유저 닉네임 저장 완료')
    // });

    const sendData = async () => {
      try {
        const access_token = await AsyncStorage.getItem('access_token');
        const data = {access_token : 'access_token'};
    
        fetch(`http://${IP}:5000/home/word`, {
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
            setData(result);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      } catch (error) {
        console.error('Error:', error);
      }
    };
    

  const layoutExample = (data) => {
      
      const items = data.slice().reverse(); 
      return ( 
          <View style={[styles.exampleContainer, styles.exampleContainerLight]}> 
              <Text style={[styles.title, styles.titleDark]}>{`오늘의 끝장단어`}</Text>
              <Carousel
                data={items}
                renderItem={_renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                layout={'stack'} 
                loop={false} 
                
                // 카드 쌓는 순서 변경
                firstItem={items.length - 1} 
                containerCustomStyle2={{
                  transform: [{ scaleX: -1 }] 
                }}
              />
          </View>
      );
  }

  return (
      <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>

              {/* 상단바 */}
              <StatusBar
                translucent={true}
                backgroundColor={'#ffffff'}
                barStyle={'dark-content'}
              />

              <View style={styles.scrollview}>
                { layoutExample(data1) }
              </View>

              <Provider>
                <HomeNews/>
              </Provider>

          </View>
      </SafeAreaView>
  );
    
}

export default Card_Study;

















