import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Roundcornerbutton from '../components/button/Round.edge.button'
import imagecover from '../../assets/travel.jpg'
// // import fontelloConfig from '../selection.json';
// const Iconn = createIconSetFromFontello(fontelloConfig);


class LandingPage extends Component {
    render() {
        return (
            <ImageBackground source={imagecover} style={styles.imageCover}>
                <View style={styles.iconcontainer}>
                    <View style={styles.icon}>

                        <Icon
                            name='home'
                            size={45}
                            color='#ffffff'
                        />
                        {/* <Icon name="toad" size={80} color="#bf1313" /> */}
                    </View>

                    <Text style={styles.room}>Roome</Text>
                    <Text style={styles.hoteldesc}>Best Hotel deals for your holiday</Text>
                </View>

                <View style={styles.loginBottom}>
                    <View style={styles.loginButton}>
                        <Roundcornerbutton title={'Get Started'} colorr={'#61cec7'} textcolor={'#FFFFFF'}
                            onPress={() => this.props.navigation.navigate('Carousel')}/>
                    </View>

                    <View style={styles.loginPropmtText}>
                        <Text style={styles.alreadyhaveaccount}>Already have an account? </Text>
                        <TouchableOpacity>
                            <Text style={styles.login}>Login </Text>

                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    landingpage: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "space-around",

    },
    iconcontainer: {
        justifyContent: "center",
        alignItems: 'center',
        width: '100%'
    },
    icon: {
        backgroundColor: '#61cec7',
        padding: 10,
        borderRadius: 5
    },
    room: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#ffffff'
    },
    loginPropmtText: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        // width: '100%',
        marginTop: 30
    },
    hoteldesc: {
        color: '#b7bcbc'
    },
    loginButton: {
        marginBottom: 20,
        marginLeft: 50,
        marginRight: 50
    },
    loginBottom: {
        width: '90%'

    },
    imageCover: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: "space-around",

        resizeMode: 'cover',
    },
    alreadyhaveaccount: {
        color: 'white'
    },
    login: {
        color: '#ffffff',
        fontWeight: 'bold',
        marginLeft: 5
    }
})
export default LandingPage;