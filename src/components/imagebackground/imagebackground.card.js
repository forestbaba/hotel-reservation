import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ImageBackgroundCard = ({ imagecover, borderRadius, text, onPress }) =>
    (
        <TouchableOpacity onPress={onPress}>
            <ImageBackground source={imagecover} style={styles.placesCover} imageStyle={{ borderRadius: borderRadius }}
              >
                <Text style={styles.text}>{text}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )



const styles = StyleSheet.create({

    placesCover: {
        // flex: 1,
        padding: 10,
        marginRight: 10,
        width: 250,
        height: 150,
        // width: '100%',
        // alignItems: "center",
        // justifyContent: "space-around",

        resizeMode: 'cover',
    },
    text: {
        color: 'white',
        elevation: 2
    }


})
export default ImageBackgroundCard