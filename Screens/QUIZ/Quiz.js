import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation,NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionPresets  } from '@react-navigation/stack';
import Quiz2 from './Quiz2';
import Quiz3 from './Quiz3';
import Submit from './Submit';
import styles from '/Users/PC3/finnwish/finnwish/styles/Quiz.style'


const Stack = createStackNavigator();


const Quiz = () => {
    const navigation = useNavigation();

    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerSelect = (answerIndex) => {
        setSelectedAnswer(answerIndex);
    };

    const checkAnswerAndProceed = () => {
      if (selectedAnswer === 2) {
        // 정답인 경우
        Alert.alert('정답입니다!', '', [
          {
            text: '다음',
            onPress: () => navigation.navigate('Quiz2')
          }
        ]);
      } else {
        // 오답인 경우
        Alert.alert('틀렸습니다. 다시 선택해주세요.');
      }
    };
  


  return(

    <View style={styles.QuizEntireContainer}>
  <View style={styles.QuizContainer}>
    <Text style={styles.WordQuiz}> 단어 퀴즈 </Text>
    <Text style={styles.QuizContent}> 1. 집을 매입하기 위해 필요한 통장은? </Text>

    <Text
      style={[
      styles.defaultAnswer,
      selectedAnswer === 1 && styles.selectedAnswer
      ]}
      onPress={() => handleAnswerSelect(1)}
    >
      (1) 청약 통장
    </Text>

    <Text
      style={[
        styles.defaultAnswer,
        selectedAnswer === 2 && styles.selectedAnswer
        ]}
      onPress={() => handleAnswerSelect(2)}
    >
      (2) 예금 통장
    </Text>
    <Text
      style={[
        styles.defaultAnswer,
        selectedAnswer === 3 && styles.selectedAnswer
        ]}
      onPress={() => handleAnswerSelect(3)}
    >
      (3) 파킹 통장
    </Text>
    <Text
      style={[
        styles.defaultAnswer,
        selectedAnswer === 4 && styles.selectedAnswer
        ]}
      onPress={() => handleAnswerSelect(4)}
    >
      (4) 대포 통장
    </Text>
  </View>

  <View style={styles.ButtonContainer}>

    <Button
      style={styles.NextButton}
      onPress={checkAnswerAndProceed}
      disabled={selectedAnswer === null} // 다음 버튼은 선택된 항목이 없을 경우 비활성화
    >
      <Text  style={styles.ButtonText}>다음</Text>
    </Button>
  </View>
</View>


    );
};





const Quiz_Stack1 = () => {
    return (
        <Stack.Navigator 
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS, // 애니메이션 효과를 설정합니다.
        }}>
            <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }}  />
            <Stack.Screen name="Quiz2" component={Quiz2}  options={{ headerShown: false }} />
            <Stack.Screen name="Quiz3" component={Quiz3}  options={{ headerShown: false }} />
            <Stack.Screen name="Submit" component={Submit}  options={{ headerShown: false }} />
        </Stack.Navigator>
   
    );
  };


export default Quiz_Stack1;
