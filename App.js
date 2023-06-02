import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, SafeAreaView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import styles from './styles/index.style';
import { ENTRIES1} from './static/entries';

const SLIDER_1_FIRST_ITEM = 1;

export default class example extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }
//실험
    _renderItem ({item, index}) {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }

    layoutExample (type) {
      const items = ENTRIES1.slice().reverse();
      return (
          <View style={[styles.exampleContainer, styles.exampleContainerLight]}>
              <Text style={[styles.title, styles.titleDark]}>{`FINN WISH`}</Text>
              <Carousel
                data={items}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                layout={type}
                loop={false}
                firstItem={items.length - 1}
                containerCustomStyle2={{
                  transform: [{ scaleX: -1 }]
                }}
              />
          </View>
      );
  }
    render () {
        
        const example3 = this.layoutExample('stack');

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'#FFFFFF'}
                      barStyle={'dark-content'}
                    />
                    <ScrollView
                      style={styles.scrollview}
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}
                    >
                        { example3 }
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}