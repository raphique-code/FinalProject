import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
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



export default function HomeScreen(){
    const Stack = createStackNavigator()
    
    const dispatch = useDispatch()

    const signOut = () => {
        dispatch(signOutUser())
            .then(() => {
                console.log('log out successful ')
            })
            .catch(() => {
              
                console.log('log out unsuccessful')
            })
    }

    return(

            <View style= {styles.container}>
                <TouchableOpacity  style={styles.start}
                        
                        onPress={() => signOut()}>
                        <Text style={styles.buttonText} >Log out</Text>
                </TouchableOpacity>
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