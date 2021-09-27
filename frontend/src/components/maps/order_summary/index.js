
import MapView, { Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import * as Location from 'expo-location';
import { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import { getDistance } from "geolib";


import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Picker, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
//import { SliderPicker } from 'react-native-slider-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Divider } from 'react-native-elements';
import { Fontisto, Ionicons } from '@expo/vector-icons';

export default function OrderSummary() {

    const [selectedValue, setSelectedValue] = React.useState("Payment Option");
    const basePrice = 10;
    const [distance, setDistance] = React.useState(8);
    const rate = (basePrice * distance);
    const box = 60;
    const total = (rate + box);


    return( 
  
        <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity style={{marginTop: 10, marginLeft: 15}}>
                  <AntDesign 
                      name="arrowleft" // panah
                      color="black"
                      size={30}
                  />
              </TouchableOpacity>
            <Text style={[styles.orderDetails, {marginTop: 6}]}>Order Summary</Text>
          </View>


            <View style={styles.container_SB}>
                <View style={styles.containerMiddle}>
        
                    <View style={styles.containerLeft}>
                        <Text style={styles.subText2}>Base Price</Text>
                        <Text style={styles.subText2}>Distance</Text>
                        <Divider orientation="vertical" width={50} style={{marginTop: 10}}/>
                        <Text style={styles.subText2}>Service Rate</Text>
                        <Text style={styles.subText2}>Box Price</Text>
                        <Divider orientation="vertical" width={50} style={{marginTop: 10.6}}/>
                        <Text style={styles.subText2}>Total Price</Text>
                    </View>

                    <View style={styles.containerRight}>
                        <Text numberOfLines={1} style={styles.subText} >NTD {basePrice} / Km</Text>
                        <Text numberOfLines={1} style={styles.subText} >{distance}Km</Text>
                        <Divider orientation="vertical" width={50} style={{marginTop: 9.5}}/>
                        <Text numberOfLines={1} style={[styles.subText, {fontWeight: 'bold'}]} >NTD {rate}</Text>
                        <Text numberOfLines={1} style={styles.subText} >NTD {box}</Text>
                        <Divider orientation="vertical" width={50} style={{marginTop: 10}}/>
                        <Text numberOfLines={1} style={[styles.subText, {fontWeight: 'bold'}]} >NTD {total}</Text>
                    </View>
                </View>


                <Text style={styles.subText3}>Payment Option</Text>
                <View style={{marginTop: 20, height: 60, borderWidth: 1, borderRadius: 2, borderColor: 'black' }}> 
                    <Picker
                        selectedValue={selectedValue}
                        style={{height: 50, width: 350 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Cash" value="Cash" />
                    </Picker>
                </View> 


                <View style= {{height: '58%', justifyContent: 'flex-end'}}>
                  <TouchableOpacity style={styles.containerFinish}>
                    <Text style={styles.buttonText}>Order Driver</Text>
                  </TouchableOpacity>
                </View>


            </View>





            
        </View>
)};

