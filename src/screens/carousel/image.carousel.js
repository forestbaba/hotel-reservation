import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    ImageBackground
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';

const { width } = Dimensions.get('window');

const data = [
    {
        uri: 'https://i.imgur.com/GImvG4q.jpg',
        title: 'Plan your trip',
        content: 'Neque porro quisquam est qui dolorem ipsum quia '
    },
    {
        uri: 'https://i.imgur.com/Pz2WYAc.jpg',
        title: 'Find best deals',
        content: 'Neque porro quisquam est qui dolorem ipsum '
    },
    {
        uri: 'https://i.imgur.com/IGRuEAa.jpg',
        title: 'Get best offers',
        content: 'Neque porro quisquam est qui'
    }
];

export default class ImageCarousel extends Component {
    renderItem = ({ item, index }) => {
        const { uri, title, content } = item;
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.item}
                onPress={() => {
                    this.numberCarousel.scrollToIndex(index);
                }}
            >
                <ImageBackground
                    source={{ uri: uri }}
                    style={styles.imageBackground}
                >
                    <View style={styles.rightTextContainer}>
                        {/* <Text style={styles.rightText}>Lorem</Text> */}
                    </View>
                </ImageBackground>
                <View style={styles.lowerContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.contentText}>{content}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <Carousel
                style={styles.carousel}
                data={data}
                renderItem={this.renderItem}
                itemWidth={0.7 * width}
                inActiveOpacity={0.3}
                containerWidth={width - 10}
                indicatorAtBottom={true} 
                inactiveIndicatorText='•'
                ref={(c) => {
                    this.numberCarousel = c;
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    item: {
        borderWidth: 2,
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        borderColor: 'white',
        elevation: 3
    },
    imageBackground: {
        flex: 2,
        backgroundColor: '#FFFFFF',
        borderWidth: 5,
        borderColor: 'white'
    },
    rightTextContainer: {
        marginLeft: 'auto',
        marginRight: -2,
        backgroundColor: 'rgba(49, 49, 51,0.5)',
        padding: 3,
        marginTop: 3,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    rightText: { color: 'white' },
    lowerContainer: {
        flex: 1,
        margin: 10
    },
    titleText: {
        fontWeight: 'bold',
        textAlign:'center',
        fontSize: 30
    },
    contentText: {
        fontSize: 12,
        textAlign:'center'
    }
});
