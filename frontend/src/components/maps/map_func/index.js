import * as React from 'react';
import MapView, { Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text,TextInput, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapViewDirections from 'react-native-maps-directions';
import { getDistance } from "geolib";
import firebase from 'firebase';

if(firebase.apps.length == 0){
  firebase.initializeApp(Constants.manifest.web.config.firebase)
  }


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

export default function Map_func() {
    const [searchLoc, setSearchLoc] = React.useState({latitude: 25.0170, longitude: 121.4628, latitudeDelta: 0.0922, longitudeDelta: 0.0421})
  const [searchDes, setSearchDes] = React.useState({latitude: 24.8138, longitude: 120.9675, latitudeDelta: 0.0922, longitudeDelta: 0.0421})
  const [userPos, setUserPos] = React.useState({lat: null, long: null})
  const calculateDistance = getDistance(searchLoc, searchDes)



    return( 
  
            <View style={styles.container}>
            
                 
               <GooglePlacesAutocomplete placeholder="Pick Up" fetchDetails={true} GooglePlacesSearchQuery={{rankby: "distance"}}
               
                onPress={(data, details = null) => {console.log(data, details)
                  setSearchLoc({
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                  }) }}
  
                query={{
                  key: "AIzaSyCfTyHPV_ZFkfogI2IXsFhMefmdZ4WSjms",
                  language: "en",
                  components: "country:tw",
                  location: `${setSearchLoc.latitude}, ${setSearchLoc.longitude}`
                
                      }}
                listViewDisplayed= "auto"
                      
                styles={{
                  textInputContainer: {
                   borderBottomWidth:1,
                    borderTopWidth: 1,
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderColor: "black"},
  
                    listView: {
                      position: 'absolute',
                      backgroundColor: 'pink'
                    }
                  }}
                      
                 />
  
       
           
           </View>
    )};


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
    }
});
   