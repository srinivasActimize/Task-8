
import { getProductDataApi } from "../Api/getProductApi";
import * as types from './actionTypes';
 
export const getProductDataStart = () => {
    return{
  type: types.GET_PRODUCT_DATA_START,
}
};
 
export const getProductDataSuccess = (data) => {
    return{
  type: types.GET_PRODUCT_DATA_SUCCESS,
  payload: data,
}};
 
export const getProductDataError = (error) => {
    return{
  type: types.GET_PRODUCT_DATA_ERROR,
  payload: error,
}};
 
export const getProductDataActionInitiate = (id) => {
  return async function (dispatch) {
    dispatch(getProductDataStart());
   
    try {
      const res = await getProductDataApi(id);
      dispatch(getProductDataSuccess(res.data));
      console.log('rrr',res)
    } catch (error) {
      console.error("getProductsDataError error", error);
      dispatch(getProductDataError(error.message));
    }
  };
};