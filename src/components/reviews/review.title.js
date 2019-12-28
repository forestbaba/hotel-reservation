import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
var width = Dimensions.get('window').width; //full width

class ReviewTitle extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.reviewTitle}>
                <View style={styles.reviewtitleholder}>
                    <Text style={styles.title}>Reviews ( {this.props.count} )</Text>
                    <TouchableOpacity>
                        <Text style={styles.writeareview}>{this.props.actiontitle}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.divider} />



            </View>
        )
    }
}

const styles = StyleSheet.create({

    reviewTitle: {
        width: width,
        height: 80,
        padding: 15


    },
    reviewtitleholder: {
         width:width,
        // flex:1,
        flexDirection: 'row',
        justifyContent:'space-between'
        // alignContent: 'flex-start',
        // justifyContent: 'flex-start'

    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft:10
    },
    writeareview: {
        color: '#61cec7',
        alignSelf: 'flex-end',
        marginRight:40
    },
    
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20
    }
})
export default ReviewTitle;