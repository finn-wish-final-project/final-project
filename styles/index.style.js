import { StyleSheet } from 'react-native';

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
        // marginBottom:15, 
        overflow: 'visible' // for custom animations
    },
    // 카드 위치 조정
    sliderContentContainer: {
        paddingVertical: 50 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    }
});