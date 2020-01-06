import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Imageview from '../../components/imageview/roundedcorner.image'
import mayour from '../../../assets/mayoroflagos.jpeg'
import RoundImage from '../../components/imageview/roundimage'
import Icon from 'react-native-vector-icons/FontAwesome'

class Editprofile extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.parent}>
                    <Text style={styles.title}>Edit Profile</Text>

                    <View style={styles.holder1}>
                        <Imageview src={mayour} />
                        <View style={styles.imageholder}>
                            <RoundImage imagesource={mayour} width={120} height={120} />
                            <View style={styles.lowerimage} >
                                <TouchableOpacity>
                                    <Icon name='camera' size={15} color='white' style={styles.camera} />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                    <View style={styles.holderparent}>
                        <View style={styles.textandinputholder}>
                            <Text style={styles.texttitle}>Username</Text>
                            <TextInput placeholder='enter' style={styles.textintput} />
                        </View>
                        <View style={styles.divider} />
                    </View>
                    <View style={styles.holderparent}>
                        <View style={styles.textandinputholder}>
                            <Text style={styles.texttitle}>Email</Text>
                            <TextInput placeholder='email' style={styles.textintput} />
                        </View>
                        <View style={styles.divider} />
                    </View>
                    <View style={styles.holderparent}>
                        <View style={styles.textandinputholder}>
                            <Text style={styles.texttitle}>Phone</Text>
                            <TextInput placeholder='12345' style={styles.textintput} />
                        </View>
                        <View style={styles.divider} />
                    </View>
                    <View style={styles.holderparent}>
                        <View style={styles.textandinputholder}>
                            <Text style={styles.texttitle}>Date of birth</Text>
                            <TextInput placeholder='23/12/11' style={styles.textintput} />
                        </View>
                        <View style={styles.divider} />
                    </View>
                    <View style={styles.holderparent}>
                        <View style={styles.textandinputholder}>
                            <Text style={styles.texttitle}>Address</Text>
                            <TextInput placeholder='12 crow bell close' style={styles.textintput} />
                        </View>
                        <View style={styles.divider} />
                    </View>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

    parent: {
        flex: 1
    },
    title: {

        fontWeight: 'bold',
        fontSize: 25,
        padding: 20,
        color: 'black'
    },
    imageholder: {

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    },
    lowerimage: {
        // marginTop: 900,
        marginLeft: 80,
        marginTop: -28
        // position: 'absolute'

    },
    holder1: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    textandinputholder: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',

    },
    // holderparent: {
    //     height:20
    // },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        marginTop: 5,
        marginLeft: 40,
        marginRight: 45,
        marginBottom: 20
    },
    texttitle: {
        flex: 1,
        textAlign: "left",
        paddingLeft: 40
    },
    textintput: {
        flex: 1,
        paddingRight: 20,
        color: 'black'
    },
    camera: {
        backgroundColor: '#61cec7',
        borderRadius: 50,
        padding: 5
    }
})
export default Editprofile