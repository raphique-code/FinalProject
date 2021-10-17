
//page for drivers to see and pick the available customers

import React from 'react';

import { ActivityIndicator, TouchableOpacity } from 'react-native';

import { StyleSheet, Text, View, Dimensions } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { styles } from './styles';


const PickUp= "3";
const DropOff = "6";
const ServiceFee = "300"

export default function DriversCustomer_List({ setDriver_first, setDriverEdit_Profile, setDriverCustomer_list, setDriver_OrderDetails }) {
    return( 
  
        <View style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity onPress={() => {setDriver_first(true); setDriverCustomer_list(false)}} >
                  <AntDesign 
                      name="arrowleft" // panah
                      color="black"
                      size={30}
                      style= {{paddingTop: 10, paddingBottom: 20, paddingRight: 100, paddingLeft: 20}}
                  />
              </TouchableOpacity>
            <Text style={[styles.subText, {marginTop: 10}]}>Customer List</Text>
          </View>

           <View  style={styles.container_SB}>
              <TouchableOpacity style={styles.confirm}  onPress= {() => {setDriver_OrderDetails (true); setDriverCustomer_list(false)}}>
                <AntDesign 
                        name="user" // logo user
                        color="black"
                        size={60}
                        style= {{paddingTop: 40, paddingBottom: 15, paddingLeft: 15, paddingRight: 5,
                                    width: 75}}
                />
                <View>
                    <Text style={styles.subText2}> Driver &ensp;  
                    <AntDesign 
                    name="arrowright" // panah
                    color="black"
                    size={15}
                    style= {{paddingBottom: 25}}
                    />
                    &ensp; Pick Up </Text>
                    <Text style={styles.insubText}> {PickUp} km</Text>


                    <Text style={styles.subText2}> Pick Up &ensp;
                    <AntDesign 
                    name="arrowright" // panah
                    color="black"
                    size={15}
                    style= {{paddingBottom: 25}}
                    />
                    &ensp; Drop Off</Text>
                    <Text style={styles.insubText}> {DropOff} km</Text>


                    <Text style={styles.subText2}> Service Fee</Text>
                    <Text style={styles.insubText}> NTD {ServiceFee}</Text>
                </View>
              </TouchableOpacity>




              
              
             
            
            
          </View> 
       </View>
)};

