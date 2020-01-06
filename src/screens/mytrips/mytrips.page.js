import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import TripsCard from '../../components/cards/trips.card'

class MyTrips extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.mytrips}>
                    <Text style={styles.triptitle}>My Trips</Text>
                    <View style={styles.tabtitile}>
                        <TouchableOpacity><Text>Upcoming</Text></TouchableOpacity>
                        <TouchableOpacity><Text>Finished</Text></TouchableOpacity>
                        <TouchableOpacity><Text>Favourites</Text></TouchableOpacity>
                    </View>
                    <View>
                        <TripsCard />
                        <TripsCard />
                        <TripsCard />
                        <TripsCard />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    mytrips: {
        flex: 1
    },
    triptitle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
        padding: 20
    },
    tabtitile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 25,
        padding: 15,
        backgroundColor: '#F3F4F5',
        marginRight: 20,
        marginLeft: 20
    }

})
export default MyTrips;