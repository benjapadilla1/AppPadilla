import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryHouseScreen from "../screens/CategoryHouseScreen";
import PropertyDetailsScreen from "../screens/PropertyDetailsScreen";
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerStyle: { backgroundColor: COLORS.primary },
                headerTintColor: COLORS.secondary,
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: "Rentas Cordoba",
                }}
            />
            <Stack.Screen
                name="House"
                component={CategoryHouseScreen}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
            <Stack.Screen
                name="Details"
                component={PropertyDetailsScreen}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
        </Stack.Navigator>
    );
};