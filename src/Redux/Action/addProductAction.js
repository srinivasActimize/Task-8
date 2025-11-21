

import { addProductDataApi} from '../Api/addProductApi';
import * as types from './actionTypes';
 
export const addProductDataStart = () => {
    return{
  type: types.ADD_PRODUCT_DATA_START,
}
};
 
export const addProductDataSuccess = (data) => {
    return{
  type: types.ADD_PRODUCT_DATA_SUCCESS,
  payload: data,
}};
 
export const addProductDataError = (error) => {
    return{
  type: types.ADD_PRODUCT_DATA_ERROR,
  payload: error,
}};
 
export const addProductDataActionInitiate = (id) => {
  return async function (dispatch) {
    dispatch(addProductDataStart());
   
    try {
      const res = await addProductDataApi(id);
      dispatch(addProductDataSuccess(res.data));
      console.log('rrr',res)
    } catch (error) {
      console.error("getProductsDataError error", error);
      dispatch(addProductDataError(error.message));
    }
  };
};