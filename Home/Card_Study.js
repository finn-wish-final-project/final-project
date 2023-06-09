import React, { useState,useEffect } from 'react';
// import PropTypes from 'prop-types';
import { View, ScrollView, Text, SafeAreaView, StatusBar, Button,Pressable,StyleSheet } from 'react-native';
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

    // useEffect(() => {
    //   sendData();
    // }, []);
  
    // const sendData=()=>{
    //   let data={userid:1};
    //    //IP 바꾸는거 잊지마!!!!!!!!!
    //   fetch('http://192.168.0.189:5000/home/word',{
    //     method:'POST',
    //     headers:{
    //       'Content-Type':'application/json',
    //       'X-CSRFToken': '{{csrf_token}}'
    //     },
    //     body:JSON.stringify(data)
    //   }).then (
    //     (response)=>{
    //       return response.json();
    //   }).then(
    //     (result)=>{
    //       console.log('1111',result);
    //       setData(result);
    //     }
    //   ).catch(
    //     (error)=>{
    //       alert('Error:',error);
    //     }
    //   );
    // };

    const layoutExample = (ENTRIES1) => {
        const items = ENTRIES1.slice().reverse(); // slice : 복사본 만드는 거. 데이터 역순
        console.log(items);
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
                  { layoutExample(ENTRIES1) }
                  {/* { layoutExample(data1) } */}
              
                  </View>
                  
                  <Provider>
                    <HomeNews/>
                    {/* {MyComponent()} */}
                  </Provider>
                
                
                
            </View>
        </SafeAreaView>

    );
    
};

// const title = ['대출 연체율 급등 비상…"금융 위험 대비해야"']
// const article = ['4월 말 기준 5대 시중은행 대출 가운데 한 달 이상 원리금이 연체된 비율은 0.304%, 1년 새 두 배 가까이로 뛰었습니다.금리 급등에 경기 둔화까지 겹치며 가계보다 기업들이 돈을 제때 못 갚은 경우가 많았습니다.<섬유업체 중소기업 대표> "작년보다 금리가 더 올라갔는데요. 양호했던 업체들이 지금 상황이 많이 안 좋아지고 있어요. 작년 12월 말일자로 공장 정리했고요…"2019년 말 906조원이던 은행의 기업 대출 잔액은 코로나 사태를 거치며 지난해 1,221조원까지 불어났는데, 여기엔 소상공인 대출도 포함됩니다.그간은 대출만기 연장이나 이자 유예로 부실이 드러나지 않았지만, 지난해 하반기부터 연체율은 뚜렷하게 상승곡선을 그리고 있습니다.']
// const MyComponent = () => {
//   const [visible, setVisible] = React.useState(false);

//   const showDialog = () => setVisible(true);
//   const hideDialog = () => setVisible(false);

//   return (
//     <Provider>
//       <View>
//         <Portal>
//         <Pressable onPress={showDialog}>
//             <Text style={style.textStyle}>오늘의 뉴스 보러가기</Text>
//           </Pressable>
//           {/* <Button style={styles.modalbButton}
//           onPress={showDialog} title="오늘의 뉴스 보러가기" /> */}
//           <Dialog style={style.dialogContainer} visible={visible} onDismiss={hideDialog} >
//           <Dialog.Title>{title}</Dialog.Title>
//           <Divider style={{ borderWidth: 1 }} width={'auto'}/>
//             <Dialog.ScrollArea>
//               <ScrollView  contentContainerStyle={{paddingHorizontal: 0 }}>
              
//                 <Text>{article}</Text>
//               </ScrollView>
//             </Dialog.ScrollArea>
//           </Dialog>
//         </Portal>
//       </View>
//     </Provider>
//   );
// };

// const style = StyleSheet.create({
//   textStyle:{
//     color:'green',
//     marginTop:'68%',
//     textAlign:'center',
//     fontSize:18
//   },
//   dialogContainer:{
    
//     backgroundColor:'lightgrey',
//     marginHorizontal:25, // 뉴스 컨테이너 넓이
//     marginTop:10,
//     marginBottom:10,
//     justifyContent:'flex-start',
//     textAlign:'center',
//     // height: '100%',
//     // flex:1
//   }
// })


export default Card_Study;