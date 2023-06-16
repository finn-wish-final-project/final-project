import { StyleSheet ,Dimensions } from 'react-native';

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
        backgroundColor: colors.yellowgreen,
        
    },
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scrollview:{
        flex:1,
    },
    exampleContainer: {
        paddingVertical: 30,
        
        
    },
    exampleContainerDark: {
        backgroundColor: colors.yellowgreen,
        
    },
    exampleContainerLight: {
        backgroundColor: '#FFFFFF'   //배경색
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent', //투명하게 
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 17.5,
        fontWeight: 'bold',
        textAlign: 'center'
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
        marginBottom:hp(13), // 내가 바라는거!
        
        // marginBottom:15, 
        overflow: 'visible' // for custom animations
    },
    // 카드 위치 조정
    sliderContentContainer: {
        paddingVertical: 50, // for custom animation
        
    },
    paginationContainer: {
        paddingVertical: 8,
        
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    menuBar: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: viewportHeight-800, 
        height: 70, //메뉴바 높이넓이
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor:colors.green,
        paddingTop: 10,
        backgroundColor:colors.green
      },
      menuButton: {
        paddingVertical: 5,
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
