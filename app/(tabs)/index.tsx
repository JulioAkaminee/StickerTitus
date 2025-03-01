import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useState,useRef } from "react";
import {captureRef} from "react-native-view-shot"
import { type ImageSource } from "expo-image";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import * as MediaLibrary from "expo-media-library";

import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";



const PlaceholderImage = require("@/assets/images/Young_Thug.webp");
 

 
export default function Index() {
 //Controles de estados
  const [selectImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [emojiPicker,setEmojiPicker] = useState<boolean>(false);
  const [pickedEmoji,setPickedEmoji] = useState<ImageSource | undefined>(undefined);
  const [status,requestPermission]= MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);

  if(status === null){
    requestPermission();
  }

  //Requisição Assíncronas
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });
   
    if (result.canceled){
      alert("Você não selecionou nenhuma imagem");
    } else {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    }
    
    };
  
      const onReset = () => {setShowAppOptions(false)};
      const onAddSticker = () => {setEmojiPicker(true)};
      const onCloseSticker = () => {setEmojiPicker(false)}
      const onSaveImageAsync = async () => {
        try{
          const localUri = await captureRef(imageRef,{
            height:440,
            quality: 1
          })
          await MediaLibrary.saveToLibraryAsync(localUri);
          if(localUri){
            alert("Saved!");
          }else{
            alert("Not Saved")
          }
        }catch (error){
          console.log(error);
        }
      }

  return (
    <GestureHandlerRootView style={styles.container}>

      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>

       
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectImage} />
       {pickedEmoji && (<EmojiSticker imageSize={40} stickerSource={pickedEmoji}/>)}
       </View>
      </View>

    {/* ? Significa verdadeiro e : Falso */}


    
      {showAppOptions ? (
        <View>
          <View style={styles.containerAppOptions}>
            <IconButton icon="refresh" label="Reset" onPress={onReset}/>
            <CircleButton onPress={onAddSticker} />     
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>       
          </View>
        </View> 
      ) : (
        <View style={styles.footerContainer}>
          <Button
            label="Choose a photo"
            theme="primary"
            onPress={pickImageAsync} // Ao pressionar, executa a função pickImageAsync
          />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)} 
          />
        </View>
      )}

      
      <TouchableWithoutFeedback onPress={onCloseSticker}>

      <EmojiPicker isVisible={emojiPicker} onClose={onCloseSticker}  >
      <EmojiList onCloseModal={onCloseSticker} onSelect={setPickedEmoji}/>
      </EmojiPicker>

      </TouchableWithoutFeedback>

    </GestureHandlerRootView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292E",
  },
  imageContainer: {
    flex: 1,
    marginTop: 25,
    paddingTop: 8,
    display:"flex",
    alignItems: "center",
    justifyContent:"center",
   
  },
  footerContainer: {
    marginBottom: 95,// é um terço da pagina
    alignItems: "center",
  },
  containerAppOptions:{
    display:"flex",
    flexDirection:"row",
    marginBottom:110
  }
});