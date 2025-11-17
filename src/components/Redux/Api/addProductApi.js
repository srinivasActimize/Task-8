import API from "../../../API/API";
 
const api = new API();
const endPoints = "/api/v1/current_user_group_and_personal_exp";
 
export const getHomeScreenDataApi = async () => {
  return new Promise(async (resolve, reject) =>{
    try {
      const result = await api.get(endPoints);
      resolve(result);
    }catch (error) {
      console.error("API error", error);
      reject(error);
    }
  })
}