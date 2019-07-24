import React, { Component } from "react";
import colors from './MyCloset/styles/index.style';
import { 
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from "react-native";

class MyPage extends Component {
    constructor(props) {
      super(props);
    }

    signout() {
        Realm.Sync.User.current.logout();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:3, flexDirection:'row'}}>
                    <View style={{flex:2}}></View>
                    <View style={[{flex:3}, styles.userMainImage]}>
                        <View style={styles.circle} />
                    </View>
                    <View style={{flex:2}}>
                        <View style={{flex:1}}>
                            <TouchableHighlight style={[styles.buttonContainer, styles.logoutButton]} onPress={this.signout.bind(this)}>
                            <Text style={styles.logoutText}>Log Out</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <View style={{flex:2}}>
                    {/* My Activity */}
                </View>
                <View style={{flex:5}}>
                    {/* My Post */}
                </View>
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
    userMainImage: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        backgroundColor: 'red'
    },
    buttonContainer: {
      height:30,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
      margin:10,
      width:50,
      borderRadius:5,
    },
    logoutButton: {
      backgroundColor: "#F0F0F0",
    },
    logoutText: {
      color: colors.black,
    }
});