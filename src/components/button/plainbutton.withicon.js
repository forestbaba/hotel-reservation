import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Plainbuttonwithicon = ({ title, name, size, color }) =>
    (

        <TouchableOpacity style={styles.plainbutton}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Icon name={name} size={size} color={color} style={styles.icon} />

            </View>
            <View style={styles.divider} />
        </TouchableOpacity>

    )

const styles = StyleSheet.create({
    plainbutton: {
        flex: 1
    },
    container: {
        //width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    title: {
        marginLeft: 40,
        fontWeight: 'bold',
        fontSize: 17,
    },
    icon: {
        // alignSelf:'flex-end'
        marginRight: 50
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        marginTop: 20,
        marginLeft: 40,
        marginRight: 45,
        marginBottom:20
    }
})
export default Plainbuttonwithicon