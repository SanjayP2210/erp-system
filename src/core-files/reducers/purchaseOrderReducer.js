import { ACTIONS } from "core-files/constants/actionConstants";

// reducers/purchaseOrderReducer.js
const initialState = {
  purchaseOrder: [],
  isLoading: false,
  error: null,
};

const purchaseOrderReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.loaderStart:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ACTIONS.purchaseOrderSuccess:
      return {
        ...state,
        purchaseOrder: action.payload,
        error: null,
        isLoading: false,
      };
    case ACTIONS.purchaseOrderFailed:
      return {
        ...state,
        error: action?.error?.Message,
        isLoading: false,
      };
    case ACTIONS.addPurchaseOrder:
      return {
        ...state,
        purchaseOrder: [...state.purchaseOrder, action.payload],
        error: null,
        isLoading: false,
      };
    case ACTIONS.deletePurchaseOrder:
      return {
        ...state,
        purchaseOrder: state.purchaseOrder.filter((purchaseOrder) => purchaseOrder.id !== action.payload),
        error: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default purchaseOrderReducer;
