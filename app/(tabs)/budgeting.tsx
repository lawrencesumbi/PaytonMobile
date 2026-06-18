import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

export default function BudgetingScreen() {
  return (
    <LinearGradient colors={['#22372c', '#416955', '#609c7e']}>
        <View style={styles.container}>
          <Text style={styles.text}>Budgeting Screen</Text>
        </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({ container: { flex: 1, justifyContent: "center", alignItems: "center" }, text: { fontSize: 18 } });