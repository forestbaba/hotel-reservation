import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import ImageCarousel from './image.carousel'
import Roundcornerbutton from '../../components/button/Round.edge.button'
const { width } = Dimensions.get('window');

const CarouselPage = () => (
    <View style={styles.carousel}>
        <View style={styles.carouselContainer2}>
            <ImageCarousel />
        </View>
        <View style={styles.buttoncontainer}>
            <Roundcornerbutton title={'Log in'} colorr={'#61cec7'} margin={20} textcolor={'white'} elevation={3}/>
            <Roundcornerbutton title={'Create account'} colorr={'white'} elevation={3} textcolor={'black'}/>
        </View>

    </View>
)


const styles = StyleSheet.create({
    carousel: {
        flex: 1
    },
    carouselContainer2: {
        width: width,
        height: width * 0.8,
        marginTop: 10,
        flex:1.5
    },
    buttoncontainer: {
        marginLeft: 20,
        marginRight:20,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 20,
        flex: 0.5,
        color:'#fafafb'
        
    }
})
export default CarouselPage;