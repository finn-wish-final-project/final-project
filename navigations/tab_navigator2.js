// import React from 'react';
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Card_Study from '../Home/Card_Study';
// import My_Chanllenge from '../Mypage_Slide/My_Challenge';
// import News_scrap from '../Mypage_Slide/News_scrap';
// import Dic from "../Screens/Dictionary";
// import Store from '../Mypage_Slide/Store';


// const Drawer = createDrawerNavigator();


// const TabNavigator2 =()=> {
//   return(
//     <>
//       <Drawer.Navigator 
//         screenOptions=
//         {{
//         drawerActiveBackgroundColor:'#CBE6D7', //커서 올라가있는 칸 전체 색
//         drawerActiveTintColor:'#28794D', // 커서 올라가있는 글자색
//         }}
//         // initialRouteName="Home"
//         >
//         <Drawer.Screen name="Home" component={Dic} options={{ title: 'FINN WISH', headerTitleAlign: 'center',headerTitleStyle:{color:'darkgreen',fontWeight:'bold',fontSize:25}, }} />
//         <Drawer.Screen name="매점" component={Store} />
//         <Drawer.Screen name="뉴스 스크랩" component={News_scrap} />
//         <Drawer.Screen name="나의 챌린지" component={My_Chanllenge} />
//       </Drawer.Navigator>
//     </>
//   )
// }

// export default TabNavigator2;


import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Card_Study from '../Home/Card_Study';
import News_scrap from '../Mypage_Slide/News_scrap';
import Store from '../Mypage_Slide/Store';
import { View,AsyncStorage} from 'react-native';
import { DrawerContentScrollView,DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { NativeModules } from 'react-native';
import My_Challenge from '../Mypage_Slide/My_Challenge';
import Dic from "../Screens/Dictionary";

const { RNRestart } = NativeModules;
const Drawer = createDrawerNavigator();

const TabNavigator2 =({})=> {
  function AppDrawerContent(props){
    return (
       <DrawerContentScrollView {...props} contentContainerStyle={{flex:1}}>
         <DrawerItemList {...props}  style={{borderWidth:1}}/>
         <View style={{flex:1,marginVertical:20,borderWidth:1}}>
           <DrawerItem
            label="로그아웃"
            onPress={() => {
              AsyncStorage.clear();
              RNRestart.restart();

            }}
            style={{ flex: 1, justifyContent: 'flex-end' }}
          />
         </View>
       </DrawerContentScrollView>
     );
   }

  return(
    <>
      <Drawer.Navigator drawerContent={props=><AppDrawerContent {...props} />}
        screenOptions=
        {{
        drawerActiveBackgroundColor:'#CBE6D7', //커서 올라가있는 칸 전체 색
        drawerActiveTintColor:'#28794D', // 커서 올라가있는 글자색
        }}
        >
        <Drawer.Screen name="Home" component={Dic} options={{ title: 'FINN WISH', headerTitleAlign: 'center',headerTitleStyle:{color:'darkgreen',fontWeight:'bold',fontSize:25}, }} />
        <Drawer.Screen name="매점" component={Store} />
        <Drawer.Screen name="뉴스 스크랩" component={News_scrap} />
        <Drawer.Screen name="나의 챌린지" component={My_Challenge} />
      </Drawer.Navigator>
    </>
  ) 
}

export default TabNavigator2;



