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
//import HomeScreen from '../home';
//import SavePostScreen from '../../screens/savePost';

const Stack = createStackNavigator()

export default function Route(){

    const currentUserObj = useSelector(state => state.auth)
    console.log(currentUserObj)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAuthStateListener());
    }, [])

    if (!currentUserObj.loaded) {
        return (
            <View style= {styles.container}>
                <Text>empty user</Text>
            </View>
        )
    }
    


    return(
        <NavigationContainer>
        <Stack.Navigator>
            {currentUserObj.currentUser == null ?
                <Stack.Screen name="auth" component={AuthScreen} options={{ headerShown: false }} />
                :
                <Stack.Screen name="home" component={HomeNav} options={{ headerShown: false }} />
            }
        </Stack.Navigator>
    </NavigationContainer>
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