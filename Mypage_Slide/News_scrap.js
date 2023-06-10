// import React, {useRef, useState} from 'react';
// import { Button, DrawerLayoutAndroid,Drawer, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
// import { createDrawerNavigator } from "@react-navigation/drawer";

// const Tab = createDrawerNavigator();

// function News_scrap(){
//     return(
//         <>
//             <View>
//                 <Text>I'm News_scrap</Text>
//             </View>
//         </>
//     );
// }

// export default News_scrap;






















// import React, {useRef, useState} from 'react';
// import { Button, DrawerLayoutAndroid,Drawer, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
// import { createDrawerNavigator } from "@react-navigation/drawer";

// const Tab = createDrawerNavigator();

// function News_scrap(){
//     return(
//         <>
//             <View>
//                 <Text>I'm News_scrap</Text>
//             </View>
//         </>
//     );
// }

// export default News_scrap;

// import * as React from 'react';
// import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

// const MyComponent = () => {
//   const [visible, setVisible] = React.useState(false);

//   const showModal = () => setVisible(true);
//   const hideModal = () => setVisible(false);
//   const containerStyle = {backgroundColor: 'white', padding: 20};

//   return (
//     <Provider>
//       <Portal>
//         <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
//           <Text>Example Modal.  Click outside this area to dismiss.</Text>
//         </Modal>
//       </Portal>
//       <Button style={{marginTop: 30}} onPress={showModal}>
//         Show
//       </Button>
//     </Provider>
//   );
// };

// export default MyComponent;

// import * as React from 'react';
// import { ScrollView, Button } from 'react-native';
// import { Dialog, Portal, Text, Provider } from 'react-native-paper';

// const article = ['This is a scrollable area']
// const MyComponent = () => {
//   const [visible, setVisible] = React.useState(false);

//   const showDialog = () => setVisible(true);
//   const hideDialog = () => setVisible(false);

//   return (
//     <Provider>
//       <Portal>
//         <Button onPress={showDialog} title="Open Dialog" />
//         <Dialog visible={visible} onDismiss={hideDialog}>
//           <Dialog.ScrollArea>
//             <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
//               <Text>{article}</Text>
//             </ScrollView>
//           </Dialog.ScrollArea>
//         </Dialog>
//       </Portal>
//     </Provider>
//   );
// };

// export default MyComponent;

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView ,Pressable,StatusBar} from 'react-native';
import { Dialog, Portal,  Provider,  Divider } from 'react-native-paper';
// import styles from '../styles/index.style'
import styles from '../styles/NewsScrap.style'

const title = ['대출 연체율 급등 비상…"금융 위험 대비해야"']
const article = ['4월 말 기준 5대 시중은행 대출 가운데 한 달 이상 원리금이 연체된 비율은 0.304%, 1년 새 두 배 가까이로 뛰었습니다.금리 급등에 경기 둔화까지 겹치며 가계보다 기업들이 돈을 제때 못 갚은 경우가 많았습니다.<섬유업체 중소기업 대표> "작년보다 금리가 더 올라갔는데요. 양호했던 업체들이 지금 상황이 많이 안 좋아지고 있어요. 작년 12월 말일자로 공장 정리했고요…"2019년 말 906조원이던 은행의 기업 대출 잔액은 코로나 사태를 거치며 지난해 1,221조원까지 불어났는데, 여기엔 소상공인 대출도 포함됩니다.그간은 대출만기 연장이나 이자 유예로 부실이 드러나지 않았지만, 지난해 하반기부터 연체율은 뚜렷하게 상승곡선을 그리고 있습니다.']

const Challenge = () => {
    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

  return(

    <Provider >
        <ScrollView style={{backgroundColor:'lightgrey'}}>
            <Portal >
                <Pressable onPress={showDialog}>
                    <View style={styles.CardContainer}>
                        <Text style={styles.CardTitle}>{title} </Text>
                    </View>
                </Pressable>
                <Dialog
                style={styles.dialogContainer} visible={visible} onDismiss={hideDialog} >
                <Dialog.Title>{title}</Dialog.Title>
                <Divider style={{ borderWidth: 1,marginHorizontal:15 }} width={'90%'}/>
                <Dialog.ScrollArea>
                    <ScrollView  contentContainerStyle={{paddingHorizontal: 0 }}>
                    <Text style={styles.ArticleText}>{article}</Text>
                    </ScrollView>
                    <Pressable onPress={hideDialog}>
                      <Text style={styles.CloseButton}>닫기</Text>
                    </Pressable>
                </Dialog.ScrollArea>
                </Dialog>
            </Portal>
        </ScrollView>
    </Provider>

    )
};

export default Challenge;