/**
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MasonryList from 'react-native-masonry-list';

type Props = {
    height: number,
    profileName: string,
    color: string,
    first: boolean
};

const Card = {
    shadowColor: '#000',
    shadowOffset: {width:0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 4,
}

export default class Block extends Component<Props>{
    static defaultProps = {
        height: 160,
        first: false
    }


    render(){
        return(
        <View
            style = {{
            marginBottom:10 ,
            marginTop: this.props.first? 10 : 0 ,
            marginLeft: 15,
            width: '45%',
            height: this.props.height + 50,
            backgroundColor: this.props.color,
            borderRadius: 10,
            shadowColor: '#FFF',
            shadowOffset: {width:0, height: 10},
            shadowOpacity: 1,
            shadowRadius: 10 ,
            elevation: 8
        }}
        >
            <View
            style={{
                flexDirection: 'row'
                }}>
                <View
                    style={{marginLeft: 5, marginTop: 5, marginRight: 5, width: 30, height: 30, borderRadius: 15  , backgroundColor: '#464444'}}>
                </View>
                <Text
                    style={{marginTop: 9}}
                >{this.props.profileName}</Text>
            </View>
            <View
                style = {{
                marginTop: 5 ,
                marginLeft: -10,
                width: '100%',
                height: this.props.height,
                backgroundColor: '#FFF',
                borderRadius: 10,
                shadowColor: '#FFF',
                shadowOffset: {width:0, height: 10},
                shadowOpacity: 1,
                shadowRadius: 10 ,
                elevation: 8
                }}>
                
            </View>

        </View>
        )
    }
}

const styles = StyleSheet.create({

})