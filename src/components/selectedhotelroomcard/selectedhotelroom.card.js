import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Slideshow from 'react-native-image-slider-show';
import Roundcornerbutton from '../button/Round.edge.button'

class SelectedHotelRoom extends React.Component {
    constructor() {
        super()

        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    // title: 'Title 1',
                    // caption: 'Caption 1',
                    url: 'https://images.unsplash.com/photo-1573945916989-85e23bae8549?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
                }, {
                    // title: 'Title 2',
                    // caption: 'Caption 2',
                    url: 'https://images.unsplash.com/photo-1557687726-e1a3c56c96ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80',
                }, {
                    // title: 'Title 3',
                    // caption: 'Caption 3',
                    url: 'https://images.unsplash.com/photo-1573337133361-5105f739deea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                },
            ],
        };
    }


    render() {
        return (
            <View style={styles.selectedroom}>
                <Slideshow
                    dataSource={this.state.dataSource}
                    position={this.state.position}
                    height={200}
                    onPositionChanged={position => this.setState({ position })} />
                <View style={styles.cardfooter}>
                    <View style={styles.textcontainer}>
                        <Text style={styles.hotelname}>Real Deal</Text>
                        <View style={styles.priceholder}>
                            <Text style={styles.price}>$16</Text>
                            <Text  style={styles.per}>/per night</Text>
                        </View>

                        <Text>Sleeps 5 people</Text>
                    </View>
                    <View style={styles.buttoncontainer}>
                        <Roundcornerbutton
                            title={'Book now'}
                            colorr={'#61cec7'}
                            margin={10}
                            textcolor={'white'}
                            parentWidth={'70%'} />
                        <Text style={styles.roomdetails}>Room details</Text>
                    </View>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    selectedroom: {
        flex: 1
    },
    cardfooter: {
        flexDirection: 'row',
        width: '100%',
        marginTop:10
    },
    textcontainer: {
        flex: 1,
        padding: 15
    },
    buttoncontainer: {
        flex: 1,
        alignItems:'flex-end',
        justifyContent: 'flex-start',
        marginRight: 30,
        marginTop: -0,
    },
    hotelname: {
        fontWeight: 'bold',
        fontSize: 18,
        color:'black'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        color:'black'
    },
    priceholder: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom:5
    },
    per: {
        marginTop: 3,
        marginLeft:3
    },
    roomdetails: {
        marginRight: 30,
        textAlign: "left"

    }
})
export default SelectedHotelRoom;