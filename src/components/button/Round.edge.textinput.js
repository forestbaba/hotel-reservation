import React from 'react'
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Roundcornertextinput = ({ onPress, placeholder, colorr, margin, elevation, textcolor, isicon, iconname, iconcolor, margintop }) =>
    (
        <View style={styles.roundcornertextinput}>
            <TextInput
                placeholder={placeholder}
                style={styles.buttonStyle} style={{
                    backgroundColor: colorr,
                    padding: 15,
                    borderRadius: 25,
                    marginTop: margintop,
                    marginBottom: margin,
                    elevation: elevation,
                    paddingLeft: 30,
                    paddingRight: 50

                }}>
            </TextInput>
            {
                isicon ? <TouchableOpacity
                    onPress={onPress}
                    style={styles.iconbutton}>
                    <Icon name={iconname} color={iconcolor} size={20} style={styles.icon} iconcolor={iconcolor} />

                </TouchableOpacity> : null
            }

        </View>
    )

const styles = StyleSheet.create({

    roundcornertextinput: {
        width: '100%',
        flex: 1,
        // flexDirection: 'row'
    },
    iconbutton: {
        position: 'absolute',
        alignSelf: 'flex-end',
        marginLeft: 30,
        marginTop: 20,
        paddingRight: 30
    }
})
export default Roundcornertextinput;