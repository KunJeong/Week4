import firebase from 'react-native-firebase'; 
let config = {
  apiKey: 'AIzaSyBIOd3ybTHDHN9xftrhMkgd-IpY51euXyw',
  databaseURL: 'https://closet-496d3.firebaseio.com',
  storageBucket: 'closet-496d3.appspot.com',
};
let app = firebase.initializeApp(config);
export const db = app.database();
export const storage = app.storage();