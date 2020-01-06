import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import SelectedHotelRoom from '../../components/selectedhotelroomcard/selectedhotelroom.card'

class SelectedHotel extends React.Component{
    constructor() {
        super()
        this.state = {
            name: ['name','james','pane','lome','prone','kome']
        }
    }
    render() {
        return (
            <ScrollView>
                {
                    this.state.name.map((item) => (
                        <SelectedHotelRoom goaway={() => this.props.navigation.navigate('SelectedHotelDetails')}/>
                    ))
                }
            </ScrollView>
        )
    }
}
export default SelectedHotel;