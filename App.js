import React from 'react'; 
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen'; 
import AnalysisScreen from './src/screens/AnalysisScreen'; 
import HealthProfileScreen from './src/screens/HealthProfileScreen'; 
import MenuScreen from './src/screens/MenuScreen'; 
import MenuDetailScreen from './src/screens/MenuDetailScreen'; 
import RestaurantFindScreen from './src/screens/RestaurantFindScreen'; 
import SigninScreen from './src/screens/SigninScreen'; 
import SignupScreen from './src/screens/SignupScreen'; 
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'; 
import {Provider as AuthProvider} from './src/context/AuthContext'; 
import {setNavigator} from './src/navigationRef'; 

const switchNavigator = createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen
    }),
        HealthProfile: HealthProfileScreen, 
    mainFlow: createBottomTabNavigator({
        restaurantFlow: createStackNavigator({
            RestaurantFind: RestaurantFindScreen,
            Menu: MenuScreen,
            MenuDetail: MenuDetailScreen
        }),
        Analysis: AnalysisScreen,
        Account: AccountScreen
    })
}); 

const App = createAppContainer(switchNavigator); 

export default () => {
    return (
        <AuthProvider>
            <App ref={(navigator) => {setNavigator(navigator)}}/>
        </AuthProvider>
    );
}; 


