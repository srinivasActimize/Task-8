import { getProductsDataApi } from "../Api/getProductsApi";
import * as types from './actionTypes';
 
export const getProductsDataStart = () => {
    return{
  type: types.GET_PRODUCTS_DATA_START,
}
};
 
export const getProductsDataSuccess = (data) => {
    return{
  type: types.GET_PRODUCTS_DATA_SUCCESS,
  payload: data,
}};
 
export const getProductsDataError = (error) => {
    return{
  type: types.GET_PRODUCTS_DATA_ERROR,
  payload: error,
}};
 
export const getProductsDataActionInitiate = () => {
  return async function (dispatch) {
    dispatch(getProductsDataStart());
   
    try {
      const res = await getProductsDataApi();
     
      dispatch(getProductsDataSuccess(res.data));
    } catch (error) {
      console.error("getProductsDataError error", error);
      dispatch(getProductsDataError(error.message));
    }
  };
};