import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Rating, AirbnbRating } from 'react-native-ratings';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import Progressanddesc from '../progressbar/progress.bar'
import Roundcornerimage from '../imageview/roundedcorner.image'
import imagecover from './../../../assets/travel.jpg'


var width = Dimensions.get('window').width; //full width


const TripsCard = () => (
    <View style={styles.ratingcard}>
        <Text style={styles.roomdesc}>12 Dec - 22 Dec, 1 Room - 2 Adults</Text>
        <View style={styles.cardholder}>
            <Image source={imagecover} borderTopLeftRadius={15} borderTopRightRadius={15} style={styles.imageitself} />
            <View style={styles.heartcontainer}>
                <TouchableOpacity>
                    <Icon size={20} color='red' name='heart' style={styles.heart} />
                </TouchableOpacity>
            </View>

            <View style={styles.overallrating}>
                <View style={styles.detailsholder}>
                    <View style={styles.nameandimageholder}>
                        <View style={styles.nameandtimeholder}>
                            <Text style={styles.name}>The Great Deal Royal</Text>
                            <Text>Alausa Ikeja</Text>
                            <View style={styles.ratinganddesc} >
                                <View style={styles.ratingholder}>
                                    <Rating
                                        type='star'
                                        ratingCount={5}
                                        ratingColor='#61cec7'
                                        ratingBackgroundColor='#c8c7c8'
                                        imageSize={10}
                                        type="custom"
                                        onFinishRating={this.ratingCompleted}
                                    />
                                </View>
                                <Text style={styles.reviewcount}>80 Reviews</Text>
                            </View>

                        </View>
                    </View>
                    <View style={styles.ratingholder}>
                        <Text style={styles.ratingdesc}>$220</Text>
                        <Text>/per night</Text>
                    </View>

                </View>

            </View>
        </View>


    </View >
)


const styles = StyleSheet.create({
    ratingcard: {
        // flex: 1,
        // elevation: 3,
        // padding: 20,
        // borderRadius: 10,
        // margin: 50
    },
    overallrating: {
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        textAlign: "left"
    },
    cardholder: {
        // flexDirection: 'column',
        // alignContent: 'flex-start',
        // justifyContent: 'flex-start',
        // // marginTop: -30,
        // marginLeft: 60,
        // marginRight: 60,
        borderWidth: 0,
        elevation:5
    },
    ratingscore: {
        fontWeight: "bold",
        fontSize: 25,
        color: '#61cec7',
        paddingLeft: 5,
        paddingRight: 5
    },
    overalratingtext: {
        paddingLeft: 10
    },
    progressanddescholder: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'flex-start',
        // alignContent: 'flex-start',
        padding: 10
    },
    progressbar: {
        flex: 1,
        marginLeft: 20,
        marginTop: 3
    },
    progresstitle: {
        fontWeight: 'bold'
    },
    imageitself: {
        height: 200,
        width: width
    },

    detailsholder: {
        flexDirection: 'row',
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10
    },

    nameandimageholder: {
        flexDirection: 'row',
        flex: 1
    },
    nameandtimeholder: {
        paddingLeft: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },
    ratingholder: {

        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10

    },
    ratingdesc: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        alignContent: 'flex-end',
        justifyContent: 'flex-end'
    },
    ratingholder: {
        // marginLeft:-20
    },
    ratinganddesc: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-start'
    },
    reviewcount: {
        marginLeft:10
    },
    roomdesc: {
        textAlign: "center",
        fontSize: 17,
        padding:20
        
    },
     heartcontainer: {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 10,
        top: 25

    },
    heart: {
    elevation: 5
},


})
export default TripsCard