import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import Progressanddesc from '../progressbar/progress.bar'

const RatingCard = () => (
    <View style={styles.ratingcard}>

        <View style={styles.ratingstatus}>
            <Text style={styles.ratingscore}>9.2</Text>
            <View style={styles.overallrating}>
                <Text style={styles.overalratingtext}>overall rating</Text>
                <Rating
                    type='star'
                    ratingCount={5}
                    ratingColor='#61cec7'
                    ratingBackgroundColor='#c8c7c8'
                    imageSize={10}
                    type="custom"
                    onFinishRating={this.ratingCompleted}
                />
            </View>
        </View>

        <View style={styles.progressanddescholder}>
            <Progressanddesc description={'Room'} />
            <Progressanddesc description={'Service'} />
            <Progressanddesc description={'Location'} />
            <Progressanddesc description={'Price'} />
        </View>



    </View >
)


const styles = StyleSheet.create({
    ratingcard: {
        // flex: 1,
        elevation: 3,
        padding:20,
        borderRadius:10,
         margin:10
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
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'flex-start',
        // alignContent: 'flex-start',
        padding: 10
    },
    progressbar: {
        flex: 1,
        marginLeft: 20,
        marginTop: 3
    },
    progresstitle: {
        fontWeight: 'bold'
    }

})
export default RatingCard