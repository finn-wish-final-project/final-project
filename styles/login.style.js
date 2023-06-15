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
        borderRadius: 20,
        
        position: 'absolute',
        bottom: 35,
        right: 23,
        margin: 25,
        padding: 10,
            alignItems:'center',
            borderWidth:1.5,borderColor:"green",
            // marginTop:50,
        width:'25%',
        fontSize: 15,
        
            justifyContent:'center',
            // marginLeft:-33,
            // marginRight:45,
            // backgroundColor: 'darkgreen', //#B4DBB1
    }
  })