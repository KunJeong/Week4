import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import Realm from 'realm';
import { SERVER_URL } from '../constants';
import { One_Image, Post, Tag, Clothes, Closet, Comment, LookBook, User } from '../schemas';
import { thisTypeAnnotation } from '@babel/types';

export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.signIn = this.signIn.bind(this);
    this.register = this.register.bind(this);
    this.initLogin = this.initLogin.bind(this);
    this.initLogin2 = this.initLogin2.bind(this);
  }
  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  }

  async signIn() {

    if ((!this.state.username) || (!this.state.password)) {
      Alert.alert(
        '',
        'Please check username or password!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
      return;
    }
    try {
      let creds = await Realm.Sync.Credentials.usernamePassword(this.state.username, this.state.password, false);
      await Realm.Sync.User.login(SERVER_URL, creds);
    }
    catch (error) {
      const isAuthenticated = !!Realm.Sync.User.current;
    }

    const isAuthenticated = !!Realm.Sync.User.current;

    if (isAuthenticated) {
      // this.initLogin();
      this.initLogin2();
      this.initLogin();
      // this.initLogin2();
      this.props.navigation.navigate('App', { username: this.state.username, password: this.state.password });
    }
    else {
      Alert.alert(
        '',
        'The provided credentials are invalid or the user does not exist!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
    }
  }

  initLogin() {
    const creds = Realm.Sync.Credentials.usernamePassword(this.state.username, this.state.password, false);
    Realm.Sync.User.login('https://fashion.us1.cloud.realm.io', creds).then((user) => {
      // Alert.alert(username, password);
      // const user = Realm.Sync.User.current 
      let config = user.createConfiguration();
      config.schema = [One_Image, Post, Tag, Clothes, Closet, Comment, LookBook, User]
      // config.fullSynchronization = true;
      // config.deleteRealmIfMigrationNeeded = true;
      config.validate_ssl = false
      config.sync.url = 'realms://fashion.us1.cloud.realm.io/hello'

      Realm.open(config).then((realm) => {
        // realm.write(() => {
        //     let jonh = realm.create('Comment', {userId: 'add', commentId: '1010100', comment: 'wtf', like: []})
        // });

        let carOwners = realm.objects('Comment');
        let subscribe = carOwners.subscribe();
        // Alert.alert('llll')
        var total = ''
        for (let p of carOwners) {
          total += p.comment.toString();
        }
        Alert.alert(total);
      });
    });
  }
  initLogin2(){
    const user = Realm.Sync.User.current;
    let config = user.createConfiguration();
    config.schema = [One_Image, Post, Tag, Clothes, Closet, Comment, LookBook, User]
    // config.fullSynchronization = true;
    // config.deleteRealmIfMigrationNeeded = true;
    config.validate_ssl = false
    config.sync.url = 'realms://fashion.us1.cloud.realm.io/hello'

    Realm.open(config).then((realm) => {
      // realm.write(() => {
      //     let jonh = realm.create('Comment', {userId: 'add', commentId: '1010100', comment: 'wtf', like: []})
      // });

      let carOwners = realm.objects('Comment');
      let subscribe = carOwners.subscribe();
      // Alert.alert('llll')
      var total = ''
      for (let p of carOwners) {
        total += p.comment.toString();
      }
      Alert.alert(total);
    });
  }

  signOut() {
    Realm.Sync.User.current.logout();
    this.props.navigation.navigate('Auth');
  }

  register() {
    this.props.navigation.navigate('Regi');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Username"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(username) => this.setState({ username })} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({ password })} />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.signIn.bind(this)}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
          <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={this.register.bind(this)}>
          <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});