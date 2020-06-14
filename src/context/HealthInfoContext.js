import createDataContext from './createDataContext'; 
import connectionApi from '../api/connection'; 

const healthInfoReducer = (state, action) => {
    switch (action.type){
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

const createHealthInfo = dispatch => async (year, height, weight, HDL, LDL, BloodGlucose, Triglyceride, Gluten, 
        Hemoglobin, Iron, Potassium, Sodium) => {
    await connectionApi.post('/HealthInfo', {year, height, weight, HDL, LDL, BloodGlucose, Triglyceride, Gluten, 
        Hemoglobin, Iron, Potassium, Sodium}); 
}; 

export const {Provider, Context} = createDataContext (
    healthInfoReducer, 
    {fetchHealthInfo, createHealthInfo},
    []
)