import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import Searchbar from '../../components/searchbar/Round.edge.searchbar'
import imagecover from '../../../assets/explore.jpg'
import imagecover2 from '../../../assets/logincover.jpg'
import ImageBackgroundCard from '../../components/imagebackground/imagebackground.card'
import Slideshow from 'react-native-image-slider-show';
import Roundcornerbutton from '../../components/button/Round.edge.button'

class ExplorePage extends Component {
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

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <View style={styles.explore}>
                <Slideshow
                    dataSource={this.state.dataSource}
                    position={this.state.position}
                    height={500}
                    onPositionChanged={position => this.setState({ position })} />
                {/* <ImageBackground source={imagecover} style={styles.imageCover}> */}
                <View style={styles.topcontainer}>

                    <View style={styles.searchcontainer}>
                        <Searchbar placeholder={'...Search'}
                            elevation={15} margin={20}
                            isicon iconname={'search'}
                            iconcolor={'#61cec7'}
                        />
                    </View>
                    <View style={styles.calltoaction}>
                        <Text style={styles.calltoactiontitle}>Cape Town</Text>
                        <Text style={styles.calltoactiondesc}>The short and little explanationabout cape town</Text>
                        <Roundcornerbutton title={'Explore'}
                            colorr={'#61cec7'}
                            margin={20}
                            textcolor={'white'}
                            parentWidth={'50%'}
                        />
                    </View>
                </View>

                {/* </ImageBackground> */}

                <View style={styles.bottomcontainer}>
                    <Text style={styles.peopledestination}>People Destinations</Text>
                    <ScrollView horizontal>

                        <ImageBackgroundCard imagecover={imagecover} borderRadius={15} text={'The right place to be'} />
                        <ImageBackgroundCard imagecover={imagecover2} borderRadius={15} text={'The right place to be'} />
                        <ImageBackgroundCard imagecover={imagecover} borderRadius={15} text={'The right place to be'} />
                        <ImageBackgroundCard imagecover={imagecover2} borderRadius={15} text={'The right place to be'} />
                        <ImageBackgroundCard imagecover={imagecover} borderRadius={15} text={'The right place to be'} />

                    </ScrollView>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    explore: {
        flex: 1,
        // alignItems: 'flex-start',
        // flexDirection:'column'

    },
    imageCover: {
        flex: 1,
        // width: '100%',
        // alignItems: "center",
        // justifyContent: "space-around",

        resizeMode: 'cover',
    },
    placesCover: {
        // flex: 1,
        padding: 10,
        marginRight: 10,
        width: 250,
        height: 150,
        // width: '100%',
        // alignItems: "center",
        // justifyContent: "space-around",

        resizeMode: 'cover',
    },

    searchcontainer: {
        // width: '100%',
        height: '100%',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 20,
        flex: 0.5
    },
    topcontainer: {
        width: '100%',
        flex: 1,
        position: "absolute",
        elevation: 5
    },
    bottomcontainer: {
        flex: 1,
        marginTop: 20,
        paddingLeft: 20,
        paddingTop: 20,
        width: '100%',
    },
    peopledestination: {
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: 'bold',
        fontSize: 18
    },
    calltoaction: {
        height: '100%',
        // alignSelf: 'flex-end',
        // alignSelf:'baseline',
        justifyContent: 'flex-start',
        marginTop: 250,
        marginLeft: 20
    },
    calltoactiontitle: {
        fontWeight: 'bold',
        fontSize: 30,
        color:'white'
    },
    calltoactiondesc: {
        color: 'white',
        fontSize:14
    }
})
export default ExplorePage;