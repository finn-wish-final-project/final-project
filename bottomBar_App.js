import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const CardSlider = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cards = [
    { id: 1, title: 'Card 1', image: require('C:/Users/PC3/finnwish/finnwish/googlelogo.png') },
    { id: 2, title: 'Card 2', image: require('C:/Users/PC3/finnwish/finnwish/googlelogo.png') },
    { id: 3, title: 'Card 3', image: require('C:/Users/PC3/finnwish/finnwish/googlelogo.png') },
  ];

  const handleCardPress = (index) => {
    setCurrentCard(index);
  };

  return (
    <View style={styles.container}>
      {/* <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const cardIndex = Math.round(offsetX / window.width);
          setCurrentCard(cardIndex);
        }}
      >
        {cards.map((card, index) => (
          <TouchableOpacity
            key={card.id}
            style={[styles.card, currentCard === index && styles.activeCard]}
            onPress={() => handleCardPress(index)}
          >
            <Image source={card.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{card.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView> */}

      <View style={styles.menuBar}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>메뉴 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>메뉴 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>메뉴 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 20,
  },
  card: {
    width: window.width,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  activeCard: {
    backgroundColor: 'lightblue',
  },
  cardImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  menuButton: {
    paddingVertical: 5,
  },
  menuButtonText: {
    fontSize: 16,
  },
  customTextContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  }
});

export default CardSlider;