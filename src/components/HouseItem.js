import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const HouseItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.HouseItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>Ubicacion: {item.ubication}</Text>
                    <Text style={styles.details}>$USD {item.price}</Text>
                    <Text style={styles.details}>Superficie total: {item.meters}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default HouseItem;

const styles = StyleSheet.create({
    HouseItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: "#ccc",
    },
    title: {
        fontSize: 20,
        fontFamily: "Tillana",
    },
    details: {
        fontSize: 18,
    },
});