import React, { useState,useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput, Button, Alert } from 'react-native';
import { Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/BulletinBoard.style'
import { IP } from '../App';

const BoardScreen_Education = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [userid, setAccess_token] = useState('');


  // console.log('1.posts',posts);
  // console.log('2.selectedPost',selectedPost);
  // console.log('3.isModalOpen',isModalOpen);
  // console.log('4.newPostTitle',newPostTitle);
  // console.log('5.newPostContent',newPostContent);
  // 1: saving
  // 2: invest
  // 3: education

  useEffect(() => {
    board_show();
  }, []);

  // 게시판 보여주기 글목록들 -clear
  const board_show = async () => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      const data = { chal_type:2 };
      
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
            console.log(result);
            setPosts(result['result']);
            setAccess_token(result['access_token']);
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
  const saveData = async (newPostContent,newPostTitle) => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      const data = { chal_type:2, contents:newPostContent, title:newPostTitle };
      
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
            }
          })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
// 게시판 수정
  const updateData = async (selectedPost) => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');

      const data = { chal_type:2, boardid:selectedPost['boardid'], contents:selectedPost['contents'], title:selectedPost['title'], userid : selectedPost['userid'] };

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
            }
          })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlePostPress = (post) => {
    setSelectedPost(post);
  };

  const handleAddPost = () => {
    setIsModalOpen(true);
  };

  const handleSavePost = () => {
    const newPost = {
      id: Date.now().toString(),
      title: newPostTitle,
      contents: newPostContent,
    };

    setPosts([...posts, newPost]);
    setNewPostTitle('');
    setNewPostContent('');
    setIsModalOpen(false);
    saveData(newPost['contents'],newPost['title'])

  };

  const handleEditPost = () => {
    setIsModalOpen(true);
    setNewPostTitle(selectedPost.title);
    setNewPostContent(selectedPost.contents);
  };

  const handleUpdatePost = () => {
    const updatedPosts = posts.map((post) => {
      if (userid === selectedPost.userid) {
        return { ...post, title: newPostTitle, contents: newPostContent };
      }
      return post;
    });

    setPosts(updatedPosts);
    setNewPostTitle('');
    setNewPostContent('');
    setIsModalOpen(false);
    setSelectedPost(null);
    updateData(selectedPost);
  };

  const handleDeletePost = () => {
    Alert.alert('게시글 삭제', '정말로 삭제하시겠습니까?', [
      { text: '취소' },
      {
        text: '삭제',
        onPress: () => {
          const updatedPosts = posts.filter((post) => post.userid !== selectedPost.userid);
          setPosts(updatedPosts);
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
    <View style={styles.boardBack}>
    <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}> 투자 챌린지 게시판</Text>
      </View>
      {/* <TouchableOpacity style={{backgroundColor:'darkgreen',borderRadius:15,height:30,margin:10,marginBottom:40,justifyContent:'center',alignItems:"center"}}  onPress={handleAddPost}>
        <Text style={{color:'white'}}>게시글 작성</Text>
        </TouchableOpacity> */}

      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.boardid}
        style={styles.postList}
      />
{/* yellowgreen: '#28794D',
    green: '#CBE6D7', */}
      <Modal visible={!!selectedPost} animationType="slide">
        <View style={styles.modalContainer}>
        <View style={styles.selectedPostBack}>
          <Text style={styles.modalTitle}>{selectedPost?.title}</Text>
          <Divider style={{ borderWidth: 1, marginHorizontal: 0,color:'grey' }}/>
          <Text style={styles.modalContent}>{selectedPost?.contents}</Text>
          
          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.Buttons}  onPress={handleEditPost}>
                <Text style={{color:'black'}}>수정</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Buttons} onPress={handleDeletePost}>
                <Text style={{color:'black'}}>삭제</Text>
            </TouchableOpacity>
          {/* <View style={{marginBottom:-40}}>
           
            </View> */}
            <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedPost(null)}>
                <Text style={{color:'white'}}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </Modal>
        <TouchableOpacity style={styles.WriteButton}  onPress={handleAddPost}>
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



export default BoardScreen_Education;