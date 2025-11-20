
import { deleteProductDataApi } from '../Api/deleteProductApi';
import * as types from './actionTypes';
import { getProductsDataActionInitiate } from './getProductsAction';
 
export const deleteProductDataStart = () => {
    return{
  type: types.DELETE_PRODUCT_DATA_START,
}
};
 
export const deleteProductDataSuccess = (data) => {
    return{
  type: types.DELETE_PRODUCT_DATA_SUCCESS,
  payload: data,
}};
 
export const deleteProductDataError = (error) => {
    return{
  type: types.DELETE_PRODUCT_DATA_ERROR,
  payload: error,
}};
 
export const deleteProductDataActionInitiate = (id) => {
  return async function (dispatch) {
    dispatch(deleteProductDataStart());
   
    try {
      const res = await deleteProductDataApi(id);
      // dispatch(deleteProductDataSuccess(res.data));
        dispatch(getProductsDataActionInitiate());
      console.log('rrr',res)
    } catch (error) {
      console.error("deleteProductsDataError error", error);
      dispatch(deleteProductDataError(error.message));
    }
  };
};