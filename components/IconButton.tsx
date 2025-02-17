import { Pressable, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
    label: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
    return (
        <Pressable style={styles.IconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color={"#FFF"} />
            <Text style={styles.IconButtonLabel}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    IconButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 8,
        marginVertical:10
    },
    IconButtonLabel: {
        color: "#FFF",
        marginLeft: 8,
        fontSize: 16,
    },
});
