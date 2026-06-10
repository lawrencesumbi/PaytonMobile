import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
// Import our centralized database instance
import { supabase } from "../../lib/supabase";

export default function SignUp() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state during submission

  const handleSignUp = async () => {
    // Basic text validation check
    if (!email || !password || !fullName) {
      Alert.alert("Error", "Please fill in all available text fields.");
      return;
    }

    setLoading(true);

    // Call Supabase built-in Authentication signup pipeline
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        // We pass the full name inside user metadata so it saves to the account profile
        data: {
          full_name: fullName, 
        },
      },
    });

    setLoading(false);

    if (error) {
      Alert.alert("Sign Up Error", error.message);
    } else {
      Alert.alert(
        "Success!", 
        "Account created successfully. Please check your email inbox to confirm registration!",
        [{ text: "OK", onPress: () => router.replace("/login") }]
      );
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Top Section: Brand Logo & Welcoming Header */}
        <View style={styles.headerContainer}>
          <Image 
            source={require("../../assets/images/logo-light.png")}
            style={styles.logo} 
          />
          <Text style={styles.titleText}>Create your account</Text>
          <Text style={styles.subtitleText}>Join PAYTON and master your finances</Text>
        </View>

        {/* Middle Section: Input Form */}
        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor="#999"
              value={fullName}
              onChangeText={setFullName}
              autoCapitalize="words"
              editable={!loading}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              editable={!loading}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Create a password"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
              editable={!loading}
            />
          </View>

          {/* Core Action Button with integrated loading handler */}
          <TouchableOpacity 
            style={[styles.signUpButton, loading && { opacity: 0.7 }]} 
            onPress={handleSignUp}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            )}
          </TouchableOpacity>

          {/* Divider Text */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Sign-In Buttons */}
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton} disabled={loading}>
              <Ionicons name="logo-google" size={20} color="#EA4335" />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton} disabled={loading}>
              <Ionicons name="logo-facebook" size={20} color="#1877F2" />
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Section: Footer Navigation */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/login")} disabled={loading}>
            <Text style={styles.loginText}>Sign In</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fdfdfdef" },
  scrollContainer: { flexGrow: 1, justifyContent: "center", paddingHorizontal: 24, paddingTop: 40, paddingBottom: 20 },
  headerContainer: { alignItems: "center", marginBottom: 32 },
  logo: { width: 120, height: 120, resizeMode: "contain", marginBottom: 16 },
  titleText: { fontSize: 26, fontWeight: "800", color: "#20361A", textAlign: "center", marginBottom: 6 },
  subtitleText: { fontSize: 15, fontWeight: "500", color: "#1C554E", textAlign: "center" },
  formContainer: { width: "100%", marginBottom: 24 },
  inputWrapper: { marginBottom: 16 },
  inputLabel: { fontSize: 14, fontWeight: "600", color: "#20361A", marginBottom: 8 },
  input: { width: "100%", height: 50, backgroundColor: "#F4F7F6", borderRadius: 12, paddingHorizontal: 16, fontSize: 16, color: "#20361A", borderWidth: 1, borderColor: "#E2E8F0" },
  signUpButton: { width: "100%", height: 52, backgroundColor: "#84A346", borderRadius: 12, justifyContent: "center", alignItems: "center", marginTop: 12, shadowColor: "#84A346", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 3 },
  signUpButtonText: { fontSize: 16, fontWeight: "700", color: "#FFFFFF" },
  dividerContainer: { flexDirection: "row", alignItems: "center", marginVertical: 24 },
  dividerLine: { flex: 1, height: 1, backgroundColor: "#E2E8F0" },
  dividerText: { fontSize: 14, color: "#8E8E93", paddingHorizontal: 12, fontWeight: "500" },
  socialContainer: { flexDirection: "row", gap: 12 },
  socialButton: { flex: 1, height: 50, backgroundColor: "#FFFFFF", borderRadius: 12, borderWidth: 1, borderColor: "#E2E8F0", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 },
  socialButtonText: { fontSize: 15, fontWeight: "600", color: "#20361A" },
  footerContainer: { flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "auto", paddingTop: 20 },
  footerText: { fontSize: 14, color: "#666666" },
  loginText: { fontSize: 14, fontWeight: "700", color: "#20361A" },
});