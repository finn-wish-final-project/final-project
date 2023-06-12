import { StyleSheet } from 'react-native';

export default StyleSheet.create ({
  background : {
    backgroundColor : 'white',
  },
  container : {
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : '30%',
    marginBottom : '40%',
    backgroundColor : 'white',
    // position : absolu
  },
  saying : {
    textAlign : 'center',
    backgroundColor : '#4E7C48',
    color : 'white', 
    fontSize : 18
  },
  Img : {
    width : 380,
    height : 380,
  },

  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  textContainer1: {
    position: 'absolute',
    top: 83,
    alignItems: 'center',
  },
  textContainer2: {
    position: 'absolute',
    top: 177,
    right : 90,
    alignItems: 'center',
  },
  textContainer3: {
    position: 'absolute',
    top: 177,
    left : 90,
    alignItems: 'center',
  },
  textContainer4: {
    position: 'absolute',
    bottom : 83,
    alignItems: 'center',
  },
})