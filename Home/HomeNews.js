// import * as React from 'react';
// import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
// import { StyleSheet,  Pressable} from 'react-native';

// const HomeNews = () => {
//   const [visible, setVisible] = React.useState(false);

//   const showModal = () => setVisible(true);
//   const hideModal = () => setVisible(false);
//   const containerStyle = {backgroundColor: 'white', padding: 100};

//   return (
//     <Provider>
//       <Portal>
//         <Modal animationType="slide" visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
//           <Text>여기는 기사 나올 공간</Text>
//           <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={hideModal}>
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//         </Modal>
//       </Portal>
//       <Button style={{marginTop: 200 }} onPress={showModal}>
//         오늘의 뉴스 보기
//       </Button>
//     </Provider>
//   );
// };

// const styles = StyleSheet.create({
    
//     button: {
//       borderRadius: 20,
//       padding: 10,
//       elevation: 2,
//     },
    
//     buttonClose: {
//       backgroundColor: '#CBE6D7',
//     },
//     textStyle: {
//       color: 'white',
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
   
//   });
  
// export default HomeNews;


import React from 'react';
import { View, ScrollView, Text, SafeAreaView, StatusBar, Button,Pressable,StyleSheet } from 'react-native';
import { Dialog, Portal,  Provider,  Divider,Paragraph } from 'react-native-paper';
import style from '../styles/HomeNews.style'
// import styles2 from './styles/index.style';

// import Icon from 'react-native-vector-icons/FontAwesome';
import "react-native-gesture-handler";

// import Icon from 'react-native-vector-icons/MaterialIcons';
const title = ['대출 연체율 급등 비상…"금융 위험 대비해야"']
const article = ['4월 말 기준 5대 시중은행 대출 가운데 한 달 이상 원리금이 연체된 비율은 0.304%, 1년 새 두 배 가까이로 뛰었습니다.금리 급등에 경기 둔화까지 겹치며 가계보다 기업들이 돈을 제때 못 갚은 경우가 많았습니다.<섬유업체 중소기업 대표> "작년보다 금리가 더 올라갔는데요. 양호했던 업체들이 지금 상황이 많이 안 좋아지고 있어요. 작년 12월 말일자로 공장 정리했고요…"2019년 말 906조원이던 은행의 기업 대출 잔액은 코로나 사태를 거치며 지난해 1,221조원까지 불어났는데, 여기엔 소상공인 대출도 포함됩니다.그간은 대출만기 연장이나 이자 유예로 부실이 드러나지 않았지만, 지난해 하반기부터 연체율은 뚜렷하게 상승곡선을 그리고 있습니다.4월 말 기준 5대 시중은행 대출 가운데 한 달 이상 원리금이 연체된 비율은 0.304%, 1년 새 두 배 가까이로 뛰었습니다.금리 급등에 경기 둔화까지 겹치며 가계보다 기업들이 돈을 제때 못 갚은 경우가 많았습니다.<섬유업체 중소기업 대표> "작년보다 금리가 더 올라갔는데요. 양호했던 업체들이 지금 상황이 많이 안 좋아지고 있어요. 작년 12월 말일자로 공장 정리했고요…"2019년 말 906조원이던 은행의 기업 대출 잔액은 코로나 사태를 거치며 지난해 1,221조원까지 불어났는데, 여기엔 소상공인 대출도 포함됩니다.그간은 대출만기 연장이나 이자 유예로 부실이 드러나지 않았지만, 지난해 하반기부터 연체율은 뚜렷하게 상승곡선을 그리고 있습니다.']
const HomeNews = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <Provider >
      <View >
        <Portal >
        <Pressable style={{marginTop:'68%',}}onPress={showDialog}>
            <Text style={style.textStyle}>오늘의 뉴스 보러가기</Text>
          </Pressable>
          {/* <Button style={styles.modalbButton}
          onPress={showDialog} title="오늘의 뉴스 보러가기" /> */}
          <Dialog
          contentStyle={{ backgroundColor: 'transparent' }} 
          style={style.dialogContainer} visible={visible} onDismiss={hideDialog} >
          <Dialog.Title>{title}</Dialog.Title>
          <Divider style={{ borderWidth: 1,marginHorizontal:15,borderColor:'darkgreen' }} width={'90%'}/>
            <Dialog.ScrollArea>
              <ScrollView  contentContainerStyle={{paddingHorizontal: 0 }}>
              
                <Text>{article}</Text>

              </ScrollView>
              <Pressable onPress={hideDialog}>
                  <Text style={style.CloseButton}>닫기</Text>
                </Pressable>
            </Dialog.ScrollArea>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

export default HomeNews;