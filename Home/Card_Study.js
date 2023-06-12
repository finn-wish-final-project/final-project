import React, { useState,useEffect } from 'react';
// import PropTypes from 'prop-types';
import { View, ScrollView, Text, SafeAreaView, StatusBar, Button,Pressable,StyleSheet,AsyncStorage } from 'react-native';
import Carousel  from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import SliderEntry from '../components/SliderEntry';
import styles from '../styles/index.style'
import { ENTRIES1 } from '../static/entries';
import HomeNews from './HomeNews';
// import MyComponent from '../Mypage_Slide/News_scrap';
import { Dialog, Portal,  Provider,  Divider,Paragraph } from 'react-native-paper';


// const SLIDER_1_FIRST_ITEM =1;


const Card_Study = () => {
     const [data1,setData] = useState([]);
    // const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(SLIDER_1_FIRST_ITEM);
  

    const _renderItem = ({item, index}) => {
         return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;  
     };

     useEffect(() => {
       sendData();
     }, []);
        // 원래 send data 코드
    //  const sendData=()=>{
    //    let data={userid:1};
    //     //IP 바꾸는거 잊지마!!!!!!!!!
    //    fetch('http://192.168.0.189:5000/home/word',{
    //      method:'POST',
    //      headers:{
    //        'Content-Type':'application/json',
    //        'X-CSRFToken': '{{csrf_token}}'
    //      },
    //      body:JSON.stringify(data)
    //    }).then (
    //      (response)=>{
    //        return response.json();
    //    }).then(
    //      (result)=>{
    //        console.log('1111',result);
    //        setData(result);
    //      }
    //    ).catch(
    //      (error)=>{
    //        alert('Error:',error);
    //      }
    //    );
    //  };
    if(AsyncStorage.getItem('access_token')){
      console.log('토큰 존재함');
    }else{
      console.log('토큰 없음');
    }

    const sendData = async () => {
      try {
        const access_token = await AsyncStorage.getItem('access_token');
        const data = {userid:1};
    
        fetch('http://192.168.0.146:5000/home/word', {
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
         const items = data.slice().reverse(); // slice : 복사본 만드는 거. 데이터 역순
        //  console.log(items);
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
                 <StatusBar
                   translucent={true}
                   backgroundColor={'#ffffff'}
                   barStyle={'dark-content'}
                 />
                   <View
                     style={styles.scrollview}
                     scrollEventThrottle={100}
                     directionalLockEnabled={false}
                    
                   >
                   { layoutExample(data1) }
                   {/* { layoutExample(data1) } */}
              
                   </View>
                  
                   <Provider>
                     <HomeNews/>
                    
                   </Provider>
                
                
                
             </View>
         </SafeAreaView>

     );
    
 };


 export default Card_Study;
// AsyncStorage.setItem('access_token',
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4NjI5MjUyOSwianRpIjoiOTQ1NTY5ZmUtOGY0OC00MWUzLThhNTgtODI0MTg2NTI3YzIwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjg2MjkyNTI5fQ.797Z_n9G_20rv2_mQ5dUyJ5kZFuWrKA4gvfuUNhICQ8", 
// () => {
//   console.log('유저 닉네임 저장 완료')
// });



