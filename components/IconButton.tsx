import { Pressable, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props ={
    label: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    onPress:() => void;
}

export default function IconButton({icon,label,onPress}: Props){
    return(
        <Pressable onPress={onPress styles={styles.IconButton}}>
            <MaterialIcons name={icon} size={24} color={"#FFF"}/>
            <Text> {label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    IconButton:{
        justifyContent:"center",
        alignItems: "center"
    },
    IconButtonLabel:{
        color:"#FFF",
        marginTop: 12,

    }
})