import { combineReducers } from "redux";
import purchaseOrderReducer from "../reducers/purchaseOrderReducer";
import masterReducer from "../reducers/masterReducer";

export const appReducer = combineReducers({
	purchaseOrderReducer,
	masterReducer
})
export const RootReducer = (state, action) => {
	// if (action.type == ACTIONS.destroySession) {
	// 	state = undefined;
	// }
	return appReducer(state, action);
};

export default RootReducer;