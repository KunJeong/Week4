/**
 * @flow
 */

import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    PanResponder,
    Dimensions,
    TouchableHighlight
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Category from './search/categories/Category';
import TAG from './search/categories/TAG';
import styles from '../MyCloset/styles/index.style'

const title1 = "Fashion"
const title2 = "Street"
const title3 = "ThugLife"
const title4 = "가로수길"
const title5 = "High_Fashion"

type State = {
    text: string,
    Bar: boolean,
    searchResults?: array
}
class Search extends Component<{}, State> {
    constructor(){
        super();
        this._onPressOptions = this._onPressOptions;
        this.state = {
            text: "", 
            Bar : false,
            searchResults : []
        }
    }
    
    uponPress=(tag)=>{
        this.setState({text: this.state.text + " "+ tag}); 
    }
    _onPressOptions=()=>{
        this.setState({Bar : !this.state.Bar})
    }
    optionBarRender(){
        if(this.state.Bar){
            return(              
                <View style={{
                    marginTop : 5,
                    paddingLeft:15, 
                    flex:1, 
                    backgroundColor:'white',
                    borderRadius: 10, 
                    shadowOffset:{width:0,height:0},
                    shadowColor:'grey',
                    shadowOpacity:0.1,
                    elevation:1,}}>
                    <View style={{flexWrap: 'wrap', flexDirection:'row', alignItems: 'center'}}>                                                                                   
                        <Category title="T-shirt" imageUri={require('../../assets/for_search/T.png')} uponPress={this.uponPress}/> 
                        <Category title="Dress" imageUri={require('../../assets/for_search/dress.png')} uponPress={this.uponPress}/> 
                        <Category title="Trousers" imageUri={require('../../assets/for_search/Trousers.png')} uponPress={this.uponPress}/> 
                        <Category title="Skirt" imageUri={require('../../assets/for_search/skirt.png')} uponPress={this.uponPress}/>
                        <Category title="Outer" imageUri={require('../../assets/for_search/outer.png')} uponPress={this.uponPress}/>
                        <Category title="Shoes" imageUri={require('../../assets/for_search/shoes.png')} uponPress={this.uponPress}/> 
                        <Category title="Hats" imageUri={require('../../assets/for_search/hats.png')} uponPress={this.uponPress}/> 
                        <Category title="Accessories" imageUri={require('../../assets/for_search/accessories.png')} uponPress={this.uponPress}/> 
                        <TAG title={title1} uponPress={this.uponPress}/>
                        <TAG title={title2} uponPress={this.uponPress}/>
                        <TAG title={title3} uponPress={this.uponPress}/>
                        <TAG title={title4} uponPress={this.uponPress}/>
                        <TAG title={title5} uponPress= {this.uponPress}/>
                    </View> 
                </View>
            )
        }else{
            return null;
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style = {{flex: 1, alignItems:'center',justifyContent : 'center', padding:10}}>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(0, 0, 0, 0.3)'}
                      barStyle={'light-content'}
                    />
                    <View style={{
                        flexDirection:'row',
                        shadowOffset:{width:0,height:0},
                        shadowColor:'grey',
                        shadowOpacity:0.2,
                        elevation:1,
                        borderRadius: 10,
                        marginTop:StatusBar.currentHeight
                        }}>
                        
                        <Icon name="md-search" size={25} style={{alignSelf : 'center', paddingLeft: 15, paddingRight:15}}/>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder = "검색"
                            placeholderTextColor='grey'
                            style={{flex:1,fontWeight:'700'}}
                            onChangeText= {(text) => this.setState({text})}
                            value ={this.state.text}
                        />
                        <Icon 
                            name="md-options" 
                            size={25} style={{alignSelf : 'center', paddingLeft: 15, paddingRight:15}}
                            onPress={()=> this._onPressOptions()}
                        />                    
                    </View> 
                    <ScrollView scrollEventThrottle={16}>
                        <View>
                            {this.optionBarRender()}
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }   
}
export default Search;
