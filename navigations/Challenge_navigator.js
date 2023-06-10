import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Challenge from '../Screens/Challenge';
import Challenge_Category from '../Screens/Challenge_Category'

const Stack = createStackNavigator();

const Challenge_Stack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Challenge_Category} />
      <Stack.Screen name="Challenge" component={Challenge} />
    </Stack.Navigator>
  );
};

// const Challenge_Stack = () => {
//     return (
//     <NavigationContainer independent={true}> 
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Challenge_Category} />
//         <Stack.Screen name="Challenge" component={Challenge} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

export default Challenge_Stack;