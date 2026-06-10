import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();
  
  // 1. Initialize the opacity value at 0 (completely hidden)
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 2. Trigger the fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,         // Target opacity
      duration: 1200,     // Timing in milliseconds (1.2 seconds)
      useNativeDriver: true, // Optimizes performance by running on the native thread
    }).start();

    // 3. Splash screen redirect timer
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 5000);

    return () => clearTimeout(timer);
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      
      {/* Center Section: Main App Logo & Subtitle with Fade Effect */}
      <Animated.View style={[styles.centerContent, { opacity: fadeAnim }]}>
        <Image 
          source={require("../assets/images/logo-light.png")} 
          style={styles.logo} 
        />
      </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfdfdef", 
    paddingHorizontal: 20,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  bottomBadge: {
    position: "absolute",
    bottom: 40, 
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  
});