import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{height:30,width:30, marginLeft:5, 
            borderWidth:null, borderColor:'#fff', borderRadius:10}}>
                <Image source={this.props.imageUri}
                    style ={{flex:1, width: null, height:null, resizeMode:'cover'}}/>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});