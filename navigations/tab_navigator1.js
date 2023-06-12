import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Card_Study from '../Home/Card_Study';
import My_Chanllenge from '../Mypage_Slide/My_Challenge';
import News_scrap from '../Mypage_Slide/News_scrap';
import Store from '../Mypage_Slide/Store';
import {View} from 'react-native';


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














// import React from 'react';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
// import Card_Study from '../Home/Card_Study';
// import My_Chanllenge from '../Mypage_Slide/My_Challenge';
// import News_scrap from '../Mypage_Slide/News_scrap';
// import Store from '../Mypage_Slide/Store';
// import { View, AsyncStorage } from 'react-native';
// import { CommonActions } from '@react-navigation/native';

// const Drawer = createDrawerNavigator();

// const TabNavigator1 = () => {
//   function AppDrawerContent(props) {
//     const { navigation } = props; // Extract the navigation prop

//     const handleLogout = async () => {
//       await AsyncStorage.clear();
//       navigation.dispatch(
//         CommonActions.reset({
//           index: 0,
//           routes: [{ name: 'loginScreen' }],
//         })
//       );
//     };

//     return (
//       <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
//         {/* All of the drawer items */}
//         <DrawerItemList {...props} style={{ borderWidth: 1 }} />
//         <View style={{ flex: 1, marginVertical: 20, borderWidth: 1 }}>
//           {/* Here's where you put your logout drawer item */}
//           <DrawerItem
//             label="Log out"
//             onPress={handleLogout}
//             style={{ flex: 1, justifyContent: 'flex-end' }}
//           />
//         </View>
//       </DrawerContentScrollView>
//     );
//   }

//   return (
//     <>
//       <Drawer.Navigator
//         drawerContent={props => <AppDrawerContent {...props} />}
//         screenOptions={{
//           drawerActiveBackgroundColor: '#CBE6D7',
//           drawerActiveTintColor: '#28794D',
//         }}
//       >
//         <Drawer.Screen
//           name="Home"
//           component={Card_Study}
//           options={{
//             title: 'FINN WISH',
//             headerTitleAlign: 'center',
//             headerTitleStyle: { color: 'darkgreen', fontWeight: 'bold', fontSize: 25 },
//           }}
//         />
//         <Drawer.Screen name="매점" component={Store} />
//         <Drawer.Screen name="뉴스 스크랩" component={News_scrap} />
//         <Drawer.Screen name="나의 챌린지" component={My_Chanllenge} />
//       </Drawer.Navigator>
//     </>
//   )
// }

// export default TabNavigator1;

