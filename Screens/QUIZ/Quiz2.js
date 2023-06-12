import React, { useState } from 'react';
import { Text, View,Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '/Users/PC3/finnwish/finnwish/styles/Quiz.style'



const Stack = createStackNavigator();

const Quiz2 = () => {
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
            onPress: () => navigation.navigate('Quiz3')
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
    <Text style={styles.QuizContent}> 2. 집을 매입하기 위해 필요한 통장은? </Text>

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

  <View style={styles.ButtonContainer2}>
    <Button
      style={styles.NextButton}
      onPress={() =>navigation.pop()}
      // disabled={selectedAnswer === null} // 다음 버튼은 선택된 항목이 없을 경우 비활성화
    >
      <Text style={styles.ButtonText}>이전</Text>
    </Button>

    <Button
      style={styles.NextButton}
      onPress={checkAnswerAndProceed}
      disabled={selectedAnswer === null} // 다음 버튼은 선택된 항목이 없을 경우 비활성화
    >
      <Text style={styles.ButtonText}>다음</Text>
    </Button>
  </View>
</View>


    );
};




export default Quiz2;





