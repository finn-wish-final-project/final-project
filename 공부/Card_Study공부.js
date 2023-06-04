import React, { useState } from 'react';
import { View, ScrollView, Text, SafeAreaView, StatusBar } from 'react-native';
import Carousel  from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style공부';
import SliderEntry from '../공부/SliderEntry공부';
import styles from '../styles/index.style'
import { ENTRIES1 } from '../static/entries';

const SLIDER_1_FIRST_ITEM =1;   // 가장 첫번째 카드 

const Card_Study = () => {
    const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(SLIDER_1_FIRST_ITEM);
    //SLIDER_1_FIRST_ITEM이 slider1ActiveSlide에 저장되고 후에 setSlider1ActiveSlide이걸로 값을 바꿀 수 있음
  

    const _renderItem = ({item, index}) => {  //index는 carousel에서 제공하는 prop
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;  
    };

    const layoutExample = (type) => {
        const items = ENTRIES1.slice().reverse(); // slice : 복사본 만드는 거. 데이터 역순
        return (
            <View style={[styles.exampleContainer, styles.exampleContainerLight]}>
                <Text style={[styles.title, styles.titleDark]}>{`FINN WISH`}</Text>
                <Carousel
                  data={items}
                  renderItem={_renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  layout={type}
                  loop={false}
                  // 카드 쌓는 순서 변경
                  firstItem={items.length - 1} //젤 마지막 인덱스가 첫번째 화면으로 보여짐
                  containerCustomStyle2={{
                    transform: [{ scaleX: -1 }] // 가로방향으로 반전되어 보여줌
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
                <ScrollView
                  style={styles.scrollview}
                  scrollEventThrottle={200}
                  directionalLockEnabled={true}
                >
                { layoutExample('stack') } 
                {/* const example3 = layoutExample('stack'); 이것을 리턴위에 선언하고 {exapmle3}를 쓰면 함수를 불러오지 못한 이유는
                    애초에 선언해준곳이 함수 안이므로 함수 안에 함수를 리턴해줄 때는 함수명을 호출하는게 맞는거임 example3는 함수를 호출하지 못할 뿐더러
                    그저 함수의 결과값을 저장한 변수에 불과하기 때문에 함수호출을 하지 않으므로 jsx에 우리가 원하는 결과가 나오지 않는거임 */}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
    
}

export default Card_Study;