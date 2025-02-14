import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, Pressable, Text } from "react-native";
//Nome probs é opcional poderia ser ButtonProbs
type Probs = {
  label: string;
  theme?: "primary"; // ? para sinalizar que a prob é opcional
  onPress?: () => void; // recebendo função
};
 
export default function Button({ label, theme, onPress }: Probs) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#FFD33D", borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#FFF" }]}
          onPress={onPress} // recebendo a probs onPress
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color={"#25292E"}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292E" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
 
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert("clicou")}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}
 
const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#FFF",
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  },
});