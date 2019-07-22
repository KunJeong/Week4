import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import styles, { colors } from './styles/index.style';
import { T_Shirtdb, Dressdb, Trousersdb, Skirtdb, Outerdb, Shoesdb, Hatsdb, Accessoriesdb } from './static/entries';
import { scrollInterpolators, animatedStyles } from './utils/animations';
import Icon from 'react-native-vector-icons/Ionicons'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class CarouselOptions extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpen: false
        }
    }
    _onPressADD(){
        
        this.setState({isOpen: !this.state.isOpen});
    }
    _renderItem ({item, index}) {
        return <SliderEntry data={item}/>;
    }
    renderCarousel(){
        if(this.state.isOpen){
            return( 
            <Carousel
                data={this.props.Data}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                layout={this.props.Type}
                loop={true}
                enableMomentum={true}
                swipeThreshold={90}
            />);
        }else{
            return null;
        }
    }
    
    render() {
        return (
            <View style={[styles.exampleContainer, styles.exampleContainerLight]}>
                <View style={this.state.isOpen ? {
                    height : 30,
                    flexDirection:'row',
                    width: viewportWidth,
                    shadowOffset:{width:0,height:0},
                    shadowColor:'grey',
                    shadowOpacity:0.2,
                    elevation:1,
                    alignItems:'center'
                    }:{
                        height : 50,
                        flexDirection:'row',
                        width: viewportWidth,
                        shadowOffset:{width:0,height:0},
                        shadowColor:'grey',
                        shadowOpacity:0.2,
                        elevation:1,
                        alignItems:'center'
                        }}>
                    <Text style={[styles.title, styles.titleDark]}>{`${this.props.name}`}</Text>
                    <View style={{flex:1}}></View>
                    {this.state.isOpen ? 
                        <Icon name="md-close" 
                        size={25} 
                        style={{paddingLeft: 15, paddingRight:15}}
                        onPress={this._onPressADD.bind(this)}
                        />    
                     :
                        <Icon name="md-add" 
                            size={25} 
                            style={{paddingLeft: 15, paddingRight:15}}
                            onPress={this._onPressADD.bind(this)}
                        />
                    }
                    
                </View>
                <View>
                    {this.renderCarousel()}
                </View>
            </View>
        );
    }
}
export default CarouselOptions;