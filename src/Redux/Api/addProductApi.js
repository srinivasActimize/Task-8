
import API from "../../api/API";
const api = new API();
const endPoints = "/products.json";

export const addProductDataApi = async (product) => {

    return new Promise(async (resolve, reject) => {
        try {
          console.log("this is post call in API---->");
          const response = await api.post(`${endPoints}`,product);
            console.log('link test',endPoints);
          console.log("post response", response);
          if (response && response.data) {
           
            resolve(response);
            console.log("response",response)
            return(response)
          } else {
            resolve([]); 
          }
        } catch (error) {
          console.error("Error in addEmployeeData:", error); 
          reject(error);
        }
      });
    };