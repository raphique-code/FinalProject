//page for driver to edit the details that the customer can see and their profile

import MapView, { Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import * as Location from 'expo-location';
import { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import { getDistance } from "geolib";

import firebase from "../../navigation/package_details/firebase";
import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View,TextInput, KeyboardAvoidingView, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
//import { SliderPicker } from 'react-native-slider-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Divider } from 'react-native-elements';
import { styles } from './styles';
import { Fontisto, Ionicons } from '@expo/vector-icons';



export default function DriverEdit_Profile() {
    const ref =  firebase.firestore().collection("driverProfile");
    const [name, onChangeName] = React.useState(null);
    const [license, onChangeLicense] = React.useState(null);
    const [vtype, onChangeVtype] = React.useState(null);
    const [vcolor, onChangeVcolor] = React.useState(null);
    

    let data = {
      name: name,
      license: license,
      vcolor: vcolor,
      vtype : vtype

    }

    function writeDoc () {
      ref.doc('driver1').update(data);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity>
                  <AntDesign 
                      name="arrowleft" // panah
                      color="black"
                      size={30}
                      style= {{paddingTop: 10, paddingBottom: 20, paddingRight: 58, paddingLeft: 20}}
                  />
              </TouchableOpacity>
            <Text style={[styles.editProfile, {marginTop: 6}]}> Edit Profile </Text>
          </View>

    
                   
            <View  style={styles.container_SB}>
            
                <View style={styles.containerMiddle}>
                    <Text style={styles.subText2}>Display Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeName}
                        value={name}
                        placeholder='e.g Juan'
                    />
                </View>

                <View style={styles.containerMiddle}>
                    <Text style={styles.subText2}>License Plate</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeLicense}
                        value={license}
                        placeholder='xxx-123'
                    />
                </View>

                <View style={styles.containerMiddle}>
                    <Text style={styles.subText2}>Vehicle Type</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeVtype}
                        value={vtype}
                        placeholder='e.g Sym Jet Power'
                    />
                </View>

                <View style={styles.containerMiddle}>
                    <Text style={styles.subText2}>Vehicle Color</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeVcolor}
                        value={vcolor}
                        placeholder='e.g Black's
                    />
                </View>

                <View style={{height: '35%', justifyContent: 'flex-end'}}>
                  <TouchableOpacity onPress= {() => writeDoc()} style={styles.containerSave}>
                    <Text style={styles.buttonText}>Save</Text>
                  </TouchableOpacity>
                </View>


            </View>
       
        </View>
    )};


