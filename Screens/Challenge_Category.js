// import React from 'react';
// import { Text, View, Image } from 'react-native';
// import styles from '../styles/Challenge_Category'
// import TouchableOpacity  from 'react-native/Libraries/Components/TouchableOpacity /TouchableOpacity ';
// import { useNavigation } from '@react-navigation/native';

// const Challenge_Category = () => {
//   const navigation = useNavigation();

//   const navigateToPage = (page) => {
//     // 페이지 이동 로직을 구현합니다.
//     // navigation.navigate(page)를 사용하여 다른 페이지로 이동합니다.
//     // 예시로 '저축' 텍스트를 클릭하면 'SavingsPage'로 이동하도록 설정합니다.
//     if (page === '저축') {
//       navigation.navigate('Challenge');
//     } else if (page === '투자') {
//       navigation.navigate('Challenge');
//     } else if (page === '무언가') {
//       navigation.navigate('Challenge');
//     }
//   };

//   return (
//     <>
//       <View style = {styles.background}>
//         <Text style = {styles.saying}>
//           {"\n"}처음에는 우리가 습관을 만들지만, {"\n"} 나중에는 습관이 우리를 만든다{"\n"}
//         </Text>
//         <View style = {styles.container}>
//           <Image source = {require('../static/img/challenge_category.png')} style = {styles.Img}/>
            
//           <TouchableOpacity  style={styles.textContainer1} onPress={() => navigateToPage('저축')}>
//             <Text style={styles.text}>저축</Text>
//           </TouchableOpacity >

//           <TouchableOpacity  style={styles.textContainer2} onPress={() => navigateToPage('투자')}>
//             <Text style={styles.text}>투자</Text>
//           </TouchableOpacity >

//           <TouchableOpacity  style={styles.textContainer3} onPress={() => navigateToPage('무언가')}>
//             <Text style={styles.text}>무언가</Text>
//           </TouchableOpacity >

//           <TouchableOpacity  style={styles.textContainer4} onPress={() => navigateToPage('무언가')}>
//             <Text style={styles.text}>무언가</Text>
//           </TouchableOpacity >
          
//         </View>
//       </View>
//     </>
//   )
// }

// export default Challenge_Category;




import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity  } from 'react-native';
import styles from '../styles/Challenge_Category';
import { useNavigation } from '@react-navigation/native';

const Challenge_Category = () => {
  const [currentPage, setCurrentPage] = useState('HomePage');

  function navigateToPage(page) {
    setCurrentPage(page);
  }

  // const navigation = useNavigation();

  // const navigateToPage = (page) => {
  //   if (page === '저축') {
  //     navigation.navigate('매점');
  //   } else if (page === '투자') {
  //     navigation.navigate('/Challenge');
  //   } else if (page === '무언가') {
  //     navigation.navigate('Challenge');
  //   }
  // };


  return (
    <View style={styles.background}>
      <Text style={styles.saying}>
        {"\n"}처음에는 우리가 습관을 만들지만, {"\n"} 나중에는 습관이 우리를 만든다{"\n"}
      </Text>
      <View style={styles.container}>
        <Image source={require('../static/img/challenge_category.png')} style={styles.Img} />

        <TouchableOpacity  style={styles.textContainer1} onPress={() => navigateToPage('./Challenge')}>
          <Text style={styles.text}>저축</Text>
        </TouchableOpacity >

        <TouchableOpacity  style={styles.textContainer2} onPress={() => navigateToPage('투자')}>
          <Text style={styles.text}>투자</Text>
        </TouchableOpacity >

        <TouchableOpacity  style={styles.textContainer3} onPress={() => navigateToPage('무언가')}>
          <Text style={styles.text}>무언가</Text>
        </TouchableOpacity >

        <TouchableOpacity  style={styles.textContainer4} onPress={() => navigateToPage('무언가')}>
          <Text style={styles.text}>무언가</Text>
        </TouchableOpacity >
      </View>
    </View>
  );
};

export default Challenge_Category;
