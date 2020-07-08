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

const createHealthInfo = dispatch => async (year, height, weight, HDL, LDL, Glucose, Triglyceride, Iodine, Hemoglobin, Calcium) => {
    try{
        await connectionApi.post('/HealthInfo', {year, height, weight, HDL, LDL, Glucose, Triglyceride, Iodine, Hemoglobin, Calcium}); 
        dispatch({type: 'postHealthInfo'})
    }catch(err) {
        console.log("Hi there!")
        console.log(err); 
    }
}; 

export const {Provider, Context} = createDataContext (
    healthInfoReducer, 
    {fetchHealthInfo, createHealthInfo},
    []
)