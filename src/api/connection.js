import axios from 'axios'; 
import {AsyncStorage} from 'react-native'; 


const instance =  axios.create({
    baseURL: 'http://150ee246b39d.ngrok.io'
}); 

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token'); 
        if(token) {
            config.headers.Authorization = `Bearer ${token}`; 
        }
        return config; 
    },
    (err) => {
        return Promise.reject(err); 
    }
); 
export default instance; 