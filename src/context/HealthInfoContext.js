import createDataContext from './createDataContext'; 
import connectionApi from '../api/connection'; 

const healthInfoReducer = (state, action) => {
    switch (action.type){ 
        case 'postHealthInfo':
            return state; 
        case 'fetchHealthInfo': 
            return action.payload; 
        default: 
            return state; 
    }
}; 


const fetchHealthInfo = dispatch => async () => {
    const response = await connectionApi.get('/HealthInfo'); 
    dispatch({type: 'fetchHealthInfo', payload: response.data}); 
}; 

const createHealthInfo = dispatch => async (year, height, weight, LDL, HDL, Sodium, Glucose, Iron, Magnesium, Calcium) => {
    try{
        await connectionApi.post('/HealthInfo', {year, height, weight, LDL, HDL, Sodium, Glucose, Iron, Magnesium, Calcium}); 
        dispatch({type: 'postHealthInfo'})
    }catch(err) {
        console.log("Hi there!")
        console.log(err); 
    }
}; 

//remember the createDataContext below will enable us to share a set of functions or state values with
// any other screen that needs them just by importing that specific context. Remember, you must also wrap
//the app in App.js with all the different providers from each context file as well to be able to use them. 
export const {Provider, Context} = createDataContext (
    healthInfoReducer, 
    {fetchHealthInfo, createHealthInfo},
    []
)