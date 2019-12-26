import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Roundedcornerimage from '../../components/imageview/roundedcorner.image'
import profilepic from '../../../assets/travel.jpg'
import Plainbuttonwithicon from '../../components/button/plainbutton.withicon'

class Profile extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.profile}>
                    <View style={styles.profiledetails}>
                        <View style={styles.container1}>
                            <Text style={styles.profilename}>James Wahahi</Text>
                            <Text>View and edit profile</Text>
                        </View>
                        <View>
                            <Roundedcornerimage src={profilepic} />

                        </View>
                    </View>
                    <Plainbuttonwithicon title={'Change Password'} name={'lock'} size={20} color={'gray'} />
                    <Plainbuttonwithicon title={'Invite Friends'} name={'group'} size={20} color={'gray'} />
                    <Plainbuttonwithicon title={'Credits & Coupons'} name={'gift'} size={20} color={'gray'} />
                    <Plainbuttonwithicon title={'Help Center'} name={'question-circle'} size={20} color={'gray'} />
                    <Plainbuttonwithicon title={'Payments'} name={'credit-card'} size={20} color={'gray'} />
                    <Plainbuttonwithicon title={'Settings'} name={'gear'} size={20} color={'gray'} />


                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    profile: {
        flex: 1
    },
    profiledetails: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 20,
        paddingLeft:45,
        marginBottom: 50,
    },
    container1: {
        flex: 1,
        paddingTop: -10
    },
    profilename: {
        fontWeight: 'bold',
        fontSize: 19
    }
})

export default Profile