import { StyleSheet  } from 'react-native';

export default StyleSheet.create({
    CloseButton:{
        backgroundColor:'darkgreen',
        borderRadius:30,
        marginTop:10,
        textAlign:'center',
        color:'white'
      },
      textStyle:{
        color:'green',
        // marginTop:'68%',
        textAlign:'center',
        fontSize:18,
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