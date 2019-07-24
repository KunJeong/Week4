import React, { Component } from 'react';
import Realm from "realm";
import { SERVER_URL } from '../constants';
import { View, ActivityIndicator, StatusBar, Alert } from "react-native";
import { One_Image, Comment, Post, Clothes, Closet, User, Tag } from '../schemas';

export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.checkLogin();
  }
  checkLogin = async () => {
    const isAuthenticated = await !!Realm.Sync.User.current;
    this.props.navigation.navigate(isAuthenticated ? 'App' : 'Auth');
  };

  userLogoutAll() {
    var users = Realm.Sync.User.all;
    for(const key in users) {
      const user = users[key];
      user.logout();
    }
  }

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" hidden />
      </View>
    );
  }
}