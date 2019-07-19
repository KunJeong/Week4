import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class MainFeed extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MainFeed</Text>
            </View>
        );
    }
}
export default MainFeed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});