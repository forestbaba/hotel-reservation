import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Imageview from '../../components/imageview/roundedcorner.image'
import mayour from '../../../assets/mayoroflagos.jpeg'
import RoundImage from '../../components/imageview/roundimage'
import Icon from 'react-native-vector-icons/FontAwesome'
import Iocon from 'react-native-vector-icons/Ionicons'

class Settings extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.parent}>
                    <Text style={styles.title}>Settings</Text>


                    <View style={styles.holderparent}>
                        <View style={styles.textandinputholder}>
                            <Text style={styles.texttitle}>Notifications</Text>
                            <Icon name='bell' size={15} color='gray' style={styles.icon} />
                        </View>
                        <View style={styles.divider} />
                    </View>
                    <View style={styles.holderparent}>
                        <TouchableOpacity>
                            <View style={styles.textandinputholder}>
                                <Text style={styles.texttitle}>Country</Text>
                                <Text style={styles.textintput}> Germany</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.divider} />
                    </View>
                    <View style={styles.holderparent}>
                        <TouchableOpacity>
                            <View style={styles.textandinputholder}>
                                <Text style={styles.texttitle}>Currency</Text>
                                <Text style={styles.textintput}> $ 59.9</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.divider} />
                    </View>
                    <View style={styles.holderparent}>
                        <TouchableOpacity>
                            <View style={styles.textandinputholder}>
                                <Text style={styles.texttitle}>Terms of Service</Text>
                                <Iocon name='ios-arrow-forward' size={15} color='gray' style={styles.icon} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.divider} />
                    </View>
                    <View style={styles.holderparent}>
                        <TouchableOpacity>
                            <View style={styles.textandinputholder}>
                                <Text style={styles.texttitle}>Privacy Policy</Text>
                                <Iocon name='ios-arrow-forward' size={15} color='gray' style={styles.icon} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.divider} />
                    </View>
                    <View style={styles.holderparent}>
                        <TouchableOpacity>
                            <View style={styles.textandinputholder}>
                                <Text style={styles.texttitle}>Give us feedback</Text>
                                <Iocon name='ios-arrow-forward' size={15} color='gray' style={styles.icon} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.divider} />
                    </View>
                    <View style={styles.holderparent}>
                        <TouchableOpacity>
                            <View style={styles.textandinputholder}>
                                <Text style={styles.texttitle}>Log out</Text>
                                <Iocon name='ios-arrow-forward' size={15} color='gray' style={styles.icon} />
                            </View>
                        </TouchableOpacity>
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
        textAlign: 'right',
        // color: 'black',
        paddingRight: 40
    },
    icon: {
        borderRadius: 50,
        padding: 5,
        marginRight: 40
    }
})
export default Settings