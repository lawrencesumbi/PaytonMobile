import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        backgroundColor: "white",
        paddingHorizontal: 20,
      }}
    >
      {/* 1. The Logo Image */}
      <Image 
        source={require("../assets/images/paytonlogo.png")} 
        style={{ width: 300, height: 300, resizeMode: "contain" }} 
      />

      {/* 2. Your Text */}
      {/* FIX: Changed 'tracking' to 'letterSpacing' */}
      <Text style={{ fontSize: 30, fontWeight: "bold", letterSpacing: 1 }}>PAYTON</Text>
      
      <Text style={{ fontSize: 18, color: "#666", marginBottom: 30 }}>
        An Intelligent Financial Platform
      </Text>

      {/* 3. Get Started Button */}
      <Pressable
        // FIX: Changed console.log to router.push to navigate to login.tsx
        onPress={() => router.push("/login")}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#5B21B6" : "#7C3AED",
            paddingVertical: 14,
            paddingHorizontal: 40,
            borderRadius: 25,
            width: "80%",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 3,
          },
        ]}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
          Get Started
        </Text>
      </Pressable>
    </View>
  );
}