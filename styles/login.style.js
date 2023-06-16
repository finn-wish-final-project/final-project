import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container : {
        height : '100%',
        justifyContent: 'center',
    },
    input: {
        marginTop: '50%',
        alignItems:'center',
        borderRadius: 5,
        
      },
    button: {
            borderRadius: 30,
            padding: 10,
            width: "70%",
            height:"15%",
            alignItems:'center',
            marginTop:60,
            fontSize: 20,
            justifyContent:'center',
            backgroundColor: '#B4DBB1',
        },

    button2: {
        borderRadius: 30,
        padding: 10,
        width: "70%",
        height:"15%",
        alignItems:'center',
        marginTop:20,
        fontSize: 20,
        justifyContent:'center',
        backgroundColor: '#30905B',
    
    },

    buttonContainer_sign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    },
    button_sign: {
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
        
    button2_sign: {
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
                    
    button_back:{
        borderRadius: 15,
            padding: 10,
            // alignItems:'center',
            // marginTop:-20,
            fontSize: 15,
            // position:'absolute',
            // justifyContent:'center',
            // marginRight:45,
            marginBottom:20,
            backgroundColor: 'darkgreen', //#B4DBB1
    }
  })