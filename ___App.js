import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {View, Text,Button} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Card_Study from './Home/Card_Study';
import BottomBar from './Home/Bottom_Bar';
import styles2 from './styles/index.style'
import Icon from 'react-native-vector-icons/FontAwesome';



// 페이지 하나 생성
const HomeScreen=({navigation})=>{
    return(
        <View 
        style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text style={{padding:10}}>Try to create own your homepage 💒 </Text>
            <Button 
            title="세부페이지로 이동 (☞ﾟヮﾟ)☞"
            onPress={()=>navigation.navigate('Details',{stocks:'삼성전자'})
            }/>
            <Button 
            style={{margin:30}}
            title="메뉴"
            onPress={()=>navigation.navigate('Menu')}
            />

        </View>
    )
} // 이게 메인 페이지
// 디테일 페이지를 열면서 데이터를 전달함(: ^ 위의 onPress의 기능)

const DetailScreen=({route})=>{
    return(
        <View
        style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>세부 페이지</Text>
            <Text>{route.params.stocks}를 주문하겠습니다</Text>

        </View>
    )
}
const Menu=()=>{
    return(
        <View>
            <Text>안녕 나는 메뉴</Text>
        </View>
    )
}


// 생성 후 여기서 홈페이지 스택을 하나 쌓아줌
const Stack =createNativeStackNavigator();

function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HOME (●'◡'●)"> 
                <Stack.Screen name="Details" component={DetailScreen} />
                <Stack.Screen name="HOME (●'◡'●)" component={HomeScreen}/>
                <Stack.Screen name="Menu" component={Menu}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;