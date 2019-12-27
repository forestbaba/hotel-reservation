import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ReviewTitle from '../../components/reviews/review.title'
import CardView from '../../components/cards/card.review'
import { ScrollView } from 'react-native-gesture-handler'

class Reviewspage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            names: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        }
    }
    render() {
        return (
            <View style={styles.reviewpage}>
                <ReviewTitle count={20}/>
                <ScrollView >
                    {
                        this.state.names.map((name, index) => (
                            <CardView key={index} />

                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: 1
})
export default Reviewspage