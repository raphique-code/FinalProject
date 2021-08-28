
import constants from "jest-haste-map/build/constants";
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
/*

components needed:

auto complete
a map
maker (inside mapview)
mapview directions (inside mapview)

features:

customer features:
On map open current location 
Input pickup and dropoff
Line and estimated time (interval updates)
Time estimates will have from driver to pickup and pickup to drop off.
Separate time count downs
Delivery complete (prompt)
cancel button before pickup
on creation on an order order can only be deleted if customer click cancle or driver click drop off confiez

Features driver:
Set working radius 
Click customer
Prompt package details and full route and payment 
Prompt Accept or decline orders
Navigation of pickup and drop off
Promt Start route ( start navigating)
Before pickup cancel option available 
Pick up confirmation 
Drop off confirmation
transport type
accept brings uses google map nav to pick loc
pick confirmation uses  google map nav to dropOff loc


copy address
todays stats
todays distanced
number of customers
number of cancels
number of drop off
todays earnings 
rules
terms and agreement


thursday 11:00 3 to 4:30
classroom rules thursday grade ka grade 1 a thursday 5:40 15 minutes earlier
*/

export default function Maps_nav() {
    
  const [searchLoc, setSearchLoc] = React.useState({latitude: 24.989856, longitude: 121.313283, latitudeDelta: 0.0922, longitudeDelta: 0.0421})
  const [searchDes, setSearchDes] = React.useState({latitude: 24.990086, longitude: 121.344370, latitudeDelta: 0.0922, longitudeDelta: 0.0421})
  const [userPos, setUserPos] = React.useState({lat: null, long: null})
  const calculateDistance = getDistance(searchLoc, searchDes)
 //var temp= 1

  React.useEffect(() => {
    Location.installWebGeolocationPolyfill()
      navigator.geolocation.getCurrentPosition((pos) =>{
         // console.log(pos.coords.latitude + " " + pos.coords.longitude) // display VALUE
          const newUserPos = { 
                lat: pos.coords.latitude,
                long: pos.coords.longitude,
           };
          setUserPos(newUserPos) // store data in usestate
          
          if(temp == 1)
          {
            
            console.log(newUserPos) // Display your values
            console.log(temp)
          }
          temp = 0
          //console.log(newUserPos) // Display your values
     });
    }
  );

  return( 

          <View style={styles.container}>

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

                latitude: searchLoc.latitude,
                longitude: searchLoc.longitude
                //make a marker with arrow up for pick up and arrow down for drop off
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
                latitude: searchDes.latitude,
                longitude: searchDes.longitude
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
            origin={searchLoc}
            destination={searchDes}
            apikey={"AIzaSyCfTyHPV_ZFkfogI2IXsFhMefmdZ4WSjms"}
            strokeWidth={5}
            strokeColor="mediumseagreen"
            mode='DRIVING'

            onReady={result => {
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} min.`)
            }}

            onError={(errorMessage) => {
               console.log('GOT AN ERROR');
            }}
          />

          </MapView>

          

   
          </View>
          );
      }

     




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey'
  
    },
    container_SB: {  
    
      backgroundColor: 'blue',
      fontSize: 20,
      alignContent: "center",
      justifyContent: "center",
      padding: 20,
      

  
      flex: 1
    },
    inner_container_one: {
      marginBottom: 60,
      backgroundColor: 'red',
      marginLeft: 10,
      marginRight: 10,
      
    },

    inner_container: {
      marginBottom: 10,

      marginLeft: 10,
      marginRight: 10,
        position: 'absolute',
      
      
      
      backgroundColor: 'red'
      },
    
      
      
      
    map: {
      flex: 3,
      marginTop: 10,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    },
});



