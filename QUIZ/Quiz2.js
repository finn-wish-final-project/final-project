import React, { useState,useEffect } from 'react';
import { Text, View,Alert,AsyncStorage } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles/Quiz.style';



const Stack = createStackNavigator();

const Quiz2 = () => {
    const navigation = useNavigation();

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [Quiz,setData] = useState('');
    const [answer,setAnswer] = useState('');
    const [col1,setCol1]=useState('');
    const [col2,setCol2]=useState('');
    const [col3,setCol3]=useState('');
    const [col4,setCol4]=useState('');
    const [wordid,setWorid] = useState('');
    
    const handleAnswerSelect = (answerIndex) => {
        setSelectedAnswer(answerIndex);
    };

    const checkAnswerAndProceed = () => {
      if (selectedAnswer === answer) {
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

    useEffect(() => {
      sendData();
      
    }, []);
    
    const sendData = async () => {
      try {
        const access_token = await AsyncStorage.getItem('access_token');
        const data = {userid:1};
    
        fetch('http://192.168.0.146:5000/home/quiz', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{csrf_token}}',
            'Authorization': `Bearer ${access_token}`
          },
          body: JSON.stringify(data)
        })
          .then((response) => response.json())
          .then((result) => {
            try{
              console.log('2222', result);
            setData(result[1]['quiz']);
            setAnswer(result[1]['answer']);
            setCol1(result[1]['col1']);
            setCol2(result[1]['col2']);
            setCol3(result[1]['col3']);
            setCol4(result[1]['col4']);
            setWorid(result[1]['wordid']);
          }catch(error){
            alert(error)
          }  
          })
          .catch((error) => {
            // console.log('@@@@@@@@@');
            console.error('Error:', error);
          });
      } catch (error) {
        // console.log('!!!!!!!!');
        console.error('Error:', error);
      }
    };


  return(

    <View style={styles.QuizEntireContainer}>
  <View style={styles.QuizContainer}>
    <Text style={styles.WordQuiz}> 단어 퀴즈 </Text>
    <Text style={styles.QuizContent}> 2. {Quiz} </Text>

    <Text
      style={[
        styles.defaultAnswer,
        selectedAnswer === 1 && styles.selectedAnswer
        ]}
      onPress={() => handleAnswerSelect(1)}
    >
      (1) {col1} 
    </Text>
    <Text
      style={[
        styles.defaultAnswer,
        selectedAnswer === 2 && styles.selectedAnswer
        ]}
      onPress={() => handleAnswerSelect(2)}
    >
      (2) {col2} 
    </Text>
    <Text
      style={[
        styles.defaultAnswer,
        selectedAnswer === 3 && styles.selectedAnswer
        ]}
      onPress={() => handleAnswerSelect(3)}
    >
      (3) {col3} 
    </Text>
    <Text
      style={[
        styles.defaultAnswer,
        selectedAnswer === 4 && styles.selectedAnswer
        ]}
      onPress={() => handleAnswerSelect(4)}
    >
      (4) {col4} 
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





