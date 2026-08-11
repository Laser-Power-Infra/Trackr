import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ClientDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Client Details
      </Text>

      <Text style={styles.id}>
        Client ID: {id}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 28,
    fontWeight: "700",
  },

  id: {
    marginTop: 20,
    fontSize: 20,
  },
});