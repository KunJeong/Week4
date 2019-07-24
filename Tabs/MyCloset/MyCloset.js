import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet, Dimensions, Image, Alert, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import styles, { colors } from './styles/index.style';
import styles_swiper from './styles/styles_swiper';
import { T_Shirtdb, Dressdb, Trousersdb, Skirtdb, Outerdb, Shoesdb, Hatsdb, Accessoriesdb } from './static/entries';
import { scrollInterpolators, animatedStyles } from './utils/animations';
import Icon from 'react-native-vector-icons/Ionicons'
import CarouselOptions from './CarouselOptions';
import Category_Closet from './Category_Closet'
import Swiper from 'react-native-swiper';
import { Container, Content } from 'native-base';


const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
let offset = ((screenHeight - StatusBar.currentHeight) - screenWidth) / 2;

// let styhat={}
// let styt_shirt={}
// let stydress={}
// let stytrousers={}
// let styskirt={}
// let styouter={}
// let styshoes={}
// let styaccessories={}



class MyCloset extends Component {
    constructor(props) {
        super(props);
        this._addItemToSet = this._addItemToSet.bind(this)
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            b_T_shirt: false, b_Dress: false, b_Trousers: false,
            b_Skirt: false, b_Outer: false, b_Shoes: false,
            b_Hats: false, b_Accessories: false,

            Outer: null,
            T_shirt: null,
            Dress: null,
            Trousers: null,
            Skirt: null,
            Shoes: null,
            Hats: null,
            Accessories: null
        };
    }



    uponPressT = () => {
        this.setState({ b_T_shirt: !this.state.b_T_shirt });
    }
    uponPressDress = () => {
        this.setState({ b_Dress: !this.state.b_Dress });
    }
    uponPressTrousers = () => {
        this.setState({ b_Trousers: !this.state.b_Trousers });
    }
    uponPressSkirt = () => {
        this.setState({ b_Skirt: !this.state.b_Skirt });
    }
    uponPressOuter = () => {
        this.setState({ b_Outer: !this.state.b_Outer });
    }
    uponPressShoes = () => {
        this.setState({ b_Shoes: !this.state.b_Shoes });
    }
    uponPressHats = () => {
        this.setState({ b_Hats: !this.state.b_Hats });
    }
    uponPressAcc = () => {
        this.setState({ b_Accessories: !this.state.b_Accessories });
    }

    // _addItemToSet(uri, itemtype){
    //     const temp = {...this.state.selected_Items};

    //     if(itemtype=='T-shirt'){
    //         var t_itemtype = itemtype.replace('-','_')
    //     }
    //     temp[itemtype] = uri;
    //     Alert.alert(JSON.stringify(temp))
    //     this.setState({selected_Items : temp });
    // }
    _addItemToSet(uri, itemtype) {
        if (itemtype == 'T-shirt') {
            this.setState({ T_shirt: uri })
        }
        switch (itemtype) {
            case 'Outer':
                this.setState({ Outer: uri })
                break
            case 'Dress':
                this.setState({ Dress: uri })
                break
            case 'Trousers':
                this.setState({ Trousers: uri })
                break
            case 'Skirt':
                this.setState({ Skirt: uri })
                break
            case 'Shoes':
                this.setState({ Shoes: uri })
                break
            case 'Hats':
                this.setState({ Hats: uri })
                break
            case 'Accessories':
                this.setState({ Accessories: uri })
                break
        }

        Alert.alert('state updated')
    }

    layoutExample(title, type, DataType) {
        const isTinder = type === 'tinder';
        return (
            <CarouselOptions name={title} Type={type} Data={DataType} _addItemToSet={this._addItemToSet} />
        );
    }


    render() {

        const T_shirt = this.layoutExample('T-shirt', 'stack', T_Shirtdb);
        const Dress = this.layoutExample('Dress', 'stack', Dressdb);
        const Trousers = this.layoutExample('Trousers', 'stack', Trousersdb);
        const Skirt = this.layoutExample('Skirt', 'stack', Skirtdb);
        const Outer = this.layoutExample('Outer', 'stack', Outerdb);
        const Shoes = this.layoutExample('Shoes', 'stack', Shoesdb);
        const Hats = this.layoutExample('Hats', 'stack', Hatsdb);
        const Accessories = this.layoutExample('Accessories', 'stack', Accessoriesdb);

        return (
            <SafeAreaView style={IS_ANDROID? styles_swiper.containerStyle_Android : styles_swiper.containerStyle}>
                <Swiper
                    loop={false}
                    showsButtons={false}
                    showsPagination={false}
                    horizontal={Platform.OS == 'android'}
                    width={Platform.OS == 'android' ? screenHeight : screenWidth}
                    height={Platform.OS == 'android' ? screenWidth : screenHeight}
                    index={1}>
                    <View style={[IS_ANDROID? styles_swiper.pageStyle_Android2: styles_swiper.pageStyle, {flexDirection: 'row'}]}>
                        <View style={{ flex: 3, backgroundColor: '#ECE5DD' }}>
                            <View style={{ flex: 1 }}></View>
                            <View style={{ flex: 2, flexDirection: 'row' }}>
                                <View style={{flex:3}}></View>
                                <View style={{flex:4, alignItems: 'center'}}>
                                    {this.state.Hats == null ?
                                        <Image source={require('../../assets/for_search/hats.png')} style={styles_swiper.nohats} />
                                        :
                                        <Image source={{ uri: this.state.Hats }} style={styles_swiper.hats} />
                                    }
                                </View>
                                <View style={{flex:5}}></View>
                            </View>
                            <View style={{ flex: 6, flexDirection: 'row' }}>
                                <View style={{flex:1}}></View>
                                <View style={{ flex: 2}}>
                                    <View style={{ flex: 1 }}>
                                        {this.state.T_shirt == null ?
                                            (this.state.Dress == null ?
                                                <Image source={require('../../assets/for_search/T.png')} style={styles_swiper.not_shirt} />
                                                : null)
                                            :
                                            <Image source={{ uri: this.state.T_shirt }} style={styles_swiper.t_shirt} onPress={this.state.T_shirt} />
                                        }
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        {this.state.Trousers == null ?
                                            ((this.state.Skirt == null && this.state.Dress == null) ?
                                                <Image source={require('../../assets/for_search/Trousers.png')} style={styles_swiper.notrousers} />
                                                : null)
                                            :
                                            <Image source={{ uri: this.state.Trousers }} style={styles_swiper.trousers} />
                                        }
                                        {this.state.Skirt == null ?
                                            ((this.state.Trousers == null && this.state.Dress == null) ?
                                                <Image source={require('../../assets/for_search/skirt.png')} style={styles_swiper.noskirt} />
                                                : null)
                                            :
                                            <Image source={{ uri: this.state.Skirt }} style={styles_swiper.skirt} />
                                        }
                                    </View>
                                </View>
                                <View style={{flex:2 }}>
                                    <View style={{flex:1}}></View>
                                    <View style={{flex:4}}>
                                        {this.state.Dress == null ?
                                            ((this.state.T_shirt == null && this.state.Trousers == null && this.state.Skirt == null) ?
                                                <Image source={require('../../assets/for_search/dress.png')} style={styles_swiper.nodress} />
                                                : null)
                                            :
                                            <Image source={{ uri: this.state.Dress }} style={styles_swiper.dress} />
                                        }
                                    </View>
                                    <View style={{flex:2}}></View>
                                </View>
                                <View style={{flex:2}}>
                                    <View style={{flex:1}}>
                                        {this.state.Outer == null ?
                                            <Image source={require('../../assets/for_search/outer.png')} style={styles_swiper.noouter} />
                                            :
                                            <Image source={{ uri: this.state.Outer }} style={styles_swiper.outer} />
                                        }
                                    </View>
                                    <View style={{flex:2}}></View>
                                    <View style={{flex:1}}>
                                        {this.state.Accessories == null ?
                                            <Image source={require('../../assets/for_search/accessories.png')} style={styles_swiper.noaccessoriesTOP} />
                                            :
                                            <Image source={{ uri: this.state.Accessories }} style={styles_swiper.accessoriesTOP} />
                                        }
                                    </View>
                                </View>
                                <View style={{flex:1}}></View>
                            </View>
                            <View style={{ flex: 2, flexDirection: 'row' }}>
                                <View style={{flex:3}}></View>
                                <View style={{flex:4, alignItems: 'center', justifyContent:'flex-end'}}>
                                    {this.state.Shoes == null ?
                                        <Image source={require('../../assets/for_search/shoes.png')} style={styles_swiper.noshoes} />
                                        :
                                        <Image source={{ uri: this.state.Shoes }} style={styles_swiper.shoes} />

                                    }
                                </View>
                                <View style={{flex:3, alignItems: 'center'}}>
                                </View>
                                <View style={{flex:2}}></View>
                            </View>
                            <View style={{ flex: 2 }}></View>
                        </View>
                        <ScrollView style={{ flex: 6, backgroundColor: '#A6A6A6' }}>
                            <Text>Happy DeathDay</Text>
                        </ScrollView>
                    </View>
                    <View style={[IS_ANDROID? styles_swiper.pageStyle_Android: styles_swiper.pageStyle, { paddingTop: 10 }]}>
                        <ScrollView
                            style={styles.scrollview}
                            scrollEventThrottle={200}
                            directionalLockEnabled={true}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center' }}>
                                <View style={this.state.b_Hats ? { borderBottomColor: '#92DFF3', borderBottomWidth: 3 } : {}}>
                                    <Category_Closet title="Hats" imageUri={require('../../assets/for_search/hats.png')} uponPress={this.uponPressHats} isopen={this.state.b_Hats} />
                                </View>
                                <View style={this.state.b_Outer ? { borderBottomColor: '#92DFF3', borderBottomWidth: 3 } : {}}>
                                    <Category_Closet title="Outer" imageUri={require('../../assets/for_search/outer.png')} uponPress={this.uponPressOuter} isopen={this.state.b_Outer} />
                                </View>
                                <View style={this.state.b_T_shirt ? { borderBottomColor: '#92DFF3', borderBottomWidth: 3 } : {}}>
                                    <Category_Closet title="T-shirt" imageUri={require('../../assets/for_search/T.png')} uponPress={this.uponPressT} isopen={this.state.b_T_shirt} />
                                </View>
                                <View style={this.state.b_Dress ? { borderBottomColor: '#92DFF3', borderBottomWidth: 3 } : {}}>
                                    <Category_Closet title="Dress" imageUri={require('../../assets/for_search/dress.png')} uponPress={this.uponPressDress} isopen={this.state.b_Dress} />
                                </View>
                                <View style={this.state.b_Trousers ? { borderBottomColor: '#92DFF3', borderBottomWidth: 3 } : {}}>
                                    <Category_Closet title="Trousers" imageUri={require('../../assets/for_search/Trousers.png')} uponPress={this.uponPressTrousers} isopen={this.state.b_Trousers} />
                                </View>
                                <View style={this.state.b_Skirt ? { borderBottomColor: '#92DFF3', borderBottomWidth: 3 } : {}}>
                                    <Category_Closet title="Skirt" imageUri={require('../../assets/for_search/skirt.png')} uponPress={this.uponPressSkirt} isopen={this.state.b_Skirt} />
                                </View>
                                <View style={this.state.b_Shoes ? { borderBottomColor: '#92DFF3', borderBottomWidth: 3 } : {}}>
                                    <Category_Closet title="Shoes" imageUri={require('../../assets/for_search/shoes.png')} uponPress={this.uponPressShoes} isopen={this.state.b_Shoes} />
                                </View>
                                <View style={this.state.b_Accessories ? { borderBottomColor: '#92DFF3', borderBottomWidth: 3 } : {}}>
                                    <Category_Closet title="Accessories" imageUri={require('../../assets/for_search/accessories.png')} uponPress={this.uponPressAcc} isopen={this.state.b_Accessories} />
                                </View>
                            </View>
                            {this.state.b_Hats ? Hats : null}
                            {this.state.b_Outer ? Outer : null}
                            {this.state.b_T_shirt ? T_shirt : null}
                            {this.state.b_Dress ? Dress : null}
                            {this.state.b_Trousers ? Trousers : null}
                            {this.state.b_Skirt ? Skirt : null}
                            {this.state.b_Shoes ? Shoes : null}
                            {this.state.b_Accessories ? Accessories : null}
                        </ScrollView>
                    </View>
                </Swiper>
            </SafeAreaView>
        );
    }
}
export default MyCloset;



