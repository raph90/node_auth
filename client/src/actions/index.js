import { AUTH_USER, AUTH_ERROR } from "./types";
import axios from "axios";

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post("http://localhost:3001/signup", formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token })
    callback() // push us in the right direction
  } catch(err){
    dispatch({ type: AUTH_ERROR, payload: "Email in use"})
  }
  
 
};
