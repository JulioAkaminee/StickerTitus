import { MaterialIcons } from "@expo/vector-icons";
import { PropsWithChildren } from "react";
import { Modal, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";



type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, onClose, children }: Props) {
    return (
        <Modal visible={isVisible} animationType="slide" transparent={true}>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay}>
                        <View style={styles.modalContent}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>Choose a sticker</Text>
                                <Pressable onPress={onClose} style={styles.closeButton}>
                                    <MaterialIcons name="close" color="#FFF" size={24} />
                                </Pressable>
                            </View>
                            {children}
                           
                        </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "flex-end", 
    },
    modalContent: {
        height: "25%",
        width: "100%",
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        backgroundColor: "#25292E",
        position: "absolute",
        bottom: 0,
    },
    titleContainer: {
        height: "16%",
        backgroundColor: "#464C55",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        color: "#FFF",
        fontSize: 16,
    },
    closeButton: {
        padding: 8,
    },
});
