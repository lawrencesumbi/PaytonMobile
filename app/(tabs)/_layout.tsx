import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform, StyleSheet, View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        // Global tab styling configuration
        tabBarActiveTintColor: "#20361A",   // Brand Forest Green for active tabs
        tabBarInactiveTintColor: "#8E8E93", // Soft iOS grey for inactive tabs
        headerShown: false,                 // Hides default top headers for a cleaner UI
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#E2E8F0",
          height: Platform.OS === "ios" ? 88 : 64, // Accounts for bottom home indicator on iOS
          paddingBottom: Platform.OS === "ios" ? 30 : 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      {/* 1. Home Screen */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "wallet" : "wallet-outline"} size={24} color={color} />
          ),
        }}
      />

      {/* 2. Budgeting Screen */}
      <Tabs.Screen
        name="budgeting"
        options={{
          title: "Budget",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "pie-chart" : "pie-chart-outline"} size={24} color={color} />
          ),
        }}
      />

      {/* 3. Action Hub: Add Expense (Highlighted Center Button) */}
      <Tabs.Screen
        name="add"
        options={{
          title: "", // Hides label to focus completely on the action icon
          tabBarIcon: () => (
            <View style={styles.centerAddButton}>
              <Ionicons name="add" size={32} color="#FFFFFF" />
            </View>
          ),
        }}
      />

      {/* 4. Reminders Screen */}
      <Tabs.Screen
        name="reminders"
        options={{
          title: "Reminders",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "notifications" : "notifications-outline"} size={24} color={color} />
          ),
        }}
      />

      {/* 5. Account Screen */}
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "person" : "person-outline"} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  centerAddButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#84A346", // Brand Bright Green for the main functional action
    justifyContent: "center",
    alignItems: "center",
    // Premium floating drop shadow styling
    shadowColor: "#84A346",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
    marginTop: Platform.OS === "ios" ? -10 : -5, // Perfectly centers the floating design layout
  },
});