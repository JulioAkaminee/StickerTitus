import { Image, ImageSource } from "expo-image";
import { View, StyleSheet } from "react-native";

type Props = {
    imageSize: number;
    stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
    return (
        <View style={styles.container}>
            <Image source={stickerSource} style={{ width: imageSize, height: imageSize }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: -350
    }
})


