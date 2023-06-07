import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import Carousel  from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import SliderEntry from '../components/SliderEntry';
import styles from '../styles/index.style'
import { ENTRIES1 } from '../static/entries';

const SLIDER_1_FIRST_ITEM =1;

const Card_Study = () => {
    const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(SLIDER_1_FIRST_ITEM);
  

    const _renderItem = ({item, index}) => {
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
                  // contentContainerCustomStyle={styles.sliderContentContainer}
                  layout={type}
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
                <View>
                { layoutExample('stack') }
                </View>
            </View>
        </SafeAreaView>
    );
    
}

export default Card_Study;

// import React, { useState } from 'react';
// import { View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
// import SliderEntry from '../components/SliderEntry';
// import styles from '../styles/index.style';
// import { ENTRIES1 } from '../static/entries';

// const SLIDER_1_FIRST_ITEM = 1;

// const Card_Study = () => {
// const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(SLIDER_1_FIRST_ITEM);

// const _renderItem = ({ item, index }) => {
// return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
// };

// const layoutExample = (type) => {
// const items = ENTRIES1.slice().reverse();
// return (
// <View style={[styles.exampleContainer, styles.exampleContainerLight]}>
// <Text style={[styles.title, styles.titleDark]}>{"FINN WISH"}</Text>
// <Carousel
// data={items}
// renderItem={_renderItem}
// sliderWidth={sliderWidth}
// itemWidth={itemWidth}
// containerCustomStyle={styles.slider}
// contentContainerCustomStyle={styles.sliderContentContainer}
// layout={type}
// loop={false}
// firstItem={items.length - 1}
// containerCustomStyle2={{
// transform: [{ scaleX: -1 }]
// }}
// />
// </View>
// );
// };


// return (
// <SafeAreaView style={styles.safeArea}>
// <View style={styles.container}>
// <StatusBar translucent={true} backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
// <ScrollView style={styles.scrollview} scrollEventThrottle={200} directionalLockEnabled={true}>
// {layoutExample('stack')}
// </ScrollView>
// </View>
// </SafeAreaView>
// );
// };

// export default Card_Study;

