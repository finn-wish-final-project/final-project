import React from 'react';
import { View,  Text, TouchableOpacity,Image } from 'react-native';
import styles from '../styles/index.style';


const BottomBar=()=>{
    return(
        <>
            <View style={styles.menuBar}>
                    <TouchableOpacity style={styles.menuButton}>
                    <Text style={styles.menuButtonText}>사전</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButton}>
                    <Image source={require('../static/img/logo2.png')} style = {styles.logoImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButton}>
                    <Text style={styles.menuButtonText}>챌린지</Text>
                    </TouchableOpacity>
            </View>
        </>
    )
};
export default BottomBar;

