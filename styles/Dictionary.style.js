import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  CardContainer: {
    elevation: 5, // 그림자
    borderRadius: 10,
    // borderWidth: 0.5,
    // borderColor: '#d6d7da', 
    margin: 20,
    height : 130,
    backgroundColor : '#DBEDE3', //
    display:'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    overflow: 'visible'
  },
  CardTitle: {
      width: '100%',
      fontWeight: 'bold',
      fontSize: 23,
      color : '#143C26',
      paddingHorizontal: 10,
      paddingBottom: 7,
      
  },
  CardContent: {
      width: '100%',
      color : '#507557',
      fontSize: 18,
      padding : 10,
      flexShrink: 1,
  },
})