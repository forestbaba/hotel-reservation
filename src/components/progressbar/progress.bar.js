import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

const Progressanddesc = ({description}) => (
    <View style={styles.ratingcard}>
        <View style={styles.progressanddescholder}>
            <Text style={styles.progresstitle}>{description}</Text>
            <View style={styles.progressbar}>
                <ProgressBarAnimated
                    width={200}
                    value={50}
                    backgroundColor="#61cec7"
                    // backgroundColorOnComplete="#6CC644"
                />
            </View>

        </View>

    </View>
)


const styles = StyleSheet.create({
    ratingcard: {
        flex: 1
    },
    overallrating: {
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        textAlign: "left"
    },
    ratingstatus: {
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'flex-start'
    },
    ratingscore: {
        fontWeight: "bold",
        fontSize: 25,
        color: '#61cec7',
        paddingLeft: 5,
        paddingRight: 5
    },
    overalratingtext: {
        paddingLeft: 10
    },
    progressanddescholder: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        padding: 10
    },
    progressbar: {
        flex: 1,
        marginLeft: 20,
        marginTop: 3
    },
    progresstitle: {
        width:100,
        fontWeight: 'bold'
    }

})
export default Progressanddesc