import React, {useRef, useState} from 'react';
import { Button, DrawerLayoutAndroid,Drawer, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createDrawerNavigator();

function News_scrap(){
    return(
        <>
            <View>
                <Text>I'm News_scrap</Text>
            </View>
        </>
    );
}

export default News_scrap;