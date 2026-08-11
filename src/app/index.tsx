import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";

export default function LoginScreen() {
  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.title}>Trackr</Text>
        <Text style={styles.subtitle}>
          Employee Tracking & Client Visit Management
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Welcome Back 👋</Text>
        <Text style={styles.description}>
          Sign in to continue
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>

          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>

          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgot}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        Version 1.0.0
      </Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.replace("/(tabs)")}
      >
        <Text style={styles.loginText}>Navigate in App</Text>
      </TouchableOpacity>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },

  header: {
    marginTop: 60,
  },

  title: {
    fontSize: 38,
    fontWeight: "700",
    color: "#2563EB",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 24,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: "#222",
  },

  description: {
    marginTop: 6,
    marginBottom: 24,
    color: "#666",
    fontSize: 15,
  },

  inputContainer: {
    marginBottom: 18,
  },

  label: {
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },

  input: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#222",
  },

  loginButton: {
    marginTop: 12,
    backgroundColor: "#2563EB",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  loginText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 17,
  },

  forgot: {
    marginTop: 18,
    textAlign: "center",
    color: "#2563EB",
    fontWeight: "600",
  },

  footer: {
    textAlign: "center",
    marginBottom: 20,
    color: "#888",
  },
});