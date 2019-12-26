import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import profilepic from '../../../assets/mayoroflagos.jpeg'

const Roundedcornerimage = ({ src }) => (
    <Image source={profilepic} style={{
        width: 100,
        height: 100,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 0,
        borderColor: "red"
    }} />
)
export default Roundedcornerimage