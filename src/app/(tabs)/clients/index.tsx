import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Clients() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clients</Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/(tabs)/clients/1")}
      >
        <Text style={styles.buttonText}>
          Open Client 1
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
  },
});