import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput, Button, Alert } from 'react-native';

const BoardScreen = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

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
      content: newPostContent,
    };

    setPosts([...posts, newPost]);
    setNewPostTitle('');
    setNewPostContent('');
    setIsModalOpen(false);
  };

  const handleEditPost = () => {
    setIsModalOpen(true);
    setNewPostTitle(selectedPost.title);
    setNewPostContent(selectedPost.content);
  };

  const handleUpdatePost = () => {
    const updatedPosts = posts.map((post) => {
      if (post.id === selectedPost.id) {
        return { ...post, title: newPostTitle, content: newPostContent };
      }
      return post;
    });

    setPosts(updatedPosts);
    setNewPostTitle('');
    setNewPostContent('');
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const handleDeletePost = () => {
    Alert.alert('게시글 삭제', '정말로 삭제하시겠습니까?', [
      { text: '취소' },
      {
        text: '삭제',
        onPress: () => {
          const updatedPosts = posts.filter((post) => post.id !== selectedPost.id);
          setPosts(updatedPosts);
          setSelectedPost(null);
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.postItem} onPress={() => handlePostPress(item)}>
      <Text style={styles.postTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>게시판</Text>

      <Button title="게시글 작성" onPress={handleAddPost} />

      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.postList}
      />

      <Modal visible={!!selectedPost} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedPost?.title}</Text>
          <Text style={styles.modalContent}>{selectedPost?.content}</Text>
          <View style={styles.modalButtons}>
            <Button title="수정" onPress={handleEditPost} />
            <Button title="삭제" onPress={handleDeletePost} />
          </View>
          <Button title="닫기" onPress={() => setSelectedPost(null)} />
        </View>
      </Modal>

      <Modal visible={isModalOpen} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedPost ? '게시글 수정' : '게시글 작성'}</Text>
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
          <Button
            title={selectedPost ? '수정하기' : '저장하기'}
            onPress={selectedPost ? handleUpdatePost : handleSavePost}
          />
          <Button title="취소" onPress={() => setIsModalOpen(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  postList: {
    flex: 1,
    marginBottom: 16,
  },
  postItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  postTitle: {
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalContent: {
    fontSize: 16,
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  contentInput: {
    height: 120,
    textAlignVertical: 'top',
  },
};

export default BoardScreen;
