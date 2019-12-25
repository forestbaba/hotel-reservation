import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Roundcornerbutton = ({ parentWidth, title, colorr, margin, elevation, textcolor,iconColor,iconname, isicon, mLeft, mRight }) =>
    (
        <View style={parentWidth ? {width:parentWidth}: {width:'100%'}}>

            <TouchableOpacity style={styles.buttonStyle} style={{
                backgroundColor: colorr, padding: 15, borderRadius: 25,
                marginTop: margin, marginBottom: margin, elevation: elevation,
                marginLeft:mLeft, marginRight:mRight,
                width: '100%'
            }}>
                <View style={styles.buttonandiconholder}>
                    {isicon ? <Icon name={iconname} size={25} color={iconColor} style={{ flex: 0.2, elevation: 5, marginRight: -20,  alignSelf: 'flex-start'}} /> : null}
                    <Text style={{ width: '100%', textAlign: 'center', color: 'white', color: textcolor, flex:1 }}>{title}</Text>
                </View>

            </TouchableOpacity>
        </View>
    )

const styles = StyleSheet.create({

    title: {
        width: '100%',
        textAlign: 'center',
        color: 'white'
    },
    roundcornerbutton: {
        width: '100%',
        // flexDirection:'row'
    },
    icon: {
        // marginLeft: 10,
        // marginTop:35,
        flex:0.2,
        elevation: 5,
        marginRight:-20,
        // position: 'absolute',
         alignSelf:'flex-start'

    },
    buttonandiconholder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    }
})
export default Roundcornerbutton;