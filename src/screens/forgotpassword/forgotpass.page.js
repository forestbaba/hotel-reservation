import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Roundedgeinput from '../../components/searchbar/Round.edge.searchbar'
import Roundedgebutton from '../../components/button/Round.edge.button'

const ForgotPassword = () => (
    <ScrollView>
        <View style={styles.forgotpassword}>
            <Text style={styles.forgotpasswordtext}>Forgot password</Text>
            <Text style={styles.enteremailprompt}>Enter your email to receive an email to reset your password</Text>
            <View style={styles.buttoncontainer}>
                <Roundedgeinput placeholder={'Your email'} elevation={5} iconcolor={'#61cec7'} />

            </View>
            <View style={styles.buttoncontainer2}>
                <Roundedgebutton title={'Send'} colorr={'#61cec7'} textcolor={'white'} elevation={5} />

            </View>
        </View>
    </ScrollView>
)


const styles = StyleSheet.create({
    forgotpassword: {
        // flex: 1,
        margin: 15
    },
    buttoncontainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    buttoncontainer2: {
        flex: 1,
        marginTop:30
    },
    forgotpasswordtext: {
        fontWeight: 'bold',
        fontSize: 22,
        margin: 20
    },
    enteremailprompt: {
        padding: 10,
        marginLeft: 5
    }

})
export default ForgotPassword