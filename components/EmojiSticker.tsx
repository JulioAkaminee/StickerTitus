import { type ImageSource } from "expo-image";
import { View, StyleSheet } from "react-native";
import  Animated, {useAnimatedStyle, useSharedValue,withSpring}  from "react-native-reanimated";
import { Gesture,GestureDetector } from "react-native-gesture-handler";

type Props = {
    imageSize: number;
    stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
    const scaleImage = useSharedValue(imageSize);
    const doubleTap = Gesture.Tap().numberOfTaps(2).onStart(()=>{
        if(scaleImage.value !==imageSize *2){
            scaleImage.value = scaleImage.value *2
        }else{
            scaleImage.value = Math.round(scaleImage.value / 2);
        }
    });

    const imageStyle = useAnimatedStyle(()=> {
        return{
            width:withSpring(scaleImage.value),
            height: withSpring(scaleImage.value)
        }
    })
    return (
        <View style={styles.container}>
            <GestureDetector gesture={doubleTap}>

            <Animated.Image source={stickerSource} style={[{ width: imageSize, height: imageSize },imageStyle]} resizeMode="contain" />
            </GestureDetector>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: -350
    }
})


