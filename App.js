/**
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import MainFeed from './Tabs/MainFeed';
import Search from './Tabs/Search/Search';
import MyCloset from './Tabs/MyCloset/MyCloset';
import MyPage from './Tabs/MyPage';
import ScrapBook from './Tabs/ScrapBook'

import Icon from 'react-native-vector-icons/Ionicons';
import {IcoMoon} from "@up-shared/components";
import styles from './Tabs/MyCloset/styles/index.style'

class App extends React.Component<{}>{
  render(){
    return(
      <View style  = {styles.container}>
        <Text>LALALALALALA</Text>
      </View>
    )
  }
}

export default createBottomTabNavigator({
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
        <IcoMoon 
          name="closet" 
          color ={tintColor}
          size = {24}
        />
      ),
    }
  },

  ScrapBook:{
    screen:ScrapBook,
    navigationOptions:{
      tabBarLabel: "Scrap Book",
      tabBarIcon: ({tintColor})=>(
        <IcoMoon 
          name="scrapbook" 
          color = {tintColor} 
          size={24}/>
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

