import { StyleSheet, Dimensions } from "react-native";
import { fontConfig } from "react-native-paper/lib/typescript/src/styles/fonts";
import { color } from "react-native-reanimated";


export default StyleSheet.create({
  container : {
    backgroundColor: 'white',
    height: '100%',
  },
  contentcontainer : {
    flexDirection: 'row',
    // paddingHorizontal: 10,
  },
  title : {
    fontSize : 23,
    color : 'black',
    textAlign : 'center',
    fontWeight : 'bold',
    marginVertical : 15
  },
  img : {
    height : 300,
    width : 200,
    borderRadius : 10, 
    margin : 10,
  },
  text : {
    fontSize : 18,
    flexWrap : 'wrap',
    overflow : 'hidden',
    color : 'black'
    // maxWidth: Dimensions.get('window').width - 230,
  },
  small_title : {
    fontSize : 20,
    fontWeight : 'bold',
    color : 'black',
    marginTop : 10,
    marginBottom : 10
  },
  textcontainer : {
    flexDirection : 'column',
    maxWidth: Dimensions.get('window').width - 230,
    marginLeft : 10
  },
  text2 : {
    fontSize : 17,
    flexWrap : 'wrap',
    overflow : 'hidden',
    color : 'black',
    marginHorizontal : 15,
    marginTop : 5
  },
  text_bold : {
    fontSize : 17,
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
    margin : 15
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
}) 