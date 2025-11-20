// import { combineReducers } from "redux";
// import { getReducer } from "./getEmployeeRr";
// import { postReducer } from "./addEmployeReducer";
// import { deleteReducer } from "./deleteEmployeeReducer";
// import { putReducer } from "./updateEmployeeReducer";
 import { combineReducers } from "@reduxjs/toolkit"
import getProductsDataReducer from "./getProductsReducer";
import getProductDataReducer from "./getProductReducer";
import addProductDataReducer from "./addProductReducer";
import updateProductDataReducer from "./updateProductReducer";
export const rootReducer=combineReducers({
   getproductsdata:getProductsDataReducer,
   getproductdata:getProductDataReducer,
   addroductdata:addProductDataReducer,
   updateproductdata:updateProductDataReducer
//    postemployeedata:postReducer,
//    deleteemployeedata:deleteReducer,
//    updateemployeedata:putReducer
})