import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/Challenge_Category.style';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Challenge from './Challenge';
import Challenge2 from './Challenge2';
import Challenge3 from './Challenge3';
import Challenge4 from './Challenge4';

import Challenge1_1 from './Challenge1_1';
import Challenge1_2 from './Challenge1_2';
import Challenge1_3 from './Challenge1_3';
import Challenge1_4 from './Challenge1_4';
import Challenge2_1 from './Challenge2_1';
import Challenge3_1 from './Challenge3_1';

import Challenge_link1 from './Challenge_link1';

const Stack = createStackNavigator();

const Challenge_Category = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <Text style={styles.saying}>
        {"\n"}처음에는 우리가 습관을 만들지만, {"\n"} 나중에는 습관이 우리를 만든다{"\n"}
      </Text>
      <View style={styles.container}>
        <Image
          source={require('../static/img/challenge_category.png')}
          style={styles.Img}
        />

        <TouchableOpacity
          style={styles.textContainer1}
          onPress={() => navigation.navigate('Challenge')}
        >
          <Text style={styles.text}>저축</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.textContainer2}
          onPress={() => navigation.navigate('Challenge2')}
        >
          <Text style={styles.text}>투자</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.textContainer3}
          onPress={() => navigation.navigate('Challenge3')}
        >
          <Text style={styles.text}>교육</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.textContainer4}
          onPress={() => navigation.navigate('Challenge4')}
        >
          <Text style={styles.text}>추천</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Challenge_Stack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Challenge_Category} options={{ headerShown: false }}/>
      <Stack.Screen name="Challenge" component={Challenge} options={{ headerShown: false }} />
      <Stack.Screen name="Challenge2" component={Challenge2} options={{ headerShown: false }} />
      <Stack.Screen name="Challenge3" component={Challenge3} options={{ headerShown: false }} />
      <Stack.Screen name="Challenge4" component={Challenge4} options={{ headerShown: false }} />

      <Stack.Screen name="Challenge1_1" component={Challenge1_1} options={{ headerShown: false }} />
      <Stack.Screen name="Challenge1_2" component={Challenge1_2} options={{ headerShown: false }} />
      <Stack.Screen name="Challenge1_3" component={Challenge1_3} options={{ headerShown: false }} />
      <Stack.Screen name="Challenge1_4" component={Challenge1_4} options={{ headerShown: false }} />
      <Stack.Screen name="Challenge2_1" component={Challenge2_1} options={{ headerShown: false }} />
      <Stack.Screen name="Challenge3_1" component={Challenge3_1} options={{ headerShown: false }} />


      <Stack.Screen name="Challenge_link1" component={Challenge_link1} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
};


export default Challenge_Stack;
