import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../search/categories/Category';
import SlidingPanel from 'react-native-sliding-up-down-panel';

class Search extends Component {
    render() {
        return (
            <SafeAreaView style ={{flex:1}}>
                <View style = {{height:80, padding: 10}}>
                    <View style={{
                        flexDirection:'row',
                        shadowOffset:{width:0,height:0},
                        shadowColor:'grey',
                        shadowOpacity:0.2,
                        elevation:1,
                        borderRadius: 10
                        }}>
                        <Icon name="md-search" size={25} style={{alignSelf : 'center', paddingLeft: 15, paddingRight:15}}/>
                        <TextInput
                        underlineColorAndroid='transparent'
                            placeholder = "Search"
                            placeholderTextColor='grey'
                            style={{flex:1,fontWeight:'700'}}
                            />
                        <SlidingPanel
                            headerLayoutHeight = {100}
                            headerLayout = { () => 
                                <View style={styles.headerLayoutStyle}>
                                <Text style={styles.commonTextStyle}>My Awesome sliding panel</Text>
                              </View>
                            }
                            slidingPanelLayout = { () =>
                                <ScrollView
                                    scrollEventThrottle={16}>
                                    <View style ={{flex:1, backgroundColor:'white', paddingTop:20}}>
                                        <View style={{height:130, marginTop:20}}>
                                            <ScrollView
                                                horizontal={true}
                                                showsHorizontalScrollIndicator={false}>                                                                                   
                                                <Category imageUri={require('../assets/for_search/t_shirt.jpg')}/> 
                                                <Category imageUri={require('../assets/for_search/t_shirt.jpg')}/> 
                                                <Category imageUri={require('../assets/for_search/t_shirt.jpg')}/> 
                                                <Category imageUri={require('../assets/for_search/t_shirt.jpg')}/> 
                                            </ScrollView>
                                        </View>
                                    </View>
                                </ScrollView>
                            }
                        />    
                    </View>
                    
                </View>
            </SafeAreaView>
        );
    }
}
export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});