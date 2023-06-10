
// import React, {useState} from 'react';
// import { Text, View, Image, TouchableOpacity  } from 'react-native';
// import styles from '../styles/Challenge_Category';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Challenge from './Challenge';
// import Challenge_Stack from '../navigations/Challenge_navigator';


// const Challenge_Category = () => {
//   const navigation = useNavigation();

//   return (
//     <NavigationContainer independent={true}>
//     <View style={styles.background}>
//       <Text style={styles.saying}>
//         {"\n"}처음에는 우리가 습관을 만들지만, {"\n"} 나중에는 습관이 우리를 만든다{"\n"}
//       </Text>
//       <View style={styles.container}>
//         <Image source={require('../static/img/challenge_category.png')} style={styles.Img} />

//         <TouchableOpacity  style={styles.textContainer1} onPress={() => navigation.navigate('Challenge')}>
//           <Text style={styles.text}>저축</Text>
//         </TouchableOpacity >

//         <TouchableOpacity  style={styles.textContainer2} onPress={() => navigation.navigate('Challenge')}>
//           <Text style={styles.text}>투자</Text>
//         </TouchableOpacity >

//         <TouchableOpacity  style={styles.textContainer3} onPress={() => navigation.navigate('Challenge')}>
//           <Text style={styles.text}>무언가</Text>
//         </TouchableOpacity >

//         <TouchableOpacity  style={styles.textContainer4} onPress={() => navigation.navigate('Challenge')}>
//           <Text style={styles.text}>무언가</Text>
//         </TouchableOpacity >
//       </View>
//       <Challenge_Stack />
//     </View>
//     </NavigationContainer>
//   );
// };

// export default Challenge_Category;




import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/Challenge_Category';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Challenge from './Challenge';

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
          onPress={() => navigation.navigate('Challenge')}
        >
          <Text style={styles.text}>투자</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.textContainer3}
          onPress={() => navigation.navigate('Challenge')}
        >
          <Text style={styles.text}>무언가</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.textContainer4}
          onPress={() => navigation.navigate('Challenge')}
        >
          <Text style={styles.text}>무언가</Text>
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
    </Stack.Navigator>
  );
};


export default Challenge_Stack;
