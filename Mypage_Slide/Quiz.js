import React, {useRef, useState} from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createDrawerNavigator();

function Quiz(){
    return(
      <>
        <View>
          <Text>퀴즈 추가</Text>
        </View>
      </>
    );
}

export default Quiz;