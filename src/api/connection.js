import axios from 'axios'; 
import {AsyncStorage} from 'react-native'; 


const instance =  axios.create({
    baseURL: 'http://81ab169c0a6f.ngrok.io'
}); 

//remember NGROK is the only way phone can contact the express server if they are on diff networks
//Axios baseURL needs to point at the ngrok URL to get access to express api which is running on port 3000

//Below code is how we use the JSON web token to authenticate ourselves with axios. In the middle ware 
//section of our API, we have added a part that pulls an authorization object off the header and ensures
//the user has a valid JSON web token before signing in. In the below code,  our API will make sure 
//we have a token and then add it into our header (authorization) as Bearer, which is what we later check
//in the middleware section whenever Axios is called before it lets us into the app
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