import React from 'react';
import { Text, View, ScrollView ,Image} from 'react-native';
import { Divider} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/Store.style'
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

function Store(){
    const stores = [
        {
          name: "빽다방",
          item: "아이스크림 카페라떼",
          price: "3700🍀",
          image: require('../static/img/bbackdabang.png')
        },
        {
          name: "이디야커피",
          item: "아메리카노 ICED 커피",
          price: "3200🍀",
          image: require('../static/img/ediya.jpg')
        },
        {
            name: "GS",
            item: "gs 1000원권",
            price: "1000🍀",
            image: require('../static/img/gs1000.png'),
            style: styles.StoreImg2 // gs 1000원권 이미지에 적용될 스타일
          },
          {
            name: "GS",
            item: "gs 3000원권",
            price: "3000🍀",
            image: require('../static/img/gs3000.png'),
            style: styles.StoreImg2 // gs 3000원권 이미지에 적용될 스타일
          },
        {
          name: "하삼동",
          item: "아메리카노 커피",
          price: "1500🍀",
          image: require('../static/img/hasamdong.jpg')
        },
        {
          name: "MEGA coffee",
          item: "아메리카노 커피",
          price: "1500🍀",
          image: require('../static/img/mega.jpg')
        },
        {
          name: "the Venti",
          item: "아메리카노 커피",
          price: "1500🍀",
          image: require('../static/img/theVenti.jpg')
        }
      ];
    const navigation = useNavigation();

    const handleItemPress = (store) => {
      navigation.navigate('Purchase',{ item: store });
    }
    return(
        <>
            <ScrollView>
            <>
                {stores.map((store, index) => (
                    <React.Fragment key={index}>
                    <View style={styles.CardContainer} onPress={() => handleItemPress(store)}>
                        <View style={styles.ChallengeContainer1}>
                        <Image style={[styles.StoreImg, store.style]} source={store.image} />

                        <View>
                            <Text style={styles.StoreName}>{store.name}</Text>
                            <Text style={styles.StoreItem}>{store.item}</Text>
                            <Text style={styles.StorePrice}>{store.price}</Text>
                        </View>
                        </View>
                    </View>
                    {index !== stores.length - 1 && (
                        <Divider style={{ borderWidth: 0.5, borderColor: 'grey' }} width={'100%'} />
                    )}
                    </React.Fragment>
                ))}
            </>
            </ScrollView>
        </>
    );
}

const Purchase = ({ route }) => {
  const { item } = route.params;

  return (
    <View>
      <Image source={item.image} />
      <Text>{item.name}</Text>
      <Text>{item.item}</Text>
      <Text>{item.price}</Text>
    </View>
  );
};


const Store_Stack = () => {
  return (
    <Stack.Navigator>
            <Stack.Screen name="Purchase" component={Purchase} options={{ headerShown: false }}/>

      <Stack.Screen name="Store_Home" component={Store} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default Store;