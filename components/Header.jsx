import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    paddingTop: 30,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
