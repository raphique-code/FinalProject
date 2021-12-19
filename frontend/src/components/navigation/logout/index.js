
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



export default function Logout({setSignOut,setDriver_first}){
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
                  <View style= {styles.container_SB}>
                    <View style= {styles.containerBottom3}>
                    <Text style={styles.subText2} >Are you sure?</Text>
                <TouchableOpacity  style={styles.start1}
                        
                        onPress={() => signOut()}>
                        <Text style={styles.buttonText} >Log out</Text>
                </TouchableOpacity>
                </View>
                <View style= {styles.containerBottom3}>
                <TouchableOpacity style={styles.start}
                     onPress={() => {setSignOut(false); setDriver_first(true)}}>
                    <Text style={styles.buttonText}>Back</Text> 
                </TouchableOpacity>
                </View>

                </View>
             
            </View>
    )
    }



 