import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import mayour from '../../../assets/mayoroflagos.jpeg'

const RoundImage = ({ imagesource, width, height }) => (
    <Image source={imagesource} borderRadius={100} style={{
        width: width,
        height: height
    }} />
)


styles = StyleSheet.create({

    image: {
        width: 100,
        height: 100
    }
})
export default RoundImage;