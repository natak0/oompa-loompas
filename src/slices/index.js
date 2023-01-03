import { combineReducers } from "redux";

import listReducer from "./list";
import itemReducer from "./item";

const rootReducer = combineReducers({
  list: listReducer,
  item: itemReducer,
});

export default rootReducer;
