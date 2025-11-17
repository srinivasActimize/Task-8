import { getHomeScreenDataApi } from "../../Apis/homeScreen/getHomeScreenDataApi";
import * as types from "../actionTypes";
 
export const getHomeScreenDataStart = () => ({
  type: types.GET_HOME_SCREEN_DATA_ERROR,
});
 
export const getHomeScreenDataSuccess = (data) => ({
  type: types.GET_HOME_SCREEN_DATA_SUCCESS,
  payload: data,
});
 
export const getHomeScreenDataError = (error) => ({
  type: types.GET_GROUPS_ERROR,
  payload: error,
});
 
export const getHomeScreenDataActionInitiate = () => {
  return async function (dispatch) {
    dispatch(getHomeScreenDataStart());
   
 
    try {
      const res = await getHomeScreenDataApi();
     
      dispatch(getHomeScreenDataSuccess(res.data.data));
    } catch (error) {
      console.error("getHomeScreenDataError error", error);
      dispatch(getHomeScreenDataError(error.message));
    }
  };
};
 
 
 
 