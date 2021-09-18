
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

//import { userAuthStateListener } from '../../redux/actions';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
//import { userAuthStateListener } from '../../../redux/actions';
//import AuthScreen from '../../../screens/auth';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../../../redux/actions';
//import HomeScreen from '../home';
//import SavePostScreen from '../../screens/savePost';



export default function Logout(setSignOut,setHome){
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



 