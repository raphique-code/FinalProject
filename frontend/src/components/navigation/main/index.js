import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
//import { userAuthStateListener } from '../../redux/actions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import { userAuthStateListener } from '../../../redux/actions';
import AuthScreen from '../../../screens/auth';
import HomeNav from '../home';
import D_HomeNav from '../D-home';
import PackageDetails from '../package_details';
import { useState } from 'react';
import Logout from '../logout';
import Maps_control from '../../../screens/map_control';
import { USER_TYPE } from '../../../redux/constants';
import { auth } from '../../../redux/reducers/auth';

//import HomeScreen from '../home';
//import SavePostScreen from '../../screens/savePost';

const Stack = createStackNavigator()

export default function Route(){

    const currentUserObj = useSelector(state => state.auth)
    const currentUserObj_2 = useSelector(state => state.type)
    console.log(currentUserObj)
    console.log(currentUserObj_2)

    const dispatch = useDispatch();
    const [Package_details, setPackage_detail] = useState(false)

    useEffect(() => {
        dispatch(userAuthStateListener());
    }, [])
/*
    if (!currentUserObj.loaded) {
        return (
            <View style= {styles.container}>
                <Text>empty user</Text>
            </View>
        )
    }
    
*/
// was edited

if ( currentUserObj.currentUserType == "customer")
        { 
          return(
            <View style={{height:"100%"}}>
            <NavigationContainer>
            <Stack.Navigator>
                {currentUserObj.currentUser !== null ?

                    // first one is for login<Stack.Screen name="auth" component={AuthScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="home" component={AuthScreen} options={{ headerShown: false }} />
                    :
                    // second one is after login
                    <Stack.Screen name="home" component={HomeNav} options={{ headerShown: false }} /> 
                    
                    //this is just used to show what map functions do

                //<Stack.Screen name="home" component={HomeNav} options={{ headerShown: false }} />
                    
                }
            </Stack.Navigator>
        </NavigationContainer>
        </View>
        )}

        else{
            return (
                <View style={{height:"100%"}}>
                <NavigationContainer>
                <Stack.Navigator>
                    {currentUserObj.currentUser !== null ?
    
                        // first one is for login<Stack.Screen name="auth" component={AuthScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="home" component={AuthScreen} options={{ headerShown: false }} />
                        :
                        // second one is after login
                        <Stack.Screen name="home" component={D_HomeNav} options={{ headerShown: false }} /> 
                        
                        //this is just used to show what map functions do
    
                    // <Stack.Screen name="home" component={HomeNav} options={{ headerShown: false }} />
                        
                    }
                </Stack.Navigator>
            </NavigationContainer>
            </View>
            )
        }
    
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