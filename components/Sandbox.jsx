import { Text, StyleSheet, View } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.one}>One</Text>
      <Text style={styles.two}>Two</Text>
      <Text style={styles.three}>Three</Text>
      <Text style={styles.four}>Four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  one: {
    flex: 1,
    backgroundColor: "teal",
    padding: 10,
  },
  two: {
    flex: 1,
    backgroundColor: "gold",
    padding: 20,
  },
  three: {
    flex: 1,
    backgroundColor: "coral",
    padding: 30,
  },
  four: {
    flex: 1,
    backgroundColor: "skyblue",
    padding: 40,
  },
});
