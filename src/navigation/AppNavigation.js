import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import ChatBotScreen from '../screens/ChatBotScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EssayScreen from '../screens/EssayScreen';
import ExportScreen from '../screens/ExportScreen';

const MainStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  ChatBotScreen: {
    screen: ChatBotScreen,
  },
  EssayScreen: {
    screen: EssayScreen,
  },
  ExportScreen: {
    screen: ExportScreen,
  },
});

const AppNavigation = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    SettingsScreen: {
      screen: SettingsScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default AppNavigation;
