
import API from "../../api/API";
const api = new API();
const endPoints = "/products";
 
export const getProductDataApi = async (id) => {
  return new Promise(async (resolve, reject) =>{
    try {
      const result = await api.get(`${endPoints}/${id}.json`);
    //   console.log('sgsgs',result.data)
    if(result&&result.data){
          resolve(result);
          return(result);
      }
      
    }catch (error) {
      console.error("API error", error);
      reject(error);
    }
  })
}
 