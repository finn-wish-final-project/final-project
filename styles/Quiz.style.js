import { StyleSheet ,Dimensions } from 'react-native';

const colors = {
    yellowgreen: '#28794D',
    green: '#CBE6D7',
    background: '#FFFFFF',
};


export default StyleSheet.create({
    QuizEntireContainer:{
        backgroundColor: 'white', flex: 1
    },
    QuizContainer:{
        width: '80%', 
        backgroundColor: 'white',
        marginHorizontal: '10%', 
        marginVertical: '52%' 
    },
    WordQuiz:{
        fontSize: 20
    },
    QuizContent:{
        fontWeight: 'bold',
        fontSize: 22,
        marginVertical: 15
    },
   
    defaultAnswer:{  marginBottom: 10,
        marginLeft: 20,
        fontSize: 17,
        borderRadius: 20,},
    selectedAnswer:{
        marginLeft: 20,
        fontSize: 17,
        borderRadius: 20,
        backgroundColor:colors.green
    },
    ButtonContainer:{ position: 'absolute', bottom: 20, flexDirection: 'row', justifyContent: 'flex-end', width: '100%', paddingHorizontal: '10%' },
    ButtonContainer2:{ position: 'absolute', bottom: 20, flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: '10%' },
    NextButton:{ 
        backgroundColor: colors.green, 
        width: '30%' 
    },
    NextButton:{ backgroundColor: colors.green, width: '30%' },
    ButtonText:{ color: 'black' }
        
})