import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import MainScreen from './MainScreen';
import SignInScreen from './SignInScreen';
import AuthLoadingScreen from './AuthLoadingScreen';
import RegisterScreen from './RegisterScreen';

const AppStack = createStackNavigator({ Main: MainScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });
const RegisterStack = createStackNavigator({ Register: RegisterScreen });

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
    Regi: RegisterStack,
  },
  {
    headerMode: 'none',
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default createAppContainer(AppNavigator);