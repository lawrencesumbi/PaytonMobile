import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  const handleLogin = () => {
    // This is where you will eventually plug in your Supabase or API login logic
    console.log("Logging in with:", email, password);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header/Welcome text */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to your Payton account</Text>
        </View>

        {/* Input Fields Form */}
        <View style={styles.formContainer}>
          
          {/* Email Input */}
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />

          {/* Password Input */}
          <Text style={styles.inputLabel}>Password</Text>
          <div style={{ position: "relative" }}> {/* Standard wrapper workaround for clear positioning */}
            <TextInput
              style={[styles.input, { paddingRight: 50 }]}
              placeholder="Enter your password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry={secureText}
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              onChangeText={setPassword}
            />
            <Pressable 
              onPress={() => setSecureText(!secureText)} 
              style={styles.eyeButton}
            >
              <Text style={styles.eyeText}>{secureText ? "Show" : "Hide"}</Text>
            </Pressable>
          </div>

          {/* Forgot Password Link */}
          <Pressable style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </Pressable>

          {/* Login Button */}
          <Pressable
            onPress={handleLogin}
            style={({ pressed }) => [
              styles.loginButton,
              { backgroundColor: pressed ? "#5B21B6" : "#7C3AED" }
            ]}
          >
            <Text style={styles.loginButtonText}>Sign In</Text>
          </Pressable>

          {/* Sign Up Link */}
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <Pressable>
              <Text style={styles.signUpText}>Sign Up</Text>
            </Pressable>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  headerContainer: {
    marginBottom: 32,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
  },
  formContainer: {
    width: "100%",
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 6,
    marginTop: 16,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#1F2937",
    backgroundColor: "#F9FAFB",
  },
  eyeButton: {
    position: "absolute",
    right: 16,
    top: 15,
  },
  eyeText: {
    color: "#7C3AED",
    fontWeight: "600",
    fontSize: 14,
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginTop: 10,
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: "#7C3AED",
    fontWeight: "600",
    fontSize: 14,
  },
  loginButton: {
    width: "100%",
    height: 52,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  footerText: {
    color: "#6B7280",
    fontSize: 14,
  },
  signUpText: {
    color: "#7C3AED",
    fontWeight: "600",
    fontSize: 14,
  },
});