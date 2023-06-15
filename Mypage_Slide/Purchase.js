// Purchase 컴포넌트

import React from 'react';
import { Text, View, Image } from 'react-native';

const Purchase = ({ route }) => {
  const { item } = route.params;

  return (
    <View>
      <Image source={item.image} />
      <Text>{item.name}{JSON.stringify(item)}</Text>
      <Text>{item.item}</Text>
      <Text>{item.price}</Text>
    </View>
  );
};

export default Purchase;
