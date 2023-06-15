import React, { useState,useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput, Button, Alert } from 'react-native';
import { Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BoardScreen_Education = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [userid,setuser_id] = useState('');
  //게시판

  const [boardid, setBoardid] = useState('');

  // console.log('posts',posts);
  console.log('selectedPost',selectedPost);
  



   useEffect(() => {
    sendData_show();
   }, []);

// 게시판 보여주기 글목록들 -clear
const sendData_show = async () => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      const data = { chal_type:3 };
  
      fetch('http://192.168.0.111:5000/board', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': '{{csrf_token}}',
          'Authorization': `Bearer ${access_token}`
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((result) => {
            // console.log(result.map(result));
            setuser_id(result['access_token']);
            setPosts(result['result']);
            // setBoardid(result[0]['boardid'])
          })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };




// 게시글 저장하기 (글 올리기)- 완벽
  const sendData = async (newPostContent,newPostTitle) => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      const data = { chal_type:3, contents:newPostContent, title:newPostTitle };
  
      fetch('http://192.168.0.111:5000/board/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': '{{csrf_token}}',
          'Authorization': `Bearer ${access_token}`
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((result) => {
            if (result['msg']){
                alert(result['msg']);
                sendData_show();
            }
          })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };

// 수정하기 
  const sendData_update = async (userid,boardid,newPostContent,newPostTitle) => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      const data = { userid:userid, boardid:boardid,contents:newPostContent, title:newPostTitle };
  
      fetch('http://192.168.0.111:5000/board/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': '{{csrf_token}}',
          'Authorization': `Bearer ${access_token}`
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((result) => {

            if (result['msg']){
                alert(result['msg']);
                sendData_show();
            }
          })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };

// 삭제하기
  const sendData_delete = async (boardid) => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      const data = { boardid:boardid };
      console.log('delete1');
      fetch('http://192.168.0.111:5000/board/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': '{{csrf_token}}',
          'Authorization': `Bearer ${access_token}`
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((result) => {
           
            if (result['msg']){
                alert(result['msg']);
                sendData_show();

            }
          })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };






// fetch 전 원래 함수들
  const handlePostPress = (post) => {
    setSelectedPost(post);
  };

  const handleAddPost = () => {
    setIsModalOpen(true);
  };

  // 글쓰기
  const handleSavePost = () => {
    const newPost = {
    //   id: Date.now().toString(),
      userid: userid,
      title: newPostTitle,
      contents: newPostContent,
    };

    setPosts([...posts, newPost]);
    setNewPostTitle('');
    setNewPostContent('');
    sendData(newPost['contents'],newPost['title']);
    setIsModalOpen(false);

  };

  const handleEditPost = () => {
    
    setIsModalOpen(true);
    setBoardid(selectedPost.boardid);
    setNewPostTitle(selectedPost.title);
    setNewPostContent(selectedPost.contents);

  };

  const handleUpdatePost = () => {
    const updatedPosts = posts.map((post) => {
      if (post.userid === selectedPost.userid) {
        return { ...post, boardid: boardid,title: newPostTitle, contents: newPostContent };
      }
      return post;
    });

    setPosts(updatedPosts);
    setBoardid('');
    setNewPostTitle('');
    setNewPostContent('');
    setSelectedPost(null);
    sendData_update(userid,boardid, newPostContent, newPostTitle);
    setIsModalOpen(false);

  };

  const handleDeletePost = () => {
    Alert.alert('게시글 삭제', '정말로 삭제하시겠습니까?', [
      { text: '취소' },
      {
        text: '삭제',
        onPress: () => {
          const updatedPosts = posts.filter((post) => post.boardid !== selectedPost.boardid);

          // setBoardid(selectedPost.boardid);
          setPosts(updatedPosts);
          sendData_delete(selectedPost.boardid);
          setSelectedPost(null);
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    
    <TouchableOpacity style={styles.postItem} onPress={() => handlePostPress(item)}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postContent}>{item.contents.length > 50 ? item.contents.slice(0, 50) + '...' : item.contents}</Text>

    </TouchableOpacity>
  );

  return (
    <View style={{backgroundColor:'white',flex:1}}>
    <View style={styles.container}>
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.title}> 교육 챌린지 게시판</Text>
      </View>
      {/* <TouchableOpacity style={{backgroundColor:'darkgreen',borderRadius:15,height:30,margin:10,marginBottom:40,justifyContent:'center',alignItems:"center"}}  onPress={handleAddPost}>
        <Text style={{color:'white'}}>게시글 작성</Text>
        </TouchableOpacity> */}

      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.postList}
      />
{/* yellowgreen: '#28794D',
    green: '#CBE6D7', */}
      <Modal visible={!!selectedPost} animationType="slide">
        <View style={styles.modalContainer}>
        <View style={{backgroundColor:'white',borderWidth:1,borderColor:'darkgreen',borderRadius:13,padding:10,height:'90%'}}>
          <Text style={styles.modalTitle}>{selectedPost?.title}</Text>
          <Divider style={{ borderWidth: 1, marginHorizontal: 0,color:'grey' }}/>
          <Text style={styles.modalContent}>{selectedPost?.contents}</Text>
          
          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.Buttons}   onPress={handleEditPost}>
                <Text style={{color:'black'}}>수정</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Buttons} onPress={handleDeletePost}>
                <Text style={{color:'black'}}>삭제</Text>
            </TouchableOpacity>
          {/* <View style={{marginBottom:-40}}>
           
            </View> */}
            <TouchableOpacity style={{backgroundColor:'#28794D',borderRadius:15,height:30, marginLeft : '-120%',  marginTop:145,justifyContent:'center',alignItems:"center",width:'100%'}} onPress={() => setSelectedPost(null)}>
                <Text style={{color:'white'}}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </Modal>
        <TouchableOpacity style={{backgroundColor:'darkgreen',borderRadius:20,height:40,marginHorizontal:'35%',width:'30%',marginBottom:15,justifyContent:'center',alignItems:"center"}}  onPress={handleAddPost}>
            <Text style={{color:'white',fontSize:17}}>글 쓰기</Text>
        </TouchableOpacity>


      <Modal visible={isModalOpen} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedPost ? '글 수정' : '글 쓰기'}</Text>
          <TextInput
            style={styles.input}
            placeholder="제목"
            value={newPostTitle}
            onChangeText={setNewPostTitle}
          />
          <TextInput
            style={[styles.input, styles.contentInput]}
            placeholder="내용"
            multiline
            value={newPostContent}
            onChangeText={setNewPostContent}
          />
          <View style={{ flexDirection: 'row',
        justifyContent: 'space-around'}}>
        <TouchableOpacity style={styles.Buttons2} onPress={() => setIsModalOpen(false)}>
        <Text style={{color:'white'}}>취소하기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Buttons2} onPress={selectedPost ? handleUpdatePost : handleSavePost}>
        <Text style={{color:'white'}}>{selectedPost ? '수정하기' : '저장하기'}</Text>
        </TouchableOpacity>

       {/* userid */}
        </View>
        </View>
      </Modal>
    </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
    borderWidth:2,
    borderColor:'darkgreen',
    borderRadius:15,
    margin:5,
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
};

export default BoardScreen_Education;