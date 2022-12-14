import React, { useEffect } from "react";
import { FlatList } from "react-native";
import HouseItem from "../components/HouseItem";
import { HOUSES } from "../data/houses";

import { useSelector, useDispatch, connect } from "react-redux";
import { filteredHouse, selectHouse } from "../store/actions/house.action";


const CategoryHouseScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const categoryHouses = useSelector((state) => state.houses.filteredHouse)
    const category = useSelector((state) => state.categories.selected)

    useEffect(() => {
        dispatch(filteredHouse(category.id))
    }, [])

    const handleSelectedCategory = (item) => {
        dispatch(selectHouse(item.id))
        navigation.navigate("Details", {
            name: item.name,
        });
    };

    const renderHouseItem = ({ item }) => (
        <HouseItem item={item} onSelected={handleSelectedCategory} />
    );

    return (
        <FlatList
            data={categoryHouses}
            keyExtractor={(item) => item.id}
            renderItem={renderHouseItem}
        />
    );
};

export default connect()(CategoryHouseScreen);