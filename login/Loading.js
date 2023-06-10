import React from 'react';
import {Image, View} from 'react-native';
import styles from '../styles/Loading.style'

export default () => {
  return (
    <View style={styles.loading_container}>
      <Image source={require('../static/img/logo.png')} style = {styles.loading_img} />
    </View>
  );
};