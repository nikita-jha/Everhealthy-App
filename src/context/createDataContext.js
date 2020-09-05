import React, {useReducer} from 'react'; 

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext(); 

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, defaultValue); 

        const boundActions = {}; 
        for(let key in actions) {
            boundActions[key] = actions[key](dispatch); 
        }
        return (
            <Context.Provider value={{state, ...boundActions}}>
                {children}
            </Context.Provider>
        );
    };

    return {Context, Provider};
    //Remember that provider is the component that will make all our data accessible to the other screens
    //in the app and Context is the context object we are going to use to get access to that information 
    //from one of our child components
}; 