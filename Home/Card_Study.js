import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, SafeAreaView, StatusBar, AsyncStorage } from 'react-native';
import Carousel  from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import SliderEntry from '../components/SliderEntry';
import styles from '../styles/index.style'
import { ENTRIES1 } from '../static/entries';


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

    const sendData = async () => {
      try {
        const access_token = await AsyncStorage.getItem('access_token');
        const data = { };
    
        fetch('http://192.168.0.189:5000/home/word', {
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

      // console.log("layoutExample:",items);

      return ( // 체크 : 바로 밑에 View style에 exampleContainerLight은 없어도 되는거 아냐?
          <View style={[styles.exampleContainer, styles.exampleContainerLight]}> 
              <Text style={[styles.title, styles.titleDark]}>{`오늘의 끝장단어`}</Text>
              <Carousel
                data={items}
                renderItem={_renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                layout={'stack'} // stack, tinder , ... 우리는 stack 사용
                loop={false} // 무한반복 X
                
                // 카드 쌓는 순서 변경
                firstItem={items.length - 1} // items의 마지막 인덱스 의미
                containerCustomStyle2={{
                  transform: [{ scaleX: -1 }] // 좌우반전 ,,~
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

              <View style="flex:1">
                { layoutExample(data1) }
              </View>
          </View>
      </SafeAreaView>
  );
    
}

export default Card_Study;