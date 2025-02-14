import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Stack } from "expo-router";
 
const PlacehoderImage = require("@/assets/images/Young_Thug.webp");
 
export default function Index() {



  const [selectImage, setSelectedImage] = useState<string | undefined>(undefined);
  //Requisição Assíncronas
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });
 
    if (!result.canceled){
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("Você não selecionou nenhuma imagem");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlacehoderImage} selectedImage={selectImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
    </View>
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
  },
  footerContainer: {
    flex: 1 / 3,// é um terço da pagina
    alignItems: "center",
  },
});