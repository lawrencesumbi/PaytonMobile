import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SplitScreen(){
    return(
        <View>
            <Text> Splitting </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
