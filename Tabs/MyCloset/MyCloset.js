import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, 
         StyleSheet, Dimensions, Image, Alert, TouchableOpacity, TextInput,
         Modal } from 'react-native';
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
import ViewShot from 'react-native-view-shot';
import { FlatList } from 'react-native-gesture-handler';
import OutfitImage from './OutfitImage';
import {v4 as uuid} from 'uuid'


const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
let offset = ((screenHeight - StatusBar.currentHeight) - screenWidth) / 2;


class MyCloset extends Component {
    constructor(props) {
        super(props);
        this._addItemToSet = this._addItemToSet.bind(this)
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            b_T_shirt: false, b_Dress: false, b_Trousers: false,
            b_Skirt: false, b_Outer: false, b_Shoes: false,
            b_Hats: false, b_Accessories: false,

            _id : null,
            Outer: null,
            T_shirt: null,
            Dress: null,
            Trousers: null,
            Skirt: null,
            Shoes: null,
            Hats: null,
            Accessories: null,

            ImageViewList: [
                {   
                    _id : '123455',
                    title: "first outfit",
                    tags: ["#clothes", '#Christmas', '#newLook'],
                    imageUri: 'https://de9luwq5d40h2.cloudfront.net/catalog/product/large_image/09_407044.jpg',
                    clothesObject : {
                        Outer: 'https://ph-test-11.slatic.net/p/27292326b853b18c08bcee35cce00db3.jpg',
                        T_shirt: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550688238-theory-1550688225.jpg',
                        Dress: null,
                        Trousers: 'https://static.smallable.com/893276-thickbox/john-trousers.jpg',
                        Skirt: null,
                        Shoes: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnewOfp_72PSE10MNpdR8nqcB3gSYw3jcKNyUuVmbpiLfgs1yYA',
                        Hats: null,
                        Accessories: null
                    } 
                },
                {   
                    _id : '5555555555',
                    title: "second outfit",
                    tags: ["#OutOnADate", '#추석', '#newLook'],
                    imageUri: 'https://de9luwq5d40h2.cloudfront.net/catalog/product/large_image/09_407044.jpg',
                    clothesObject : {
                        Outer: 'https://www.dhresource.com/0x0s/f2-albu-g2-M00-7E-CF-rBVaGlZaltaANG36AAcFtmxkW34993.jpg/shanghai-story-mens-long-trench-coat-wool.jpg',
                        T_shirt: null,
                        Dress: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpq8dLYzkHdgjbh7CVmLX2xT48NAgZf9uHEYxe-dfD7xSBiXPqkw',
                        Trousers: null,
                        Skirt: null,
                        Shoes: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnewOfp_72PSE10MNpdR8nqcB3gSYw3jcKNyUuVmbpiLfgs1yYA',
                        Hats: null,
                        Accessories: null
                    } 
                }
            ],

            TextInputTitle: "",
            TextInputTag: "",

            Alert_Overwrite : false,
            Yes_Overwrite : false
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
    }

    layoutExample(title, type, DataType) {
        const isTinder = type === 'tinder';
        return (
            <CarouselOptions name={title} Type={type} Data={DataType} _addItemToSet={this._addItemToSet} />
        );
    }
    hashtagFormat(hashtag){
        var ridComma = hashtag.replace(","," ")
        var modHash = ridComma.split(" ")
        var newHash = ""
        for(var i=0; i< modHash.length;i++){
            if(modHash[i].charAt(0) != "#"){
                newHash = ("#"+ modHash[i]);
                modHash[i] = newHash;
            } 
        }
        return modHash
    }
    onCapture = () => {
        this.refs.viewShot.capture().then(uri => {
            title = this.state.TextInputTitle
            tags = this.state.TextInputTag
            tagList = this.hashtagFormat(tags)
            object = {
                _id : uuid(),
                title : title,
                tags : tagList,
                imageUri : uri,
                clothesObject : {
                    Outer: this.state.Outer,
                    T_shirt: this.state.T_shirt,
                    Dress: this.state.Dress,
                    Trousers: this.state.Trousers,
                    Skirt: this.state.Skirt,
                    Shoes: this.state.Shoes,
                    Hats: this.state.Hats,
                    Accessories: this.state.Accessories
                } 
            }
            dummyStateArray = this.state.ImageViewList
            dummyStateArray.push(object)

            //save object to DB
            this.setState({ ImageViewList: dummyStateArray })
        })
    };
    makeTagstoString(tagList){
        var tagString = ""
        for(var i=0 ; i<tagList.length ; i++ ){
            tagString = tagString + " " + tagList[i]
        }
        return tagString
    }
    seeOutfit=(_id)=>{
        for(var i = 0 ; i< this.state.ImageViewList.length ; i++){
            const object = this.state.ImageViewList[i];
            if(object._id == _id){
                this.setState({_id : object._id})
                this.setState({TextInputTitle : object.title})
                this.setState({TextInputTag : this.makeTagstoString(object.tags)})
                
                this.setState({Outer : object.clothesObject.Outer})
                this.setState({T_shirt : object.clothesObject.T_shirt})
                this.setState({Dress : object.clothesObject.Dress})
                this.setState({Trousers : object.clothesObject.Trousers})
                this.setState({Skirt : object.clothesObject.Skirt})
                this.setState({Shoes : object.clothesObject.Shoes})
                this.setState({Hats : object.clothesObject.Hats})
                this.setState({Accessories : object.clothesObject.Accessories})
                break
            }
        }
    }
    deleteOutfit=(_id)=>{
        var index = this.state.ImageViewList.indexOf(_id)
        const newList = [...this.state.ImageViewList];
        newList.splice(index,1)
        
        this.setState({ImageViewList : newList})
    }
    // _share(){
    //     null
    // }
    askAreyouSure=()=>{
        this.setState({Alert_Overwrite : !this.state.Alert_Overwrite})
    }

    _edit=(_id)=>{
        for(var i = 0 ; i< this.state.ImageViewList.length ; i++){
            const object = this.state.ImageViewList[i];
            if(object._id == _id){
                {this.askAreyouSure}
                break
            }
        }
    }
    acceptOverwrite(_id){
        for(var i = 0 ; i< this.state.ImageViewList.length ; i++){
            const object = this.state.ImageViewList[i];
            if(object._id == _id){
                this.refs.viewShot.capture().then(uri => {
                    title = this.state.TextInputTitle
                    tags = this.state.TextInputTag
                    tagList = this.hashtagFormat(tags)
                    object = {
                        _id : object._id,
                        title : title,
                        tags : tagList,
                        imageUri : uri,
                        clothesObject : {
                            Outer: this.state.Outer,
                            T_shirt: this.state.T_shirt,
                            Dress: this.state.Dress,
                            Trousers: this.state.Trousers,
                            Skirt: this.state.Skirt,
                            Shoes: this.state.Shoes,
                            Hats: this.state.Hats,
                            Accessories: this.state.Accessories
                        } 
                    }
                    dummyStateArray = this.state.ImageViewList
                    dummyStateArray.push(object)
        
                    //save object to DB
                    this.setState({ ImageViewList: dummyStateArray })
                })
                break
            }
        }
    }
    _renderItem = ({ item }) => {
        const _id = item._id
        const title = item.title;
        const tags = item.tags;
        const imageUri = item.imageUri;
        return (
            <View style={outfit_styles.container}>
                <Text style={outfit_styles.title}>{title}</Text>
                    <OutfitImage
                        _id={_id} 
                        style={{ flex: 5 }} 
                        imgUri={imageUri} 
                        tags={tags} 
                        onSwipeLeft={this.seeOutfit}
                        onSwipeRight={this.deleteOutfit}
                        />
            </View>)
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
            <SafeAreaView style={IS_ANDROID ? styles_swiper.containerStyle_Android : styles_swiper.containerStyle}>
                <Swiper
                    loop={false}
                    showsButtons={false}
                    showsPagination={false}
                    horizontal={Platform.OS == 'android'}
                    width={Platform.OS == 'android' ? screenHeight : screenWidth}
                    height={Platform.OS == 'android' ? screenWidth : screenHeight}
                    index={1}>
                    <View style={[IS_ANDROID ? styles_swiper.pageStyle_Android2 : styles_swiper.pageStyle, { flexDirection: 'row' }]}>
                        <View style={{ flex: 7, backgroundColor: '#ECE5DD' }}>
                            <View style={{flex:0.6, flexDirection:'row', marginTop:5, marginHorizontal: 7}}>
                                <View style={{
                                    flex: 1.7, flexDirection: 'row', shadowOffset: { width: 0, height: 0 },
                                    shadowColor: 'grey', shadowOpacity: 0.2, elevation: 1, borderRadius: 5, marginBottom: 10
                                }}>
                                    <TextInput
                                        underlineColorAndroid='transparent'
                                        placeholder="Title"
                                        placeholderTextColor='grey'
                                        style={{ flex: 1, fontWeight: '700', padding: 5 }}
                                        onChangeText={(TextInputTitle) => this.setState({ TextInputTitle })}
                                        value={this.state.TextInputTitle} />
                                </View>
                                <View style={{flex:1, flexDirection:'row'}}>
                                    <Icon name="md-share" /*onPress={this._share}*/ color={'#4D4E4F'} size={25} style={{ paddingHorizontal: 5, marginTop: 5 }} />
                                    <Icon name="md-create" onPress={this._edit(this.state._id)} color={'#4D4E4F'} size={25} style={{ paddingHorizontal: 5, marginTop: 5 }} />
                                    <Icon name="md-add" onPress={this.onCapture} color={'#4D4E4F'} size={25} style={{ paddingHorizontal: 5, marginTop: 5 }} />
                                </View>
                            </View>
                            <Modal 
                                visible={this.state.Alert_Overwrite} 
                                transparent={false} >
                                <View style={{borderRadius : 7, backgroundColor: '#ff0000', borderWidth:1, borderColor: "#000000",
                                              justifyContent:'center', alignItems:'center'}}>
                                    <Text style={{color: '#fff', fontSize: 16}}>Are You Sure You Want To Overwrite This Outfit??</Text>
                                    <View style={{justifyContent:'space-around'}}>
                                        <TouchableOpacity onPress={()=>this.askAreyouSure}>
                                            <Text style={{color: '#fff', fontSize: 10}}>Cancel</Text>  
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=>this.acceptOverwrite(this.state._id)}>
                                            <Text style={{color: '#fff', fontSize: 10}}>Accept</Text>  
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal> 
                            <ViewShot style={{ flex: 6}} ref="viewShot">
                                <View style={{ flex: 2, flexDirection: 'row' }}>
                                    <View style={{ flex: 3 }}></View>
                                    <View style={{ flex: 4, alignItems: 'center' }}>
                                        {this.state.Hats == null ?
                                            <Image source={require('../../assets/for_search/hats.png')} style={styles_swiper.nohats} />
                                            :
                                            <Image source={{ uri: this.state.Hats }} style={styles_swiper.hats} />
                                        }
                                    </View>
                                    <View style={{ flex: 5 }}></View>
                                </View>
                                <View style={{ flex: 6, flexDirection: 'row' }}>
                                    <View style={{ flex: 0.5 }}></View>
                                    <View style={{ flex: 2 }}>
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
                                    <View style={{ flex: 2 }}>
                                        <View style={{ flex: 1 }}></View>
                                        <View style={{ flex: 4 }}>
                                            {this.state.Dress == null ?
                                                ((this.state.T_shirt == null && this.state.Trousers == null && this.state.Skirt == null) ?
                                                    <Image source={require('../../assets/for_search/dress.png')} style={styles_swiper.nodress} />
                                                    : null)
                                                :
                                                <Image source={{ uri: this.state.Dress }} style={styles_swiper.dress} />
                                            }
                                        </View>
                                        <View style={{ flex: 2 }}></View>
                                    </View>
                                    <View style={{ flex: 2 }}>
                                        <View style={{ flex: 1 }}>
                                            {this.state.Outer == null ?
                                                <Image source={require('../../assets/for_search/outer.png')} style={styles_swiper.noouter} />
                                                :
                                                <Image source={{ uri: this.state.Outer }} style={styles_swiper.outer} />
                                            }
                                        </View>
                                        <View style={{ flex: 2 }}></View>
                                        <View style={{ flex: 1 }}>
                                            {this.state.Accessories == null ?
                                                <Image source={require('../../assets/for_search/accessories.png')} style={styles_swiper.noaccessoriesTOP} />
                                                :
                                                <Image source={{ uri: this.state.Accessories }} style={styles_swiper.accessoriesTOP} />
                                            }
                                        </View>
                                    </View>
                                    <View style={{ flex: 1 }}></View>
                                </View>
                                <View style={{ flex: 2, flexDirection: 'row' }}>
                                    <View style={{ flex: 2 }}></View>
                                    <View style={{ flex: 4, alignItems: 'center', justifyContent: 'flex-end' }}>
                                        {this.state.Shoes == null ?
                                            <Image source={require('../../assets/for_search/shoes.png')} style={styles_swiper.noshoes} />
                                            :
                                            <Image source={{ uri: this.state.Shoes }} style={styles_swiper.shoes} />

                                        }
                                    </View>
                                    <View style={{ flex: 3, alignItems: 'center' }}>
                                    </View>
                                    <View style={{ flex: 2 }}></View>
                                </View>
                                </ViewShot>
                            <View style={{ flex: 1 }}></View>
                            <View style={{
                                flex: 0.6, flexDirection: 'row', shadowOffset: { width: 0, height: 0 },
                                shadowColor: 'grey', shadowOpacity: 0.2, elevation: 1, borderRadius: 5, marginHorizontal: 6
                            }}>
                                <TextInput
                                    underlineColorAndroid='transparent'
                                    placeholder="Use #Hashtags to label your look!"
                                    placeholderTextColor='grey'
                                    style={{ flex: 1, fontWeight: '700', padding: 10 }}
                                    onChangeText={(TextInputTag) => this.setState({ TextInputTag })}
                                    value={this.state.TextInputTag}
                                />
                            </View>
                            <View style={{flex:0.66}}></View>
                        </View>
                        <View
                            style={{ flex: 3, backgroundColor: '#A6A6A6' }} >
                            <FlatList
                                data={this.state.ImageViewList}
                                renderItem={this._renderItem} />
                        </View>
                    </View>
                    <View style={[IS_ANDROID ? styles_swiper.pageStyle_Android : styles_swiper.pageStyle, { paddingTop: 10 }]}>
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

const outfit_styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        color: '#000000',
        fontSize: 13,
        marginTop : 10,
        marginBottom : 5
    }
})

