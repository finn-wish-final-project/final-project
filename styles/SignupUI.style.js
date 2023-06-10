import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container : {
    height : '100%',
    justifyContent: 'center',
  },
  textinput : {
    width:'70%' ,
    backgroundColor: 'transparent',
    marginBottom:20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button_back: {
    borderRadius: 15,
    padding: 10,
    width: "25%",
    height:"30%",
    alignItems:'center',
    marginTop:30,
    fontSize: 20,
    justifyContent:'center',
    marginLeft:55,
    marginRight:45,
    backgroundColor: '#B4DBB1', 
  },
  button_signup: {
    borderRadius: 15,
    padding: 10,
    width: "25%",
    height:"30%",
    alignItems:'center',
    marginTop:30,
    fontSize: 20,
    justifyContent:'center',
    marginLeft:35,
    marginRight:55,
    backgroundColor: '#30905B', 
  },
})