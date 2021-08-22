import * as React from 'react';
import MapView, { Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text,TextInput, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapViewDirections from 'react-native-maps-directions';
import { getDistance } from "geolib";

export default function Pick_up() {
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
   