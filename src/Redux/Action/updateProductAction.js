
// import { getProductDataApi } from "../Api/getProductApi";
import { updateProductDataApi } from '../Api/updateProductAction';
import * as types from './actionTypes';
 
export const updateProductDataStart = () => {
    return{
  type: types.GET_PRODUCT_DATA_START,
}
};
 
export const updateProductDataSuccess = (data) => {
    return{
  type: types.UPDATE_PRODUCT_DATA_SUCCESS,
  payload: data,
}};
 
export const updateProductDataError = (error) => {
    return{
  type: types.UPDATE_PRODUCT_DATA_ERROR,
  payload: error,
}};
 
export const updateProductDataActionInitiate = (data,id) => {
  return async function (dispatch) {
    dispatch(updateProductDataStart());
   
    try {
      const res = await updateProductDataApi(data,id);
      dispatch(updateProductDataSuccess(res.data));
      console.log('rrr',res)
    } catch (error) {
      console.error("updateProductsDataError error", error);
      dispatch(updateProductDataError(error.message));
    }
  };
};