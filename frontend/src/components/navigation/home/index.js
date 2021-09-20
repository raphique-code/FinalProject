import { useState } from 'react';
import PackageDetails from '../package_details';
import Logout from '../logout';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { userAuthStateListener } from '../../redux/actions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import { userAuthStateListener } from '../../../redux/actions';
import AuthScreen from '../../../screens/auth';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../../../redux/actions';
//import HomeScreen from '../home';
//import SavePostScreen from '../../screens/savePost';
import Maps_nav from '../../maps/maps_nav';


//setPackage_detail={setPackage_detail} setHome={setHome}
export default function HomeNav(){
      
    const [home, setHome] = useState(0);
    const [signOut, setSignOut] = useState(false)
    const [Drive_detailsPage, Drive_setDetailsPage] = useState(true)
    const [Package_details, setPackage_detail] = useState(true)
    const [cus_login, setCus_login] = useState(false)
    const [drive_login, setDrive_login] = useState(false)
    return(
        <View style = {{marginTop:30}}>

            {Package_details?
            
            <PackageDetails/>

            :
 
            signOut?

            <Logout  setSignOut={setSignOut} setHome={setHome}/>

            :
            
            <Logout  setSignOut={setSignOut} setHome={setHome}/>
                    
            }       
        </View>
    )

}

/*
const EmptyScreen = () => {
    return <View></View>
}


export default function HomeScreen() {
    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: 'black' }}
            initialRouteName="feed">
            <Tab.Screen
                name="feed"
                component={EmptyScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Discover"
                component={EmptyScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="search" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Add"
                component={CameraScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="plus-square" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Inbox"
                component={EmptyScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="message-square" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Me"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" size={24} color={color} />
                    )
                }}
            />
        </Tab.Navigator>

    )
}
*/