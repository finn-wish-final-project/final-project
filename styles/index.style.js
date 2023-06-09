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
        backgroundColor:'black'
    },

    exampleContainer: {
        paddingVertical: 30,
        
        
        
    },
    exampleContainerDark: {
        backgroundColor: colors.yellowgreen,
        
    },
    exampleContainerLight: {
        backgroundColor: '#FFFFFF',   //배경색
        // height:90
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
        marginTop: 0, // 뉴스 때문에 15 -> 0 변경함
        marginBottom:hp(13), // 내가 바라는거!
        
        // marginBottom:15, 
        overflow: 'visible' // for custom animations
    },
    // 카드 위치 조정
    sliderContentContainer: {
        paddingVertical: 40, // 뉴스 때문에 50 -> 40 변경함
        
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
     // 사전
      CardContainer: {
        elevation: 5, // 그림자
        borderRadius: 10,
        // borderWidth: 0.5,
        // borderColor: '#d6d7da', 
        margin: 20,
        height : 130,
        backgroundColor : '#DBEDE3',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    CardTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 23,
        color : '#143C26',
        paddingHorizontal: 10,
        paddingBottom: 7
    },
    CardContent: {
        width: '100%',
        color : '#507557',
        fontSize: 18,
        paddingHorizontal : 10
    },
});

