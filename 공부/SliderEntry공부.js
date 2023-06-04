import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/SliderEntry.style공부';


export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
    };

    render () {
        const { data: { title, subtitle }, even } = this.props;

        const uppercaseTitle = title ? (
            <Text
              style={[styles.title, even ? styles.titleEven : {}]}
            >
                { title.toUpperCase() }
            </Text>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={() => { alert(`You've clicked '${title}'`); }}
              >
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} /> 
                    {/* style.radiusMask는 기본으로 되어있고 만약 even이면 styles.radiusMaskEven의 스타일을 추가해라 아니면 빈 객체(추가하는거 없음) */}

                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                    { uppercaseTitle }
                    <Text
                      style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                    >
                        { subtitle }
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}