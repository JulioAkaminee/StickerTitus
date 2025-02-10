import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{title:"Oops! Not Found."}}/>
    <View style={styles.container}>
    <Text style={styles.title}>Error 404</Text>
    <Link href="/" style={styles.button}>Go To Home</Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292E",
  },
  text: {
    color: "#FFF",
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#d32f2f',
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#FFF",
  },
});
