import { FlatList } from "react-native";
import React from "react";
import HouseItem from "../components/HouseItem";
import { CASAS } from "../data/casas";

const CategoryHouseScreen = ({ navigation, route }) => {
    const casas = CASAS.filter(
        (casa) => casa.category === route.params.categoryID
    );

    const handleSelectedCategory = (item) => {
        navigation.navigate("Details", {
            productID: item.id,
            name: item.name,
        });
    };

    const renderHouseItem = ({ item }) => (
        <HouseItem item={item} onSelected={handleSelectedCategory} />
    );

    return (
        <FlatList
            data={casas}
            keyExtractor={(item) => item.id}
            renderItem={renderHouseItem}
        />
    );
};

export default CategoryHouseScreen;