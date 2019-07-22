import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

class Category extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress = {()=> this.props.uponPress("#"+this.props.title)}>
                <View style={{height:25,width:25, marginRight:20, marginTop:5, 
                borderWidth:null, borderColor:'#fff', borderRadius:10}}>
                    <Image source={this.props.imageUri}
                        style ={{flex:1, width: null, height:null, resizeMode:'cover'}}/>
                </View>
            </TouchableOpacity>
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