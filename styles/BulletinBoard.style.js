import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    boardBack:{
        backgroundColor:'white',
        flex:1},
      container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
        borderWidth:2,
        borderColor:'darkgreen',
        borderRadius:15,
        margin:5,
      },
      titleContainer:{
        justifyContent:'center',
        alignItems:'center'
      },
    
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'black',
        margin: 16,
    
      },
      postList: {
        flex: 1,
        marginBottom: 16,
      },
      selectedPostBack:{
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'darkgreen',
        borderRadius:13,
        padding:10,
        height:'90%'
      },
      postItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      postTitle: {
        fontSize: 18,
        height:30,
        fontWeight:'bold',
        color:'black',
    
      },
      postContent: {
        fontSize: 15,
        color: 'gray',
      },
      modalContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        backgroundColor: 'white',
        
      },
      modalTitle: {
        fontSize: 24,
        padding:6,
        fontWeight: 'bold',
        marginBottom: 16,
        color:'black',
        textAlign:'left',
      },
      modalContent: {
        fontSize: 16,
        padding:6,
        marginBottom: 16,
        height:'50%'
      },
      modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: -40,
        marginTop:20,
        padding : 10
      },
      Buttons:{
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#28794D',
        borderRadius:15,
        marginTop:100,
        height:30, 
        margin:10,
        justifyContent:'center',
        alignItems:"center",
        width:'38%',
        marginLeft:2
    
    },
    Buttons2:{
        backgroundColor:'#28794D',
        borderWidth:1,
        borderColor:'#28794D',
        borderRadius:15,
        marginTop:100,
        height:30, 
        margin:10,
        justifyContent:'center',
        alignItems:"center",
        width:'38%',
        marginLeft:2
    },
    closeButton:{
      backgroundColor:'#28794D',
      borderRadius:15,
      height:30, 
      marginLeft : '-120%', 
       marginTop:145,
       justifyContent:'center',
       alignItems:"center",
       width:'100%'
      },
    WriteButton:{
      backgroundColor:'darkgreen',
      borderRadius:20,
      height:40,
      marginHorizontal:'35%',
      width:'30%',
      marginBottom:15,
      justifyContent:'center',
      alignItems:"center"
    },
      input: {
        marginBottom: 16,
        padding: 8,
        borderWidth: 1,
        borderColor: 'darkgreen',
        borderRadius: 10,
      },
      contentInput: {
        height: 120,
        textAlignVertical: 'top',
      },
})