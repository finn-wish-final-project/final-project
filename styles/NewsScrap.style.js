import { StyleSheet  } from 'react-native';

export default StyleSheet.create({
    // 뉴스 스크랩
    ArticleText:{
        fontSize:17,
        marginTop:15,
    
    },
    ScrollArea: {
      borderWidth: 1,
      borderColor: 'lightgrey',
    },
    CardContainer: {
        elevation: 5, // 그림자
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'darkgrey', 
        margin: 15,
        height : 100,
        backgroundColor : '#ffffff',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    CardTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        color : '#143C26',
        paddingHorizontal: 10,
        paddingBottom: 7
    },
    CardContent: {
        width: '100%',
        color : '#507557',
        fontSize: 18,
        paddingHorizontal : 10
    },
    dialogContainer:{
      height : 630,
        borderWidth:1.5,
        borderColor:'black',
        backgroundColor:'lightgrey',
        marginHorizontal:15, // 뉴스 컨테이너 넓이
        marginTop:-7,
        marginBottom:10,
      //   justifyContent:'flex',
        textAlign:'center',
        // height: '100%',
        // flex:1
      },
      CloseButton:{
        padding : 7,
        backgroundColor:'grey',
        borderRadius:30,
        marginTop:10,
        textAlign:'center',
        color:'white'
      },
})