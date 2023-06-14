import { StyleSheet, Dimensions } from "react-native";
import { fontConfig } from "react-native-paper/lib/typescript/src/styles/fonts";
import { color } from "react-native-reanimated";


export default StyleSheet.create({
  container : {
    backgroundColor: 'white',
    height: '100%',
    
  },
  lineContainer:{
    borderColor:'darkgreen',borderRadius:15,marginHorizontal:5,
    borderWidth:2},
  title : {
    fontSize : 23,
    color : 'black',
    textAlign : 'center',
    fontWeight : 'bold',
    marginVertical : 15
  },
  img : {
    height : 300,
    width : 390,
    borderRadius : 10, 
    margin : 2,
  },
  text : {
    fontFamily : '12롯데마트드림Medium',
    fontSize : 18,
    flexWrap : 'wrap',
    overflow : 'hidden',
    color : 'black',
    marginHorizontal : 15
    // maxWidth: Dimensions.get('window').width - 230,
  },
  small_title : {
    fontSize : 23,
    fontWeight : 'bold',
    color : 'black',
    marginVertical : 10,
    marginLeft : 10
  },
  textcontainer : {
    flexDirection : 'column',
    maxWidth: Dimensions.get('window').width - 230,
    marginLeft : 10
  },
  text2 : {
    fontSize : 19,
    flexWrap : 'wrap',
    overflow : 'hidden',
    color : 'black',
    marginHorizontal : 15,
    marginTop : 5,
  },
  text3 : {
    fontSize : 19,
    flexWrap : 'wrap',
    overflow : 'hidden',
    color : 'black',
    marginHorizontal : 15,
    marginTop : 5,
    borderRadius:10,
    padding:2,
    marginBottom:10,
    backgroundColor:'rgba(105,188,115,0.2)'
  },
  text_bold : {
    fontSize : 19,
    flexWrap : 'wrap',
    overflow : 'hidden',
    color : 'black',
    marginHorizontal : 15,
    fontWeight : 'bold'
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: 'darkgreen',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: '25%',
    margin : 17
  },
  disabledButton : {
    width: 200,
    height: 50,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: '25%',
    margin : 17
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize : 17
  },
}) 