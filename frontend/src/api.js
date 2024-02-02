const url = import.meta.env.VITE_API;
import axios from "axios";

export const postCall = async(endpoint, data)=>{

    try {
        const res = await axios.post(`${url}${endpoint}`,data);
        return res.data;
    } catch (error) {
        console.log('====================================');
        console.log(error.message);
        console.log('====================================');
    }

}

export const getCall = async(endpoint)=>{
    try {
        const res = await axios.get(`${url}${endpoint}`);
        return res.data;
    } catch (error) {
        console.log('====================================');
        console.log(error.message);
        console.log('====================================');
    }
}

export const putCall = async(endpoint,data)=>{
    try {
        const res = await axios.put(`${url}${endpoint}`,data);
        return res.data;
    } catch (error) {
        console.log('====================================');
        console.log(error.message);
        console.log('====================================');
    }
}

export const deleteCall = async(endpoint)=>{
    try {
        const res = await axios.put(`${url}${endpoint}`);
        return res.data;
    } catch (error) {
        console.log('====================================');
        console.log(error.message);
        console.log('====================================');
    }
}