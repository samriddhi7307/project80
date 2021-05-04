import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu from '../components/CustomSideBarMenu';
import { AppTabNavigator } from '../components/AppTabNavigator';

export const AppDrawerNavigator = createDrawerNavigator({
  Home:{
      screen:AppTabNavigator
  }
},
{
    contentComponent:CustomSideBarMenu
        },
{
    initialRouteName:'Home'
         })