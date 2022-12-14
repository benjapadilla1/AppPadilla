import { HOUSES } from "../../data/houses"
import { SELECTED_HOUSE, FILTERED_HOUSE } from "../actions/house.action";

const initialState = {
    houses: HOUSES,
    filteredHouse: [],
    selected: null
}

const HouseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_HOUSE:
            return {
                ...state,
                selected: state.houses.find((house) => house.id === action.houseId)
            };
        case FILTERED_HOUSE:
            return {
                ...state,
                filteredHouse: state.houses.filter(
                    (house) => house.category === action.categoryID
                )
            }
        default:
            return state
    }
}
export default HouseReducer