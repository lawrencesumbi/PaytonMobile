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
import { supabase } from "../../lib/supabase";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Please input both an email address and a password.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: password,
    });

    setLoading(false);

    if (error) {
      Alert.alert("Login Failed", error.message);
    } else {
      // Successfully Authenticated! Forward them to your bottom navigation layout core
      router.replace("/(auth)/role"); 
    }
  };

  const handleGoogleLogin = () => {
    console.log("Logging in with Google");
  };

  const handleFacebookLogin = () => {
    console.log("Logging in with Facebook");
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
            source={require("../../assets/images/logo-dark.jpg")}
            resizeMode="contain" // Moved directly out of styles to prevent web warnings
            style={styles.logo} 
          />
          <Text style={styles.titleText}>Welcome back to PAYTON</Text>
          <Text style={styles.subtitleText}>Log in to manage your smart finances</Text>
        </View>

        {/* Middle Section: Input Form */}
        <View style={styles.formContainer}>
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
              editable={!loading} // Prevents typing while submitting
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
              editable={!loading} // Prevents typing while submitting
            />
          </View>

          <TouchableOpacity style={styles.forgotPasswordButton} disabled={loading}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Core Action Button with Loading Feedback */}
          <TouchableOpacity 
            style={[styles.loginButton, loading && { opacity: 0.7 }]} 
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.loginButtonText}>Sign In</Text>
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
            <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin} disabled={loading}>
              <Ionicons name="logo-google" size={20} color="#EA4335" />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin} disabled={loading}>
              <Ionicons name="logo-facebook" size={20} color="#1877F2" />
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Section: Footer Navigation */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/signup")} disabled={loading}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 16,
  },
  titleText: {
    fontSize: 26,
    fontWeight: "800",
    color: "white", 
    textAlign: "center",
    marginBottom: 6,
  },
  subtitleText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#c5dbd0", 
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    marginBottom: 24,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#c5dbd0",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F4F7F6",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#20361A",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
    marginBottom: 28,
  },
  forgotPasswordText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#59B1A4", 
  },
  loginButton: {
    width: "100%",
    height: 52,
    backgroundColor: "#609c7e", 
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#c5dbd0",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: .5,
    shadowRadius: 8,
    elevation: 3,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E2E8F0",
  },
  dividerText: {
    fontSize: 14,
    color: "#8E8E93",
    paddingHorizontal: 12,
    fontWeight: "500",
  },
  socialContainer: {
    flexDirection: "row",
    gap: 12,
  },
  socialButton: {
    flex: 1,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  socialButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#20361A", 
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    paddingTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: "#c5dbd0",
  },
  signUpText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#92bba7",
  },
});