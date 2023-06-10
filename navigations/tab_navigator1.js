import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Card_Study from '../Home/Card_Study';
import My_Chanllenge from '../Mypage_Slide/My_Chanllenge';
import News_scrap from '../Mypage_Slide/News_scrap';
import Store from '../Mypage_Slide/Store';

const Drawer = createDrawerNavigator();


const TabNavigator1 =()=> {
  return(
    <>
      <Drawer.Navigator 
        screenOptions=
        {{
        drawerActiveBackgroundColor:'#CBE6D7', //커서 올라가있는 칸 전체 색
        drawerActiveTintColor:'#28794D', // 커서 올라가있는 글자색
        }}
        // initialRouteName="Home"
        >
        <Drawer.Screen name="Home" component={Card_Study} options={{ title: 'FINN WISH', headerTitleAlign: 'center',headerTitleStyle:{color:'darkgreen',fontWeight:'bold',fontSize:25}, }} />
        <Drawer.Screen name="매점" component={Store} />
        <Drawer.Screen name="뉴스 스크랩" component={News_scrap} />
        <Drawer.Screen name="나의 챌린지" component={My_Chanllenge} />
      </Drawer.Navigator>
    </>
  )
}

export default TabNavigator1;