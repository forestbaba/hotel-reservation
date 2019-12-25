import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Roundedgebutton from '../../components/button/Round.edge.button'
import Roundedgeinput from '../../components/button/Round.edge.textinput'

const LoginPage = () =>
    (
        <View style={styles.loginpage}>
            
            <Text style={styles.login}>Log in</Text>
            <View style={styles.socilbuttoncontainer}>
                <Roundedgebutton isicon title={'Facebook'}
                    colorr={'#3b5998'} margin={20}
                    textcolor={'white'}
                    parentWidth={'40%'}
                    mRight={20} mLeft={20}
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
                <Roundedgeinput placeholder={'Your email'} elevation={5} margin={20}/>
                <Roundedgeinput placeholder={'Your password'} elevation={5} isicon iconname={'eye'} iconcolor={'#61cec7'} />
            </View>
            <TouchableOpacity><Text style={styles.forgotpassword}>Forgot password ?</Text></TouchableOpacity>
            <View style={styles.loginbuttoncontainer}>
                <Roundedgebutton title={'Log in'}
                    colorr={'#61cec7'}
                    margin={20}
                    textcolor={'white'}
                    parentWidth={'100%'}
                />

            </View>

            <View style={styles.signupoptioncontainer}>
                <Text>Don't have an account ?</Text>
                <TouchableOpacity>
                    <Text style={styles.signup}>Sign up</Text>
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
    login: {
        fontWeight: 'bold',
        fontSize: 30,
        paddingLeft: 10,
        paddingTop: 50,
        marginLeft: 30

    },
    optionalprompt: {
        textAlign: 'center',
        margin: 10
    },
    errorprompt: {
        textAlign: 'center',
        margin: 10,
        color:'red'
    },
    buttoncontainer: {
        flex: 0.5,
        marginLeft: 30,
        marginRight:30
    },
    forgotpassword: {

        textAlign: 'right',
        marginRight: 35,
        marginTop:5
    },
    loginbuttoncontainer: {
        marginRight: 40,
        marginLeft: 40
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
    signup: {
        color: '#61cec7',
        marginLeft: 5,
        fontWeight: 'bold'
    }
})
export default LoginPage