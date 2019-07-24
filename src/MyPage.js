import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from "react-native";

class MyPage extends Component {
    constructor(props) {
      super(props);
      this.logout = this.logout.bind(this);
    }

    logout() {
        Realm.Sync.User.current.logout();
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.buttonContainer}>
                    Hi!
                </Text>
                <TouchableHighlight style={[styles.buttonContainer, styles.logoutButton]} onPress={this.logout.bind(this)}>
                <Text style={styles.logoutText}>Log Out</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default MyPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    logoutButton: {
      backgroundColor: "#00b5ec",
    },
    logoutText: {
      color: 'white',
    }
});