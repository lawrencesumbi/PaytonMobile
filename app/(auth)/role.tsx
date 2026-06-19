import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function RoleScreen() {
    return (
        <View style={styles.container}>
            {/* <Image source={require("@/components/icon-back.png")}/> */}
            <LinearGradient
                colors={["#c5dbd0", "black", "#609c7e"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: .10 }}
                style={styles.gradient} 
            >
                <Text style={styles.text}>Choose Account Type</Text>

                <LinearGradient colors={[ "#c5dbd0", "#609c7e"]}
                                start={{x: 1, y:1}}
                                end={{x: 0, y: 0}}
                                style={styles.cardGradient}
                > 
                    <Text style={styles.cardText} 
                            onPress={() => router.push("../(spender)/home")}>
                            <Image source={require("@/assets/images/seedling.png")} style={{width:30, height:30}}/>
                    Seedling</Text>
                    <Text style={styles.sub1Text}>For students</Text>
                    <Text style={styles.sub1Text}>Needs a <Text style={{color: "#22372c", fontSize: 12}}>Gardener</Text> to grow.</Text>
                </LinearGradient>

                <LinearGradient colors={[ "#c5dbd0", "#609c7e"]}
                                start={{x: 1, y:1}}
                                end={{x: 0, y: 0}}
                                style={styles.cardGradient}
                > 
                    <Text style={styles.cardText}><Image source={require("@/assets/images/gardener.png")} 
                                                         style={{width:30, height:30}}/>Gardener</Text>
                    <Text style={styles.sub1Text}>Support and Guide <Text style={{color: "#22372c", fontSize: 12}}>Seedling.</Text></Text>
                    <Text style={styles.sub1Text}>Set limits, watch them grow.</Text>
                </LinearGradient>
            
                <LinearGradient colors={[ "#c5dbd0", "#609c7e"]}
                                start={{x: 1, y:1}}
                                end={{x: 0, y: 0}}
                                style={styles.cardGradient}
                >  
                    <Text style={styles.cardText}><Image source={require("@/assets/images/bloom.png")} 
                                                         style={{width:30, height:30}}/>Bloom</Text>
                    <Text style={styles.sub1Text}>Manage your money Solo.</Text>
                    <Text style={styles.sub1Text}>Fully independent.</Text>
                </LinearGradient>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center", 
    },
    cardText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#f7faf8", 
        borderRadius: 20,
    },
    text: {
        fontSize: 18,
        color: "#c5dbd0",
        fontWeight: "bold",
        marginBottom: 30,
    },
    sub1Text:{
        color: "#416955",
        fontSize: 12,
    },
    cardGradient: {
        justifyContent: "center",
        padding: 30,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2, 
        shadowRadius: 3.85,
        elevation: 5,
        marginBottom: 20,
    },
});