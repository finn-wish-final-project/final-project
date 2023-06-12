import { StyleSheet  } from 'react-native';

export default StyleSheet.create({
    article:{
      marginTop:15,
      fontSize:18
    },
    ButtonContainer:{ 
      bottom: 0, 
      flexDirection: 'row', 
      justifyContent: 'flex-start', 
      width: '100%', 
      paddingHorizontal: '5%'},
    ScrapButton:{
      backgroundColor:'#3B883E',
      borderRadius:20,
      width:130,
      marginTop:10,
      height:30,
      textAlign:'center',
      paddingTop:5,
      color:'white',
      marginLeft:-28
    },
    CloseButton:{
      
        backgroundColor:'#2F782F',
        borderRadius:20,
        width:130,
        marginTop:10,
        marginLeft:85,
        height:30,
        textAlign:'center',
        paddingTop:5,
        color:'white',
      },
      textStyle:{
        color:'green',
        // marginTop:'68%',
        textAlign:'center',
        fontSize:25,
        zIndex:1000
      },
      dialogContainer:{
        borderWidth:2,
        borderColor:'darkgreen',
        backgroundColor:'lightgrey',
        marginHorizontal:20, // 뉴스 컨테이너 넓이
        marginTop:-360,
        marginBottom:10,
        justifyContent:'flex-start',
        textAlign:'center',
        height: '195%',
        // flex:1
      },
})