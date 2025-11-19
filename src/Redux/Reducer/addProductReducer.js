
 import * as types from "../Action/actionTypes";
const initialState = {
    data: [],
    loading: false,
    error: null,
};
 
const addProductDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_DATA_START:
      return {
        ...state,
        loading: true,
       error:null,
      };
    case types.ADD_PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error:null,
      };
    case types.ADD_PRODUCT_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
 
export default addProductDataReducer;
 
 