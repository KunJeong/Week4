import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import MainFeed from './MainFeed';
import Search from './Search';
import MyCloset from './MyCloset';
import MyPage from './MyPage';
import { AddButton } from './AddButton';

import Icon from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator({
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
  Camera : {
    screen: () => null, // Empty screen
    navigationOptions: () => ({
        tabBarIcon: <AddButton/> // Plus button component
    })
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

export default createAppContainer(TabNavigator);