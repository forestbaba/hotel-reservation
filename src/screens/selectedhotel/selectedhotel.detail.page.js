import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import Imagebackground from '../../components/imagebackground/imagebackground.card'
import imagecover from './../../../assets/travel.jpg'
import Icon from 'react-native-vector-icons/FontAwesome'
import Leftandright from '../../components/leftandright/leftandright'
import RatingCard from '../../components/cards/rating.card'
import ReviewTitle from '../../components/reviews/review.title'
import CardView from '../../components/cards/card.review'
import Roundedgebutton from '../../components/button/Round.edge.button'

var width = Dimensions.get('window').width; //full width


class SelectedHotelDetail extends React.Component {
    constructor() {
        super()
        this.state = {
            names: ['james', 'paul', 'kloe', 'jadass', 'mahoome', 'rankos'],
            review: ['reviewone', 'review2', 'review3']
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.selectedhoteldetail}>
                    <View style={styles.imageandlikesholder}>
                        <Image source={imagecover} borderRadius={15} style={styles.imageitself} />
                        <View style={styles.heartcontainer}>
                            <TouchableOpacity>
                                <Icon size={20} color='red' name='heart' style={styles.heart} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.detailsholder}>
                        <View style={styles.nameandimageholder}>
                            <View style={styles.nameandtimeholder}>
                                <Text style={styles.name}>The Great Deal Royal</Text>
                                <Text>Alausa Ikeja</Text>
                            </View>
                        </View>
                        <View style={styles.ratingholder}>
                            <Text style={styles.ratingdesc}>$220</Text>
                            <Text>/per night</Text>
                        </View>

                    </View>
                    < View style={styles.divider} />
                    <View style={styles.summaryholder}>
                        <Text style={styles.summarytitle}>Summary</Text>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                             since the 1500s, when an unknown printer took a galley of type and scrambled
                             it to make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged. It was popularised
                            in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                             and more recently with desktop publishing software like Aldus PageMaker including
                      versions of Lorem Ipsum.</Text>
                    </View>
                    <RatingCard />
                    <View style={styles.imageholder}>
                        <View style={styles.imagoptionholder}>
                            <Text>Photos</Text>
                            <TouchableOpacity>
                                <Text style={styles.viewall}>View all</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal>
                            {
                                this.state.names.map((name, index) => (
                                    <Image key={index} source={imagecover} borderRadius={15} style={styles.hotelimages} />
                                ))
                            }

                        </ScrollView>
                    </View>
                    <View>
                        <ReviewTitle count={20} actiontitle={'View all'} />
                        {
                            this.state.review.map((names, index) => (
                                <CardView />
                            ))
                        }

                    </View>
                    <View style={styles.bookbuttoncontainer}>
                        <Roundedgebutton title={'Book now'}
                            colorr={'#61cec7'}
                            margin={20}
                            textcolor={'white'}
                            parentWidth={'100%'}
                        />
                    </View>
                </View>


            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    selectedhoteldetail: {
        // width: width
        flex: 1

    },
    imageandlikesholder: {
        // width: width,
        // height: width /4
    },
    imageitself: {
        height: 200,
        width: width
    },
    heartcontainer: {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 10,
        top: 25

    },
    heart: {
        elevation: 5
    },


    detailsholder: {
        flexDirection: 'row',
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10


    },
    ratingholder: {

        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10

    },
    ratingdesc: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 30,
        alignContent: 'flex-end',
        justifyContent: 'flex-end'
    },

    nameandimageholder: {
        flexDirection: 'row',
        flex: 1
    },
    nameandtimeholder: {
        paddingLeft: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 30
    },
    divider: {
        borderBottomColor: '#efeff2',
        borderBottomWidth: 0.5,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20
    },
    summaryholder: {
        padding: 20
    },
    summarytitle: {
        fontSize: 15,
        color: '#d3d3d3',
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10

    },
    imagoptionholder: {

        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10
    },
    imageholder: {
        flex: 1,
        padding: 10
    },
    viewall: {
        alignSelf: 'flex-end',
        color: '#61cec7'
    },
    hotelimages: {
        width: 100,
        height: 100,
        margin: 8
    },
    bookbuttoncontainer: {
        margin:30
    }
})
export default SelectedHotelDetail;