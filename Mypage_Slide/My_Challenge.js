import React, {useRef, useState} from 'react';
import { Button, DrawerLayoutAndroid,Drawer, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createDrawerNavigator();

function My_Challenge(){
    return(
        <>
            <View>
                <Text>I'm My_Chanllenge</Text>
            </View>
        </>
    );
}

export default My_Challenge;