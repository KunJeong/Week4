import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import styles, { colors } from './styles/index.style';
import { T_Shirtdb, Dressdb, Trousersdb, Skirtdb, Outerdb, Shoesdb, Hatsdb, Accessoriesdb } from './static/entries';
import { scrollInterpolators, animatedStyles } from './utils/animations';
import Icon from 'react-native-vector-icons/Ionicons'
import CarouselOptions from './CarouselOptions';
import Category_Closet from './Category_Closet'
import Swiper from 'react-native-swiper';
import Swipeable from 'react-native-gesture-handler/Swipeable'


const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;


class MyCloset extends Component {
    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            b_T_shirt:false,
            b_Dress : false,
            b_Trousers : false,
            b_Skirt : false,
            b_Outer : false,
            b_Shoes : false,
            b_Hats : false,
            b_Accessories : false
        };
    }
    
    uponPressT=()=>{
        this.setState({b_T_shirt: !this.state.b_T_shirt}); 
    }
    uponPressDress=()=>{
        this.setState({b_Dress: !this.state.b_Dress}); 
    }
    uponPressTrousers=()=>{
        this.setState({b_Trousers: !this.state.b_Trousers}); 
    }
    uponPressSkirt=()=>{
        this.setState({b_Skirt: !this.state.b_Skirt}); 
    }
    uponPressOuter=()=>{
        this.setState({b_Outer: !this.state.b_Outer}); 
    }
    uponPressShoes=()=>{
        this.setState({b_Shoes: !this.state.b_Shoes}); 
    }
    uponPressHats=()=>{
        this.setState({b_Hats: !this.state.b_Hats}); 
    }
    uponPressAcc=()=>{
        this.setState({b_Accessories: !this.state.b_Accessories}); 
    }

    layoutExample (title, type, DataType) {
        const isTinder = type === 'tinder';
        return (
            <CarouselOptions name={title} Type={type} Data={DataType}/>
        );
    }


    render () {

        const T_shirt = this.layoutExample('T-shirt', 'stack', T_Shirtdb);
        const Dress = this.layoutExample('Dress', 'stack', Dressdb);
        const Trousers = this.layoutExample('Trousers', 'stack', Trousersdb);
        const Skirt = this.layoutExample('Skirt', 'stack', Skirtdb);
        const Outer = this.layoutExample('Outer', 'stack', Outerdb);
        const Shoes = this.layoutExample('Shoes', 'stack', Shoesdb);
        const Hats = this.layoutExample('Hats', 'stack', Hatsdb);
        const Accessories = this.layoutExample('Accessories', 'stack', Accessoriesdb);

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(0, 0, 0, 0.3)'}
                      barStyle={'light-content'}
                    />
                    <Swiper style={styles_swiper.wrapper} showsButtons={true}>
                        <View style={styles.container}>
                            <Text style={styles_swiper.text}>Hello Swiper</Text>
                        </View>
                        <View style={styles.container}>
                            <ScrollView
                                style={styles.scrollview}
                                scrollEventThrottle={200}
                                directionalLockEnabled={true}
                                style={{marginTop:StatusBar.currentHeight}}
                                >
                                <View style={{flexDirection:'row', alignItems:'stretch',justifyContent:'center', marginTop:10}}>
                                    <View style ={this.state.b_Outer ? {borderBottomColor: '#92DFF3', borderBottomWidth:3}: {}}>
                                    <Category_Closet title="Outer" imageUri={require('../../assets/for_search/outer.png')} uponPress={this.uponPressOuter} isopen={this.state.b_Outer}/>
                                    </View>
                                    <View style ={this.state.b_T_shirt ? {borderBottomColor: '#92DFF3', borderBottomWidth:3}: {}}>
                                        <Category_Closet title="T-shirt" imageUri={require('../../assets/for_search/T.png')} uponPress={this.uponPressT} isopen={this.state.b_T_shirt}/> 
                                    </View>
                                    <View style ={this.state.b_Dress ? {borderBottomColor: '#92DFF3', borderBottomWidth:3}: {}}>
                                    <Category_Closet title="Dress" imageUri={require('../../assets/for_search/dress.png')} uponPress={this.uponPressDress} isopen={this.state.b_Dress}/> 
                                    </View>
                                    <View style ={this.state.b_Trousers ? {borderBottomColor: '#92DFF3', borderBottomWidth:3}: {}}>
                                    <Category_Closet title="Trousers" imageUri={require('../../assets/for_search/Trousers.png')} uponPress={this.uponPressTrousers} isopen={this.state.b_Trousers}/> 
                                    </View>
                                    <View style ={this.state.b_Skirt ? {borderBottomColor: '#92DFF3', borderBottomWidth:3}: {}}>
                                    <Category_Closet title="Skirt" imageUri={require('../../assets/for_search/skirt.png')} uponPress={this.uponPressSkirt} isopen={this.state.b_Skirt}/>
                                    </View>
                                    <View style ={this.state.b_Shoes ? {borderBottomColor: '#92DFF3', borderBottomWidth:3}: {}}>
                                    <Category_Closet title="Shoes" imageUri={require('../../assets/for_search/shoes.png')} uponPress={this.uponPressShoes} isopen={this.state.b_Shoes}/> 
                                    </View>
                                    <View style ={this.state.b_Hats ? {borderBottomColor: '#92DFF3', borderBottomWidth:3}: {}}>
                                    <Category_Closet title="Hats" imageUri={require('../../assets/for_search/hats.png')} uponPress={this.uponPressHats} isopen={this.state.b_Hats}/> 
                                    </View>
                                    <View style ={this.state.b_Accessories ? {borderBottomColor: '#92DFF3', borderBottomWidth:3}: {}}>
                                    <Category_Closet title="Accessories" imageUri={require('../../assets/for_search/accessories.png')} uponPress={this.uponPressAcc} isopen={this.state.b_Accessories}/> 
                                    </View>
                                </View>
                                {this.state.b_Outer ? Outer  : null }
                                {this.state.b_T_shirt ?  T_shirt : null}
                                {this.state.b_Dress ?  Dress  : null }
                                {this.state.b_Trousers ?  Trousers  : null }
                                {this.state.b_Skirt ?  Skirt  : null }
                                {this.state.b_Shoes ?  Shoes  : null }
                                {this.state.b_Hats ?  Hats  : null }
                                {this.state.b_Accessories ?  Accessories  : null }
                            </ScrollView>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles_swiper.text}>And simple</Text>
                        </View>
                    </Swiper>
                    
                </View>
            </SafeAreaView>
        );
    }
}
export default MyCloset;

const styles_swiper = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })