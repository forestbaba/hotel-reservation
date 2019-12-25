import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Roundedgebutton from '../../components/button/Round.edge.button'
import Roundedgeinput from '../../components/button/Round.edge.textinput'

const LoginPage = () =>
    (
        <View style={styles.loginpage}>

            <Text style={styles.signup}>Sign up</Text>
            <View style={styles.socilbuttoncontainer}>
                <Roundedgebutton isicon title={'Facebook'}
                    colorr={'#3b5998'} margin={20}
                    textcolor={'white'}
                    parentWidth={'40%'}
                    mRight={20} mLeft={40}
                    iconColor={'#FFFFFF'}
                    iconname={'facebook'} />


                <Roundedgebutton
                    isicon
                    title={'Twitter'}
                    colorr={'#00acee'} margin={20}
                    textcolor={'white'} parentWidth={'40%'}
                    mRight={20} mLeft={40}
                    iconColor={'#FFFFFF'}
                    iconname={'twitter'} />
            </View>
            <Text style={styles.optionalprompt}>Or login with your email</Text>
            <Text style={styles.errorprompt}>This is where error will be, should should be hidden untill error shows</Text>
            <View style={styles.buttoncontainer}>
                <Roundedgeinput placeholder={'Your email'} elevation={5}  />
                <Roundedgeinput placeholder={'Your email'} elevation={5}  />
                <Roundedgeinput placeholder={'Your email'} elevation={5} />
                <Roundedgeinput placeholder={'Your password'} elevation={5} isicon iconname={'eye'} iconcolor={'#61cec7'} />
                <View style={styles.loginbuttoncontainer}>
                    <Roundedgebutton title={'Log in'}
                        colorr={'#61cec7'}
                        margin={20}
                        textcolor={'white'}
                        parentWidth={'100%'}
                    />


                </View>
               <Text style={styles.agreenote}>By Signing up, you agree with our Terms of Service and Privacy Policy</Text>

            </View>


            <View style={styles.signupoptioncontainer}>
                <Text>Don't have an account ?</Text>
                <TouchableOpacity>
                    <Text style={styles.login}>Log in</Text>
                </TouchableOpacity>
            </View>


        </View>
    )


const styles = StyleSheet.create({

    socilbuttoncontainer: {
        width: '100%',
        flexDirection: 'row',
        marginRight: 50
    },
    loginpage: {
        flex: 1
    },
    signup: {
        fontWeight: 'bold',
        fontSize: 30,
        paddingLeft: 10,
        paddingTop: 50,
        marginLeft:30
    },
    optionalprompt: {
        textAlign: 'center',
        margin: 10
    },
    errorprompt: {
        textAlign: 'center',
        margin: 10,
        color: 'red'
    },
    buttoncontainer: {
        flex: 0.8,
        marginLeft: 30,
        marginRight: 30
    },
    agreenote: {

        textAlign: 'center',
        marginTop: 5
    },
    loginbuttoncontainer: {
        marginRight: 10,
        marginLeft: 10
    },
    signupoptioncontainer: {
        flexDirection: "row",
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        // alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 20
    },
    login: {
        color: '#61cec7',
        marginLeft: 5,
        fontWeight: 'bold'
    }
})
export default LoginPage