import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux'

const PropertyDetailsScreen = () => {

    const house = useSelector((state) => state.house.selected)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalles de la propiedad</Text>
        </View>
    )
}

export default PropertyDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDBF50",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: "Tillana",
    },
})