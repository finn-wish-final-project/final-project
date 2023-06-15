import { StyleSheet  } from 'react-native';

export default StyleSheet.create({
    CardContainer: {
        // elevation: 5, // 그림자
        borderRadius: 0,
        // borderWidth: 0.5,
        borderColor: 'darkgrey', 
        height : '10%',
        backgroundColor : '#ffffff',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    StoreImg:{
        width : 150,
      height : 140,
      borderWidth: 0.5,
        // borderColor: 'darkgrey', 
        marginLeft:'-25%',
        marginBottom:5
    },
    ChallengeContainer1 : {
        marginTop : 10,
        flexDirection: 'row',
        alignItems: 'center',
        // marginLeft:'20%'
    },

    StoreName:{
        marginLeft:15,
        marginTop:-20
    },
    StoreItem:{
        marginTop:10,
        marginLeft:15,
    },
    StorePrice:{
        marginTop:40,
        marginLeft:15,
        fontWeight:'bold',
        fontSize:16
    },
    StoreImg2:{
        width : 140,
      height : 100,
      borderWidth: 0.5,
        // borderColor: 'darkgrey', 
        marginLeft:'-33%',
        marginVertical: 15
    }

})