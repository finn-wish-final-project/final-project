import React, {useRef, useState} from 'react';
import { Button, DrawerLayoutAndroid,Drawer, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function Challenge({navigation}){
  return(
      <>
          <View>
              <Text>I'm Challenge</Text>

          </View>
      </>
  );
}
export default Challenge;