import React, { useState } from 'react';
import { FlatList, StyleSheet, Pressable, Platform } from 'react-native';
import { Image  } from 'expo-image';
import type { ImageSource } from 'expo-image';



type Props = {
    onSelect: (image: ImageSource) => void;
    onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
   
const [emoji] = useState<ImageSource[]>([
    require('@/assets/images/emojis/emoji1.png'),
    require('@/assets/images/emojis/emoji2.png'),
    require('@/assets/images/emojis/emoji3.png'),
    require('@/assets/images/emojis/emoji4.png'),
    require('@/assets/images/emojis/emoji5.png'),
    require('@/assets/images/emojis/emoji6.png'),
    require('@/assets/images/emojis/emoji1.png'),
    require('@/assets/images/emojis/emoji2.png'),
    require('@/assets/images/emojis/emoji3.png'),
    require('@/assets/images/emojis/emoji4.png'),
    require('@/assets/images/emojis/emoji5.png'),
    require('@/assets/images/emojis/emoji6.png'),
    require('@/assets/images/emojis/emoji1.png'),
    require('@/assets/images/emojis/emoji2.png'),
    require('@/assets/images/emojis/emoji3.png'),
    require('@/assets/images/emojis/emoji4.png'),
    require('@/assets/images/emojis/emoji5.png'),
    require('@/assets/images/emojis/emoji6.png'),
]);
  

    return (
        <FlatList
            showsHorizontalScrollIndicator={Platform.OS === "web"}
            data={emoji}
            renderItem={({ item, index }) => (
                <Pressable onPress={()=>{
                    onSelect(item);
                    onCloseModal();
                }}>
                    <Image style={styles.emoji} key={index} source={item}/>
                </Pressable>
            )}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: "row",
      alignItems:"center",
      flexWrap:"wrap"
    },
    emoji: {
        width: 40,
        height: 40,
        margin:10 ,
     
    },

});
