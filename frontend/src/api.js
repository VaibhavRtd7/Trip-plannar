const url = import.meta.env.VITE_API;
import axios from "axios";
import { useReducer } from "react";





const initialState = {
    isFetching: false,
    data: [],
    error: null
}

const getCall = async(endpoint)=>{
   
   const [state, dispatch] = useReducer(reducer, initialState)

   try {
       const res = await axios.get(`${url}${endpoint}`);
       dispatch({
           type: 'FETCH_SUCCESS',
           payload: res.data
       })
       
       return res.data;
   } catch (error) {
       console.log('====================================');
       console.log(error.message);
       console.log('====================================');
   }
}



 const postCall = async(endpoint, data)=>{

    try {
        const res = await axios.post(`${url}${endpoint}`,data);
        return res.data;
    } catch (error) {
        console.log('====================================');
        console.log(error.message);
        console.log('====================================');
    }

}


 const putCall = async(endpoint,data)=>{
    try {
        const res = await axios.put(`${url}${endpoint}`,data);
        return res.data;
    } catch (error) {
        console.log('====================================');
        console.log(error.message);
        console.log('====================================');
    }
}

 const deleteCall = async(endpoint)=>{
    try {
        const res = await axios.put(`${url}${endpoint}`);
        return res.data;
    } catch (error) {
        console.log('====================================');
        console.log(error.message);
        console.log('====================================');
    }
}


export {getCall , putCall, postCall, deleteCall}