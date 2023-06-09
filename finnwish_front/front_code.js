import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { View, ScrollView, Text, SafeAreaView, StatusBar } from 'react-native';
import Carousel  from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import SliderEntry from '../components/SliderEntry';
import styles from '../styles/index.style'
import { ENTRIES1 } from '../static/entries';



// 슬라이더 첫 번째 항목 지정 (ENTRIES1의 데이터가 나오는 순서)
// 체크 : 근데 13줄이랑 17줄 없어도 되는 거 아냐 ? 어차피 entries reverse로 보내주면 우리가 원하는 순서대로 나오는데
// const SLIDER_1_FIRST_ITEM =1;


const Card_Study = () => {
  const [data1,setData] = useState([]);
      // const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(SLIDER_1_FIRST_ITEM);
    // 현재 활성화된 슬라이더 값을 1로 지정. 1부터 좌라락 나오겠지. 근데 없어도 되는 거 아니냐고

    const _renderItem = ({item, index}) => {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }; // item을 data prop으로 전달. 홀짝도 전달

    useEffect(() => {
      sendData();
    }, []);
  

    const sendData=()=>{
      let data={userid:1};
       
      fetch('http://192.168.0.25:5000/home/',{
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

    const layoutExample = (data) => {
        
        const items = data.slice().reverse(); // slice : 복사본 만드는 거. 데이터 역순

        console.log("layoutExample:",items);

        return ( // 체크 : 바로 밑에 View style에 exampleContainerLight은 없어도 되는거 아냐?
            <View style={[styles.exampleContainer, styles.exampleContainerLight]}> 
                <Text style={[styles.title, styles.titleDark]}>{`FINN WISH`}</Text>
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
                
                {/* 체크 : ScrollView를 꼭 써야 하나 ? */}
                <ScrollView style="flex:1">
                  { layoutExample(data1) }
                </ScrollView>

                {/* <ScrollView
                  style={styles.scrollview}
                  scrollEventThrottle={200}
                  directionalLockEnabled={true} //수직 스크롤만 가능
                >
                { layoutExample('stack') }
                </ScrollView> */}
            </View>
        </SafeAreaView>
    );
    
}

export default Card_Study;
