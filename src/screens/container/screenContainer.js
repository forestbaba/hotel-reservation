import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Carousel from '../carousel/carousel.page'
import Profile from '../profile/profile'
import MyTrips from '../mytrips/mytrips.page'
import Landingpage from '../Landing.page'
import Loginpage from '../login/login.page'
import Signuppage from '../signup/Signup.page'
import Container from './TabNavigator'
import SelectedHotel from '../selectedhotel/selectedhotel.page'
import SelectedHotelDetails from '../selectedhotel/selectedhotel.detail.page'
import Editprofile from '../profile/editprofile.page'
import Settings from '../profile/settings'
const AppNavigator = createStackNavigator({

    // DrawerNavigation: {
    //     screen: DrawerNavigation
    // },



 
    Landingpage: {
        screen: Landingpage,
        navigationOptions: {
            header: null      
        }
    },

    Carousel: {
        screen: Carousel,
        navigationOptions: {
            header: null      
        }
    },
    Login: {
        screen: Loginpage,
        navigationOptions: {
            header: null      
        }
    },
    Signup: {
        screen: Signuppage,
        // navigationOptions: {
        //     header: null      
        // }
    },

    Container: {
        screen: Container,
        navigationOptions: {
            header: null        // this will do your task
        }
    },
    SelectedHotel: {
        screen: SelectedHotel
    },
    SelectedHotelDetails: {
        screen: SelectedHotelDetails
    },
      Editprofile: {
        screen: Editprofile,
        // navigationOptions: {
        //     title: 'Edit profile'
        // }
    },
    Settings: {
        screen: Settings
    },


    // SignupDashboard: {
    //     screen: SignupDashboard,
    //     navigationOptions: {
    //         header: null        // this will do your task
    //     }
    // },
    // LoginWithEmail: {
    //     screen: LoginWithEmail,

    // },
    // SignupWithEmail: {
    //     screen: SignupWithEmail,

    // },

    // ForgotPassword: {
    //     screen: ForgotPassword,

    // },
    // ChangePassword: {
    //     screen: ChangePassword,
    //     navigationOptions: {
    //         title: 'Change Password'
    //     }

    // },
    // ChangeMobileNumber: {
    //     screen: ChangeMobileNumber,
    //     navigationOptions: {
    //         title: 'Change mobile number'
    //     }

    // },
    // ChangeUsername: {
    //     screen: ChangeUsername,
    //     navigationOptions: {
    //         title: 'Change username'
    //     }

    // },
    // ProfileTabHolder: {
    //     screen: ProfileTabHolder,
    //     navigationOptions: {
    //         header: null
    //     }
    // },
    // ProfilePicture: {
    //     screen: ProfilePicture
    // },
    // ProfileLikes: {
    //     screen: ProfileLikes
    // },
    // NewPost: {
    //     screen: NewPost,
    //     navigationOptions: {
    //         title: 'New Post'
    //     }
    // },
    // PostDetail: {
    //     screen: PostDetail,
    //     navigationOptions: {
    //         title: 'Post'
    //     }
    // },
})

export default createAppContainer(AppNavigator);