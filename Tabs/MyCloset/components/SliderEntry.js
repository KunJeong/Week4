import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry.style';

export default class SliderEntry extends Component<Props> {
    constructor(props){
        super(props);
    }

    static propTypes = {
        data: PropTypes.object.isRequired,
    };

    get image () {
        const { data: { illustration }} = this.props;

        return( 
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }

    render () {
        const { data: { subtitle } } = this.props;
        const { data: { illustration }} = this.props;
        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress = {()=>this.props.onClick(illustration)}
              >
                <View style={styles.shadow} />
                <View style={styles.imageContainer}>
                    { this.image }
                    <View style={styles.radiusMask} />
                </View>
                <View style={styles.textContainer}>
                    <Text
                      style={styles.subtitle}
                      numberOfLines={1}
                    >
                        { subtitle }
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}