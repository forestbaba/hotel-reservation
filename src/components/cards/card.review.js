import React from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView, Dimensions } from 'react-native'
import Roundedcornerimage from '../imageview/roundedcorner.image'
import { Rating, AirbnbRating } from 'react-native-ratings';
import Reviewtitle from '../reviews/review.title'
var width = Dimensions.get('window').width; //full width


class CardView extends React.Component {
    render() {
        return (
            // <ScrollView>
            <View style={styles.cardview}>
                <View style={styles.detailsholder}>
                    <View style={styles.nameandimageholder}>
                        <Roundedcornerimage width={50} height={50} />
                        <View style={styles.nameandtimeholder}>
                            <Text style={styles.name}>Paul James</Text>
                            <Text>Last updated 21, May, 2005</Text>
                        </View>
                    </View>
                    <View style={styles.ratingholder}>
                        <Text style={styles.ratingdesc}>Very good</Text>
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
                <View style={styles.replyholder}>
                    <Text>The interested in this repository understand your project by adding a interested in this repository understand your project by adding alorem ipsom of this review that i nedd</Text>
                    <View style={styles.replyinputholder}>
                        <Text>Reply</Text>
                        <TextInput underlineColorAndroid='#d3d3d3'/>
                    </View>

                </View>


            </View>
            // </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    cardview: {
        flex: 1,
        paddingLeft: 10,
        paddingRight:10
    },
    detailsholder: {
        flexDirection: 'row',
        // flex: 1,
        marginTop:20,
        paddingLeft: 10,
        paddingRight: 10


    },
    ratingholder: {

        // textAlign: 'right',
        flex: 1,
        alignItems: 'flex-end',
        marginRight:10

        // justifyContent: 'flex-end'
    },
    ratingdesc: {
        textAlign: 'right'
    },
    imageholder: {
        // marginLeft:40
    },
    nameandimageholder: {
        //flex: 1,
        flexDirection: 'row'
    },
    nameandtimeholder: {
        paddingLeft: 10
    },
    name: {
        fontWeight: 'bold'
    },
    replyholder: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },
    replyinputholder: {
        marginTop:20
    }
})
export default CardView