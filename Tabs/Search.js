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
    Button
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../search/categories/Category';
import TAG from '../search/categories/TAG';
// import Swipeable from 'react-native-gesture-handler/Swipeable';

class Search extends Component {
    title1 = "YesOrYes1"
    title2 = "YesOrYes2"
    title3 = "YesOrYes3"
    title4 = "YesOrYes4"
    title5 = "YesOrYes5"

    constructor(){
        super();
        this.state={text:''};
    }
    // componentWillMount(){
    //     this.PanResponder = PanResponder.create({
    //         onStartShouldSetPanResponder:(evt, gestureState)=>true,
    //         onPAnResponderMove:(evt, gestureState)=>{
    //             this.position.setValue({x:gestureState.dx, y:gestureState.dy})
    //         },
    //         onPanResponderRelease:(evt, gestureState)=>{
    //             if(gestureState.dx>12){
    //                 Animated.spring(this.position,{
    //                     toValue : {x:100+100,y:gestureState.dy}
    //                 }).start(()=>{
    //                     this.setState({currentIndex: this.state.currentIndex+1})
    //                 })
    //             }else if(gestureState.dx<-12){
    //                 Animated.spring(this.position,{
    //                     toValue:{x:100+100, y:gestureState.dy}
    //                 }).start(()=>{
    //                     this.setState({currentIndex:this.state.currentIndex + 1})
    //                 })
    //             }
    //         }
    //     })
    // }\

    _onPress(tag){
        this.setState({text: this.state.text + " "+ tag}) 
    }
    render() {
        return (
            <SafeAreaView style ={{flex:1}}>
                <View style = {{padding: 10}}>
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
                            onChangeText= {(text) => this.setState({text})}
                            value ={this.state.text}
                        />                               
                    </View> 
                    <ScrollView scrollEventThrottle={16}>
                        <View style={{flex:1, backgroundColor:'white', paddingTop:10}}>
                            <Text style={{fontSize:15, fontWeight:'700', paddingLeft:15}}>
                                Customize your Searches!
                            </Text>                
                            <View style={{marginTop:10, paddingLeft:5}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}>                                                                                   
                                    <Category imageUri={require('../assets/for_search/T.png')}/> 
                                    <Category imageUri={require('../assets/for_search/dress.png')}/> 
                                    <Category imageUri={require('../assets/for_search/Trousers.png')}/> 
                                    <Category imageUri={require('../assets/for_search/skirt.png')}/>
                                    <Category imageUri={require('../assets/for_search/outer.png')}/>
                                    <Category imageUri={require('../assets/for_search/shoes.png')}/> 
                                    <Category imageUri={require('../assets/for_search/hats.png')}/> 
                                    <Category imageUri={require('../assets/for_search/accessories.png')}/> 
                                </ScrollView>                          
                            </View> 
                            <View style={{flex: 1,alignItems: 'center',justifyContent: 'center', marginTop:10}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}> 
                                    <TAG title={this.title1} action = {this._onPress.bind(this, this.title1)}/>
                                    <TAG title={this.title2} action = {this._onPress.bind(this, this.title2)}/>
                                    <TAG title={this.title3} action = {this._onPress.bind(this, this.title3)}/>
                                    <TAG title={this.title4} action = {this._onPress.bind(this, this.title4)}/>
                                    <TAG title={this.title5} action = {this._onPress.bind(this, this.title5)}/>
                                </ScrollView>  
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
            //  <Animated.View 
            //     {...this.PanResponder.panHandlers}
            //     style={[{transform:this.position.getTranslateTransform()},{height: 80, padding:10}]}>
             
             
            // </Animated.View>
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
const Tab_bar_height = 50;