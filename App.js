/*import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import WelcomeScreen from './screens/WelcomeScreen';

import { AppTabNavigator } from './components/AppTabNavigator';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default function App() {
  return (
  <AppContainer/>  
  );
}
const TabNavigator = createBottomTabNavigator({
    WriteStoryScreen: {screen: WriteStoryScreen},
    ReadStoryScreen : {screen: ReadStoryScreen},
  },
  {
    defaultNavigationOptions: ({navigation})=>({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        
        if(routeName === "WriteStoryScreen"){
          return(
            <Image
            source={require("./assets/write.png")}
            style={{width:40, height:40,}}
          />)

        }   
        else  if(routeName === "ReadStoryScreen"){
          return(
            <Image
            source={require("./assets/read.png")}
            style={{width:40, height:40}}
          />
          )

        }
      }
    })
  }
);

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  //BottomTab:{screen: TabNavigator},
  Drawer:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
*/
import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { AppTabNavigator } from './components/AppTabNavigator';
import  {AppDrawerNavigator}  from './components/AppDrawerNavigator';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
  WriteStoryScreen: {screen: WriteStoryScreen},
  ReadStoryScreen : {screen: ReadStoryScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      
      if(routeName === "WriteStoryScreen"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40,}}
        />)

      }   
      else  if(routeName === "ReadStoryScreen"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />
        )

      }
    }
  })
})

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  BottomTab:{screen: TabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);

/*import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './screens/WelcomeScreen';
import { AppTabNavigator } from './components/AppTabNavigator';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);*/