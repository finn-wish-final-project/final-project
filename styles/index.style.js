import { StyleSheet,Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
function hp (percentage){
    const value = (percentage * viewportHeight) /100;
    return Math.round(value);
}
// 색깔이름 들어간 부분도 다 바꿔줘야함
export const colors = {
    yellowgreen: '#28794D',
    green: '#CBE6D7',
    background: '#FFFFFF',
};

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.yellowgreen
    },
    container: {
        flex: 1,
        backgroundColor: colors.background
    },

    exampleContainer: {
        paddingVertical: 30
    },
    exampleContainerDark: {
        backgroundColor: colors.yellowgreen
    },
    exampleContainerLight: {
        backgroundColor: '#FFFFFF'   //배경색
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent', //투명하게 
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    titleDark: {
        color: colors.yellowgreen
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 15,
        marginBottom:wp(20), // 내가 바라는거!
        
        // marginBottom:15, 
        overflow: 'visible' // for custom animations
    },
    // 카드 위치 조정
    sliderContentContainer: {
        paddingVertical: "15%",
        
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    menuBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingTop: 10,
        paddingBottom:5,
        backgroundColor:colors.green
      },
      menuButton: {
        paddingVertical: 10,
      },
      menuButtonText: {
        fontSize: 16,
      },
    logoImage : {
        height : 25,
        width : 25
      },
      toggleArea : {
        position : 'absolute',
        zIndex: 999,
        right : 30,
        height : 30,
        width : 30,
        top : 50,
        // backgroundColor : '#ffff00'
      },
      toggleImage : {
        height : 20,
        width : 20,
      }
});