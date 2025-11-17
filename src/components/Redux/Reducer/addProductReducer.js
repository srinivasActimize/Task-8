
import * as types from "../../Actions/actionTypes";
 
const initialState = {
    data: [],
    loading: false,
    error: null,
};
 
const getHomeScreenDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_HOME_SCREEN_DATA_START:
      return {
        ...state,
        loading: true,
       
      };
    case types.GET_HOME_SCREEN_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.GET_HOME_SCREEN_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
 
export default getHomeScreenDataReducer;
 
 