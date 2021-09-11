import React from 'react';
import { View, Text } from 'react-native';
import {styles, colors} from './styles';
import { Feather } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';


/**
 * Function that renders a component that renders a menu to allow
 * the user to choose the auth provider and if the method should be
 * signin or signup.
 * 
 * @param props passed to component 
 * @param props.authPage if 0 it is in the signin state
 * if 1 is in the signup state 
 * @param props.setAuthPage setter for the authPage var (0 or 1)  
 * @param props.setDetailsPage setter for the variable that chooses 
 * the type of page, if true show AuthMenu else show AuthDetails 
 * @returns Component
 */
const { primary, background, offWhite, darklight, green,primary_D,primary_DD } = colors;

export default function AuthMen({ authPage, setAuthPage, Drive_setDetailsPage,Cus_setDetailsPage }) {
    return (
        <View style={styles.container}>

            <View style={styles.button}>
             
                <TouchableOpacity 
                    onPress={() => Cus_setDetailsPage(true)}>

                    <LinearGradient
                        colors={[primary, primary_D]}
                        style={styles.signIn}
                    >
                        <Feather name="user" size={24} color="black" />
                        <Text style={[styles.textSign, {
                            color:'#fff'
                        }]}>Customer</Text>
                    </LinearGradient>
                </TouchableOpacity>
                 
            </View>

            <View style={styles.button}>
             
                <TouchableOpacity style={styles.button}
                    onPress={() => Drive_setDetailsPage(true)}>

                    <LinearGradient
                        colors={[primary, primary_D]}
                        style={styles.signIn}
                    >
                        <Feather name="user" size={24} color="black" />
                        <Text style={[styles.textSign, {
                            color:'#fff'
                        }]}>Driver</Text>
                    </LinearGradient>
                </TouchableOpacity>
                 
            </View>

        </View>
    )
}
/*
<TouchableOpacity style={styles.containerBottomButton}
onPress={() => authPage == 0 ? setAuthPage(1) : setAuthPage(0)}>

{authPage == 0 ?
    <Text>Don't have an account? <Text style={styles.bottomButtonText}>Sign up</Text></Text>
    :
    <Text>Already have an account? <Text style={styles.bottomButtonText}>Sign in</Text></Text>
}
</TouchableOpacity*/
