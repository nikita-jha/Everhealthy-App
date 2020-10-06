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
import {Provider as HealthInfoProvider} from './src/context/HealthInfoContext'; 
import {setNavigator} from './src/navigationRef';
import {MaterialCommunityIcons} from '@expo/vector-icons'; 


    const restFlow = createStackNavigator({
        RestaurantFind: RestaurantFindScreen,
        Menu: MenuScreen,
        Recommendation: MenuDetailScreen
    });

    restFlow.navigationOptions={
        title:"Find", 
        tabBarIcon: <MaterialCommunityIcons name="food" size={40} color="#585858" />
    }
const switchNavigator = createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen
    }),
    HealthProfile: HealthProfileScreen,
 
    mainFlow: createBottomTabNavigator({
        restaurantFlow: restFlow,
        Analysis: AnalysisScreen,
        Account: AccountScreen
    })
}); 
const App = createAppContainer(switchNavigator); 
export default () => {
    return (
        <HealthInfoProvider>
        <AuthProvider>
            <App ref={(navigator) => {setNavigator(navigator)}}/>
        </AuthProvider>
        </HealthInfoProvider>
    );
}; 


