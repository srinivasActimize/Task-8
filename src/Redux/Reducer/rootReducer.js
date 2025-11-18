// import { combineReducers } from "redux";
// import { getReducer } from "./getEmployeeRr";
// import { postReducer } from "./addEmployeReducer";
// import { deleteReducer } from "./deleteEmployeeReducer";
// import { putReducer } from "./updateEmployeeReducer";
 import { combineReducers } from "@reduxjs/toolkit"
import getProductsDataReducer from "./getProductsReducer";
import getProductDataReducer from "./getProductReducer";
export const rootReducer=combineReducers({
   getproductsdata:getProductsDataReducer,
   getproductdata:getProductDataReducer,
//    postemployeedata:postReducer,
//    deleteemployeedata:deleteReducer,
//    updateemployeedata:putReducer
})