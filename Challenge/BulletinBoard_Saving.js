import React, { useState,useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Alert,TextInput } from 'react-native';
import { Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/BulletinBoard.style';
import { IP } from '../App';


  const BulletinBoard_Saving = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [userid,setuser_id] = useState('');
  const [boardid, setBoardid] = useState('');


   useEffect(() => {
    sendData_show();
   }, []);

// 게시판 보여주기 글목록들 
const sendData_show = async () => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      const data = { chal_type:1 };
  
      fetch(`http://${IP}:5000/board`, {
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

            setuser_id(result['access_token']);
            setPosts(result['result']);

          })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };




// 게시글 저장하기 (글 올리기)
  const sendData = async (newPostContent,newPostTitle) => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      const data = { chal_type:1, contents:newPostContent, title:newPostTitle };
  
      fetch(`http://${IP}:5000/board/save`, {
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
  
      fetch(`http://${IP}:5000/board/update`, {
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
      
      fetch(`http://${IP}:5000/board/delete`, {
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
      <Text style={styles.title}> 투자 챌린지 게시판</Text>
      </View>

      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.postList}
      />

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

        </View>
        </View>
      </Modal>
    </View>
    </View>
  );
};



export default BulletinBoard_Saving;