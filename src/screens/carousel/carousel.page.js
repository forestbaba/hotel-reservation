import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import ImageCarousel from './image.carousel'
import Roundcornerbutton from '../../components/button/Round.edge.button'
import Slideshow from 'react-native-image-slider-show';
import TextSlider from 'text-slider'

// import Location from '../../../assets/location.svg'

const { width } = Dimensions.get('window');

const slideText = ["Welcome to React Native Text Slider",
    "It is very easy to use",
    "You can simply install and use it now",
    "If you have any issues open up an issue in issues tab"
]
const wrapperStyle = {
    flex: 1,
    width: '100%',
    padding: 6,
    backgroundColor: '#085078',
    alignSelf: 'center',
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    elevation: 2
}
const currentText = {
    textAlign: 'center',
    alignSelf: 'center',
    color: '#ffffff'
}

const activeDot = {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    marginRight: 10,
}

const inactiveDot = {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'grey',
    marginRight: 10
}

class CarouselPage extends React.Component {

    constructor() {
        super()
        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    // title: 'Title 1',
                    // caption: 'Caption 1',
                    url: 'https://svgshare.com/s/H2v',
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

        }
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

        return (<View style={styles.carousel}>
            <View style={styles.carouselContainer2}>


                <Slideshow
                    dataSource={this.state.dataSource}
                    position={this.state.position}
                    height={400}
                    onPositionChanged={position => this.setState({ position })} />
            </View>
            <View style={styles.buttoncontainer}>
                {/* <TextSlider
                    frequency={1000}
                    slideText={slideText}

                    wrapperStyle={wrapperStyle}
                    currentTextStyle={currentText}
                    activeDotStyle={activeDot}
                    inactiveDotStyle={inactiveDot}
                    currentIndex={0}
                /> */}
                <Roundcornerbutton title={'Log in'} colorr={'#61cec7'} margin={20} textcolor={'white'} elevation={3}
                    onPress={() => this.props.navigation.navigate('Login')}
                    />
                <Roundcornerbutton title={'Create account'} colorr={'white'} elevation={3} textcolor={'black'}
                    onPress={() => this.props.navigation.navigate('Signup')}/>
            </View>

        </View>)
    }
};
const styles = StyleSheet.create({
    carousel: {
        flex: 1
    },
    carouselContainer2: {
        width: width,
        height: width * 0.4,
        marginTop: 10,
        flex: 1.5
    },
    buttoncontainer: {
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        flex: 0.5,
        color: '#fafafb'

    }
})
export default CarouselPage;