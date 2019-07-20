import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';

import MainFeed from "./src/MainFeed";
import Search from "./src/Search";
import MyCloset from "./src/MyCloset";
import MyPage from "./src/MyPage";
import ScrapBook from "./src/ScrapBook";

import Icon from 'react-native-vector-icons/Ionicons';

export class App extends React.Component{
  render(){
    return(<AppTabNavigator />);
  }
}

const AppTabNavigator = createBottomTabNavigator({
  MainFeed:{
    screen: MainFeed,
    navigationOptions:{
      tabBarLabel: "Main Feed",
      tabBarIcon: ({tintColor})=>(
        <Icon name="md-paper" color =
        {tintColor} size={24}/>
      ),
    }
  },
  Search:{
    screen:Search,
    navigationOptions:{
      tabBarLabel: "Search",
      tabBarIcon: ({tintColor})=>(
        <Icon name="md-search" color =
        {tintColor} size={24}/>
      ),
    }
  },

  MyCloset:{
    screen:MyCloset,
    navigationOptions:{
      tabBarLabel: "My Closet",
      tabBarIcon: ({tintColor})=>(
        <Icon name="md-shirt" color =
        {tintColor} size={24}/>
      ),
    }
  },

  ScrapBook:{
    screen:ScrapBook,
    navigationOptions:{
      tabBarLabel: "Scrap Book",
      tabBarIcon: ({tintColor})=>(
        <IcoMoon 
          name="closet" 
          color ={tintColor}
          size = {24}
        />
      ),
    }
  },

  MyPage:{
    screen:MyPage,
    navigationOptions:{
      tabBarLabel: "My Page",
      tabBarIcon: ({tintColor})=>(
        <Icon name="md-person" color =
        {tintColor} size={24}/>
      ),
    }
  },
},{
  tabBarOptions: {
      showLabel: false, // hide labels
      activeTintColor: '#586589', // active icon color
      inactiveTintColor: '#fff7ff',  // inactive icon color
      style: {
          backgroundColor: '#e6cea8' // TabBar background
    }
}});

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor : '#fff7ff',
    alignItems : 'center',
    justifyContent : 'center',
  },
});

