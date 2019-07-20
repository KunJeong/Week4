import React, { Component } from 'react';
import Realm from "realm";

export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentDidMount() {
    // Check if we're already authenticated
    if (Realm.Sync.User.current) {
      this.onAuthenticated(Realm.Sync.User.current);
    }
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const isAuthenticated = !!Realm.Sync.User.current;

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(isAuthenticated ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }

  onAuthenticated(user) {
    // Create a configuration to open the default Realm
    const config = user.createConfiguration({
      schema: [Project, Item]
    });
    // Open the Realm
    const realm = new Realm(config);
    // Navigate to the main scene
    Actions.authenticated({ user, realm });
  }
}