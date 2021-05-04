import React from 'react';
import {Image} from 'react-native';
import WriteStoryScreen from '../screens/WriteStoryScreen';
import ReadStoryScreen from '../screens/ReadStoryScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {AppStackNavigator} from './AppStackNavigator';

export const AppTabNavigator  = createBottomTabNavigator({
    WriteStory:{
 screen:AppStackNavigator,
 navigationOptions:
 {
 tabBarIcon:<Image source = {require("../assets/write.png")}
 style = {{width:40,height:40}}
 />,
 tabBarLabel:"Write Story",
}
    },
    ReadStory:{
        screen:ReadStoryScreen
    }
})

