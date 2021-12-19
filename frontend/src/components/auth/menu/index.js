import React from 'react';
import { View, Text,Image } from 'react-native';

import { Feather } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { T_index } from '../../../redux/constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { StatusBar } from 'expo-status-bar';

import logo from "./../../../../assets/logoV-full.png"

//import { StyleSheet } from "react-native";
import { userAuthStateListener } from '../../../redux/actions';
import { customer } from '../../../redux/actions';
import { USER_TYPE } from '../../../redux/constants';
import {driver} from '../../../redux/actions';
//import { styles } from './styles';
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
//const { primary, background, offWhite, darklight, green,primary_D,primary_DD } = colors;

export default function AuthMenu({ authPage, setAuthPage, Drive_setDetailsPage,Cus_setDetailsPage }) {
    const currentUserObj = useSelector(state => state.type)
    console.log(currentUserObj)

    const dispatch = useDispatch();
    
    return (
    <View style={styles.container}>
            <StatusBar style="dark"/>

        <View style={styles.container_SB}>
             
            <View style={styles.containerTop}>
            <Image source={logo} style={{width: 250, height: 250}}/> 
                </View>
                    
                <View style={[styles.containerMiddle]}>
                <Text style={[styles.subText]}> Sign In as: </Text>
                
                    <TouchableOpacity style={[styles.start]} 
                    onPress={() =>  { {dispatch(driver()); Drive_setDetailsPage(true)}}}>
                    <Text style={[styles.buttonText, {marginRight:100} ]}>Driver</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.start]}
                    onPress={() =>  { {Cus_setDetailsPage(true); dispatch(customer())}}}>
                    <Text style={[styles.buttonText, {marginRight:90} ]}>Customer</Text>
                    </TouchableOpacity>
                  
                </View>
                <View style={[styles.containerBottom]}>
                    <Text style={[styles.subText]}> I am a: </Text>
                    <View style={styles.confirm}>
                    <Text  style={styles.subText2}>
                        {currentUserObj.currentUserType}
                    </Text>
             </View>  
             </View>
        </View>
    </View>
    )
}

/*
<TouchableOpacity* style={styles.containerBottomButton}
onPress={() => authPage == 0 ? setAuthPage(1) : setAuthPage(0)}>

{authPage == 0 ?
    <Text>Don't have an account? <Text style={styles.bottomButtonText}>Sign up</Text></Text>
    :
    <Text>Already have an account? <Text style={styles.bottomButtonText}>Sign in</Text></Text>
}
</TouchableOpacity*/
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: 'grey',
    marginTop: 22
 
  },

  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
 
  container_SB: {  
    backgroundColor: '#F4ECE7',
   // fontSize: 20,
    alignContent: "center",
    justifyContent: "flex-start",
    height: '100%',
  },
 
  confirm: {
    width: 150,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F0843C',
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    //marginBottom: 20,
  },

  start: {
      
      height: '40%',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#F0843C',
      backgroundColor: '#F0843C',
      borderWidth: 2,
      borderRadius: 10,
      flexDirection: 'row',
      marginTop: 5,
      marginBottom: 1,
      width: '100%'
     
    },

  edit2: {
      fontWeight: 'bold',
      color: '#F4ECE7',
      fontSize: 25
  },
 
  subText: { //font color: black
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#1A130E',
    fontWeight: 'bold',
    lineHeight: 40,
    
  },

  radius: {
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 20,
  color: 'grey',
  fontWeight: 'bold',
  marginBottom: 10
  },
 
  edit: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 15,
      color: '#1A130E',
      fontWeight: 'bold',
      color: '#F0843C'
    },

    subText2: { // font color: orange
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 22,
      //color: '#1A130E',
      fontWeight: 'bold',
      color: '#F0843C',
      marginBottom: 5,
      //marginTop:10
    },
 
  insubText: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 15,
      color: 'white',
      marginLeft: 25
  },
 
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
 
  boxDimension: {
      fontSize: 15,
    color: '#F4ECE7',
    marginLeft: 25
  },
 
 

  containerTop: {
      alignItems: 'center',
      height: '40%',
      backgroundColor: '#F4ECE7',
      justifyContent: 'center'
  },


  containerMiddle: {
      backgroundColor: '#F4ECE7',
      height: '43%',
      //elevation: 10,
      shadowColor: '#52006A',
      borderRadius: 3,
      alignItems: 'center',
      justifyContent: 'center'
  },

  containerBottom: {
      backgroundColor: '#F4ECE7',
      height: '39%',
      alignItems: 'center',
      justifyContent: 'flex-start'
  },
   
});


