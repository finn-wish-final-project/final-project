import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, SafeAreaView,TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import styles from './styles/index.style';
import {ENTRIES1} from './static/entries';

const SLIDER_1_FIRST_ITEM = 1;

export default class example extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            toggle: false
        };
    }

    _renderItem ({item, index}) {
        return <SliderEntry 
        data={item} 
        even={(index + 1) % 2 === 0} 
        />;
    }

    layoutExample (type) {
        const items = ENTRIES1.slice().reverse(); // ENTRIES1 배열을 역순으로 복사하여 entries 변수에 할당

        return (
            <View style={[styles.exampleContainer, styles.exampleContainerLight]}>
                <StatusBar
                      translucent={true}
                      backgroundColor={'lightgrey'}
                      barStyle={'dark-content'}
                    />
                <Text style={[styles.title, styles.titleDark]}>{`FINNWISH`}</Text>
                
                  <Carousel
                    data={items}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    useExperimentalSnap={true}
                    layout={type}
                    firstItem={items.length - 1}
                        containerCustomStyle2={{
                            transform: [{ scaleX: -1 }]
                        }}
                    loop={false} 
                  />   
            </View>
        );
    }


    render () {
        const cardStudy = this.layoutExample('stack');
          
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
                    >{ cardStudy }
                    </ScrollView>
                </View>

                <View style={styles.menuBar}>
                    <TouchableOpacity style={styles.menuButton}>
                    <Text style={styles.menuButtonText}>사전</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButton}>
                    <Text style={styles.menuButtonText}>메뉴</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButton}>
                    <Text style={styles.menuButtonText}>챌린지</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            
        );
    }
}

