import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ChallengeCardContainer : {
    elevation: 5, // 그림자
    borderRadius: 10,
    margin: 20,
    height : 220,
    backgroundColor : '#ffffff',
    display:'flex',
    justifyContent: 'center',
    // overflow: 'visible'
    borderWidth: 0.8,
    borderColor: 'darkgreen', 
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
    padding : 7,
    flexShrink: 1,
  },
  ChallengeImg : {
      width : 150,
      height : 140,
      marginLeft : 10,    
      borderRadius : 7,
      marginBottom : 17    
  },
  ChallengeContainer1 : {
      marginTop : 10,
      flexDirection: 'row',
      alignItems: 'center',
  },
  ChallengeContainer2 : {
      marginTop : 10,
      flexDirection: 'row',
      alignItems: 'center',
  },
  ChallengeTxt : {
      flexDirection: 'column',
      flexShrink: 1,
      marginBottom : 20
  },
  Point : {
    marginLeft:-75,
    fontSize : 15
  }
});