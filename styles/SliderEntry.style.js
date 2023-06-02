import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from './index.style';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
//카드 크기
const slideHeight = viewportHeight * 0.6;  //0.36 카드 높이
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 10;  //모서리 기본값

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },
    


    textContainer: {
        ...StyleSheet.absoluteFillObject,  //내용을 container에 꽉 채우기
        justifyContent: 'center',  //글자 중간
        paddingTop: 20 - entryBorderRadius, 
        paddingBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: colors.green, //2번(짝수)카드색
        borderBottomLeftRadius: entryBorderRadius,  //모서리 둥글게
        borderBottomRightRadius: entryBorderRadius,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    textContainerEven: {
        backgroundColor: colors.yellowgreen //바탕색
    },
    title: {
        color: colors.yellowgreen, //글자색
        fontSize: wp(10),
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    titleEven: {
        color: 'white'
    },
    subtitle: {
        marginTop: 30,
        color: colors.yellowgreen,
        fontSize: wp(5.5),
        fontStyle: 'italic'
    },
    subtitleEven: {
        color: 'white'
    }
});