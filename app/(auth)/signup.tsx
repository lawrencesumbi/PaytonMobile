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

export default function SignUp() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    // 1. Basic Text Fields Validation
    if (!email.trim() || !password.trim() || !fullName.trim()) {
      Alert.alert("Missing Fields", "Please fill in all text fields to create your account.");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Weak Password", "Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      // 2. Register the user credentials into Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: email.trim(),
        password: password,
      });

      if (authError) throw authError;

      // 3. Insert the user profile name linked directly via the new unique User ID
      if (authData?.user) {
        const { error: profileError } = await supabase
          .from("profiles")
          .insert([
            {
              id: authData.user.id,
              full_name: fullName.trim(),
            },
          ]);

        if (profileError) throw profileError;
      }

      // 4. Success Routine Notification
      Alert.alert(
        "Account Created! 🎉",
        "Your PAYTON account is ready. Please check your email inbox if verification is enabled, or sign in now!",
        [{ text: "Continue to Login", onPress: () => router.replace("/login") }]
      );
      
    } catch (error: any) {
      Alert.alert("Registration Failed", error.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        <View style={styles.headerContainer}>
          <Image 
            source={require("../../assets/images/logo-light.png")}
            resizeMode="contain"
            style={styles.logo} 
          />
          <Text style={styles.titleText}>Create your account</Text>
          <Text style={styles.subtitleText}>Join PAYTON and master your finances</Text>
        </View>

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

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

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
  container: { flex: 1, backgroundColor: "black" },
  scrollContainer: { flexGrow: 1, justifyContent: "center", paddingHorizontal: 24, paddingTop: 40, paddingBottom: 20 },
  headerContainer: { alignItems: "center", marginBottom: 32 },
  logo: { width: 120, height: 120, marginBottom: 16 },
  titleText: { fontSize: 26, fontWeight: "800", color: "white", textAlign: "center", marginBottom: 6 },
  subtitleText: { fontSize: 15, fontWeight: "500", color: "#c5dbd0", textAlign: "center" },
  formContainer: { width: "100%", marginBottom: 24 },
  inputWrapper: { marginBottom: 16 },
  inputLabel: { fontSize: 14, fontWeight: "600", color: "#c5dbd0", marginBottom: 8 },
  input: { width: "100%", height: 50, backgroundColor: "#F4F7F6", borderRadius: 12, paddingHorizontal: 16, fontSize: 16, color: "#20361A", borderWidth: 1, borderColor: "#E2E8F0" },
  signUpButton: { width: "100%", height: 52, backgroundColor: "#609c7e", borderRadius: 12, justifyContent: "center", alignItems: "center", marginTop: 12 },
  signUpButtonText: { fontSize: 16, fontWeight: "700", color: "#FFFFFF" },
  dividerContainer: { flexDirection: "row", alignItems: "center", marginVertical: 24 },
  dividerLine: { flex: 1, height: 1, backgroundColor: "#E2E8F0" },
  dividerText: { fontSize: 14, color: "#8E8E93", paddingHorizontal: 12, fontWeight: "500" },
  socialContainer: { flexDirection: "row", gap: 12 },
  socialButton: { flex: 1, height: 50, backgroundColor: "#FFFFFF", borderRadius: 12, borderWidth: 1, borderColor: "#E2E8F0", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 },
  socialButtonText: { fontSize: 15, fontWeight: "600", color: "#20361A" },
  footerContainer: { flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "auto", paddingTop: 20 },
  footerText: { fontSize: 14, color: "#c5dbd0" },
  loginText: { fontSize: 14, fontWeight: "700", color: "#609c7e" },
});