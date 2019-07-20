import { Navigation } from 'react-native-navigation';

import SignInScreen from './SignInScreen';
import MainScreen from './MainScreen';
import JoinScreen from './JoinScreen';

export function registerScreens() {
  Navigation.registerComponent('closet.SignInScreen', () => SignInScreen);
  Navigation.registerComponent('closet.MainScreen', () => MainScreen);
  Navigation.registerComponent('closet.JoinScreen', () => JoinScreen);
}