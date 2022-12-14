import { createStore, combineReducers } from "redux"

import CategoryReducer from "./reducers/category.reducer"
import HouseReducer from "./reducers/houses.reducer"

const RootReducer = combineReducers({
    categories: CategoryReducer,
    houses: HouseReducer
})
export default createStore(RootReducer)