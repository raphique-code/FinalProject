//import constants from "jest-haste-map/build/constants";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from 'react';
import MapView, { Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text,TextInput, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import { OpenMapDirections } from 'react-native-navigation-directions'; //use to direct to google maps
import { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapViewDirections from "react-native-maps-directions";
import { getDistance } from "geolib";
import { useState } from "react";
import { styles } from "./styles";
import { Feather, AntDesign } from "@expo/vector-icons";

import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../../navigation/package_details/firebase"
//import styles from "./styles";

export default function Maps_nav({setMaps_nav, setPick_up, setDrop_off,setOrder_summary}) {
    
  const [searchLoc, setSearchLoc] = React.useState({latitude: 24.989856, longitude: 121.313283, latitudeDelta: 0.0922, longitudeDelta: 0.0421});
  const [searchDes, setSearchDes] = React.useState({latitude: 24.990086, longitude: 121.344370, latitudeDelta: 0.0922, longitudeDelta: 0.0421});
  const [userPos, setUserPos] = React.useState({lat: null, long: null});
  const calculateDistance = getDistance(searchLoc, searchDes);
  const[temp, setTemp] = React.useState('');
  const [pickUp, setPickUp] = React.useState('');
  const [dropOff, setDropOff] = React.useState('');
  const [pickUpLatLang, setPickUpLatLang] = React.useState('');
  const [dropOffLatLang, setDropOffLatLang] = React.useState('');
  const [conDropOff, setConDropOff] = React.useState('');

  this.state = {
    latitude:0,
    longitude: 0,
    latitudeDelta: 0.09,
    longitudeDelta: 0.02,
  };
  

   const ref =  firebase.firestore().collection("order").doc('order1');

  function getOrder() {
     ref.onSnapshot((querySnapshot) => {
         setPickUp(querySnapshot.get('PickUpAddrDetails'));
         setDropOff(querySnapshot.get('DropOffAddrDetails'));
         setConDropOff(querySnapshot.get('ConfirmDropOff'));
         setPickUpLatLang(querySnapshot.get('pickUpLatLang'));
         setDropOffLatLang(querySnapshot.get('DropOffLatLang'));

         console.log("DropOff")
         console.log(dropOff)
         
         console.log("PickUp")
         console.log(  pickUpLatLang)
        

     });
 }

 React.useEffect(() => {
  getOrder();
 // return () => {
//    cleanup
//}
console.log("in useeffect")
  
}, []);

  React.useEffect(() => {
    Location.installWebGeolocationPolyfill()
      navigator.geolocation.getCurrentPosition((pos) =>{
         // console.log(pos.coords.latitude + " " + pos.coords.longitude) // display VALUE
          const newUserPos = { 
                lat: pos.coords.latitude,
                long: pos.coords.longitude,
           };

          setUserPos(newUserPos) // store data in usestate
        //  return () => {
        //    cleanup
        //}
       
          //  console.log(newUserPos) // Display your values
          //  console.log(temp)
         
          
          //console.log(newUserPos) // Display your values
     });
    }
  );

  return( 

          <View style={styles.container}>
            <StatusBar
        animated={true}
        //backgroundColor="#61dafb"
        backgroundColor='#F4ECE7'
        barStyle= "dark-content"
        
        />
        


          
          <MapView
            provider={PROVIDER_GOOGLE}
            //showsTraffic={true}
            showsUserLocation={true}
            showsMyLocationButton={true}
              style={{flex: 4, width: Dimensions.get("window").width, height: Dimensions.get("window").height}} 
              Region={{
                latitude: userPos.lat,
                longitude: userPos.long,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
          >

          
            <Marker
              coordinate={{

                latitude: pickUpLatLang.latitude ? pickUpLatLang.latitude:0,
                longitude: pickUpLatLang.longitude? pickUpLatLang.longitude:0
                //make a marker with arrow up for pick up and arrow down for drop off searchLoc
              }}
             
            >
            
              <Callout >
                <Text>
                  Pick Up
                </Text>
              </Callout>
            </Marker>


            <Marker
              coordinate={{
                latitude: pickUpLatLang.latitude ? pickUpLatLang.latitude:0,
                longitude: pickUpLatLang.longitude? pickUpLatLang.longitude:0
              }}
              
            >
              <Callout>
                <Text>
                  Drop Off
                </Text>
              </Callout>
            </Marker>

          <MapViewDirections
            lineDashPattern={[0]}
            origin={pickUpLatLang}
            destination={dropOffLatLang}
            apikey={"AIzaSyCfTyHPV_ZFkfogI2IXsFhMefmdZ4WSjms"}
            strokeWidth={5}
            strokeColor= 'orange'  //"mediumseagreen"
            mode='DRIVING'

            onReady={result => {
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} min.`)
              setTemp(Math.ceil(result.duration))

            }}

            onError={(errorMessage) => {
               console.log('GOT AN ERROR');
            }}
          />

          </MapView>
          
          <View style={styles.header}>
                <TouchableOpacity style= {{backgroundColor: "transparent", marginTop:10}} onPress={() => setMaps_nav(false)}>
                    <AntDesign 
                        name="arrowleft" // panah
                        color="black"
                        size={30}
                        style= {{paddingTop: 12, paddingBottom: 20, paddingRight: 120, paddingLeft: 10}}
                    />
                  </TouchableOpacity>
              </View>

          <View style ={[styles.inner_container]}>
              

              <TouchableOpacity style ={styles.Box_button_top} onPress={() => {setPick_up(true); setMaps_nav(false)}}>
              <Feather
                      name="search" // panah
                      color="black"
                      size={25}
                      style= {{paddingTop:10, paddingBottom: 5, paddingRight: 5, paddingLeft:8}}
                      
                      
                  />
              <Text style={styles.display_text_three}>{pickUp}</Text>
              </TouchableOpacity>
 
              <TouchableOpacity style ={styles.Box_button_bottom} onPress={() => {setDrop_off(true); setMaps_nav(false)}} >
              <Feather
                      name="search" // panah
                      color="black"
                      size={25}
                    
                      style= {{paddingTop: 10, paddingBottom: 5, paddingRight: 5, paddingLeft: 8}}
                      
                      
                  />
              <Text style={styles.display_text_three}>{dropOff}</Text>
              </TouchableOpacity>    

            

          </View>
          <View style ={[styles.inner_container_two,{marginTop:690}]}>

          <TouchableOpacity
                        onPress={() => {setOrder_summary(true); setMaps_nav(false)}}
                        style={[styles.confirm, {
                            borderColor: '#F0843C',
                            borderWidth: 1,
                            //marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>Confirm</Text>
                    </TouchableOpacity>
          </View>
        
        

          <View style ={styles.inner_container_one}>

              <Text style = {styles.display_text_two}>
              Est. Time Of Trip
              </Text>
              <Text style={styles.display_text}>

              {temp} min.
              </Text>
             
            </View>
            

                  
          

   
          </View>
          );
      }