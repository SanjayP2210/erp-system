import { ACTIONS } from "core-files/constants/actionConstants";

// reducers/masterReducer.js
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const masterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.loaderStart:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ACTIONS.masterSuccess:
      return {
        ...state,
        data: action.payload,
        error: null,
        isLoading: false,
      };
    case ACTIONS.masterFailed:
      return {
        ...state,
        error: action?.error?.Message,
        isLoading: false,
      };
    case ACTIONS.add:
      return {
        ...state,
        data: [...state.master, action.payload],
        error: null,
        isLoading: false,
      };
    case ACTIONS.delete:
      return {
        ...state,
        data: state.master.filter((master) => master.id !== action.payload),
        error: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default masterReducer;
