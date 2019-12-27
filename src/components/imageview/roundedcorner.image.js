import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import profilepic from '../../../assets/mayoroflagos.jpeg'

const Roundedcornerimage = ({ src, width,height }) => (
    <Image source={profilepic} style={{
        width: width,
        height: height,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 0,
        borderColor: "red"
    }} />
)
export default Roundedcornerimage