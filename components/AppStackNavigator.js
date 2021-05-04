import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import WriteStoryScreen from '../screens/WriteStoryScreen';

export const AppStackNavigator = createStackNavigator({
   WriteStory:{
        screen : WriteStoryScreen,
        navigationOptions:{
            headerShown : false
          }
    },
}, 
    {
        initialRouteName:'WriteStory'
});