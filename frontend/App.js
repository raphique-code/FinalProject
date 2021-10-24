

import { useEffect, useState} from "react/cjs/react.production.min";
import constants from "jest-haste-map/build/constants";
import { StatusBar } from "expo-status-bar";
import React from 'react';
import { TouchableOpacity } from "react-native-gesture-handler";
import { ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Maps_Re from "./src/components/maps/test";

import Constants  from "expo-constants";
import reducers from './src/redux/reducers';
import MapView from "react-native-maps";

import firebase from "firebase";
import Route from "./src/components/navigation/main";

//import * as firebase from 'firebase'
import AutoGetLoc from "./src/components/maps/maps_nav";

const store = createStore(reducers,applyMiddleware(thunk))

if(firebase.apps.length == 0){
firebase.initializeApp(Constants.manifest.web.config.firebase)
}


import MapViewDirections from 'react-native-maps-directions';
//screen


import AuthScreen from "./src/screens/auth";
import Maps_nav from "./src/components/maps/maps_nav";
import Pick_up from "./src/components/maps/map_func";
import Example from "./src/components/maps/test";
import Maps_control from "./src/screens/map_control";
import PackageDetails from "./src/components/navigation/package_details";
import Split_page from "./src/components/navigation/splitpage";
import Driver_First from "./src/components/Driver_components/drive_first";
import DriverEdit_Profile from "./src/components/Driver_components/driver_editProfile";
import DriversCustomer_List from "./src/components/Driver_components/driver_customerList";
import Driver_OrderDetails from "./src/components/Driver_components/driver_orderDetails";
import DropOff from "./src/components/maps/drop_off";


const Stack = createStackNavigator();

export const index_context = React.createContext

export default function App() {
    
  const[temp, setTemp] = React.useState('20')



    return( 

     // <View style = {{height: "100%", margin: 40}}>
      <Provider store ={store}>
      {//<Driver_OrderDetails/>
      //<Maps_Re/>
      //<Pick_up/>
      //<DropOff/>
      //<DriversCustomer_List/>
      //<DriverEdit_Profile/>

      // <Driver_First/>
      //<Split_page/>
       <Route/>
      }
      </Provider>

      //</View>

      

  
            
          );
        }
              
       
  

        
/*<Maps_control/>
        
        <Provider store ={store}>
            <NavigationContainer>
                <AuthScreen> 
                   <text>placeholder</text>
                </AuthScreen>
            </NavigationContainer>
        </Provider>
          <View style={{flex: 1}}>
               
            
            <AuthScreen/>
            </View>
        */

        
    //);
    

//}

/*

import * as React from 'react';
import MapView, { Callout, PROVIDER_GOOGLE } from 'react-native-maps';
// import { Permissions } from "expo"; kita gk pakek soalnya useEffect nya beda sama sebelumnya
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapViewDirections from 'react-native-maps-directions';
import { getDistance } from "geolib";

export default function App () {
  
  const [searchLoc, setSearchLoc] = React.useState({latitude: 25.0170, longitude: 121.4628, latitudeDelta: 0.0922, longitudeDelta: 0.0421})
  const [searchDes, setSearchDes] = React.useState({latitude: 24.8138, longitude: 120.9675, latitudeDelta: 0.0922, longitudeDelta: 0.0421})
  const [userPos, setUserPos] = React.useState({lat: null, long: null})
  const calculateDistance = getDistance(searchLoc, searchDes)
  console.log("Distance:", calculateDistance)

  React.useEffect(() => {
    Location.installWebGeolocationPolyfill()
      navigator.geolocation.getCurrentPosition((pos) =>{
          //console.log(pos.coords.latitude + " " + pos.coords.longitude) // display VALUE
          const newUserPos = { 
                lat: pos.coords.latitude,
                long: pos.coords.longitude,
           };
          setUserPos(newUserPos) // store data in usestate
          //console.log(newUserPos) // Display your values
     });
    }
  );
ff
      return (
        <View style={{ marginTop: 0, flex: 1}}>
          <GooglePlacesAutocomplete
            placeholder="Pick Up"
            fetchDetails={true}
            GooglePlacesSearchQuery={{
              rankby: "distance"
            }}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details)
              setSearchLoc({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              })
            }}
            query={{
              key: "AIzaSyCfTyHPV_ZFkfogI2IXsFhMefmdZ4WSjms",
              language: "en",
              components: "country:tw",
              //types: "establishment",
              //radius: 30000,
              location: `${setSearchLoc.latitude}, ${setSearchLoc.longitude}`
            }}

            styles={{
              textInputContainer: {
                backgroundColor: '#F4ECE7',
              },
              textInput: {
                  color: '#5d5d5d',
                  fontSize: 16,
                  backgroundColor:'#F4ECE7',
                  alignItems: 'center',
                  padding: 20,
                  height: 60, 
                  width: 345,
                  borderWidth: 2,
                  flexDirection: 'row', 
                 
                  borderRadius:10,
                  marginTop: 30,
                  elevation:2,
                  justifyContent: 'center',
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
            />

          <GooglePlacesAutocomplete
            placeholder="Drop Off"
            fetchDetails={true}
            GooglePlacesSearchQuery={{
              rankby: "distance"
            }}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details)
              setSearchDes({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              })
            }}
            query={{
              key: "AIzaSyCfTyHPV_ZFkfogI2IXsFhMefmdZ4WSjms",
              language: "en",
              components: "country:tw",
              //types: "establishment",
              //radius: 30000,
              location: `${setSearchDes.latitude}, ${setSearchDes.longitude}`
            }}

            styles={{
              textInputContainer: {
                backgroundColor: '#F4ECE7',
              },
              textInput: {
                  color: '#5d5d5d',
                  fontSize: 16,
                  backgroundColor:'#F4ECE7',
                  alignItems: 'center',
                  padding: 20,
                  height: 60, 
                  width: 345,
                  borderWidth: 2,
                  flexDirection: 'row', 
                 
                  borderRadius:10,
                  marginTop: 30,
                  elevation:2,
                  justifyContent: 'center',
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
            />
            


          <MapView
            provider={PROVIDER_GOOGLE}
            //showsTraffic={true}
            showsUserLocation={true}
            showsMyLocationButton={true}
              style={{flex: 1, width: Dimensions.get("window").width, height: Dimensions.get("window").height}} 
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
              }}
              pinColor="red"
            >
              <Callout>
                <Text>
                  PICK UP
                </Text>
              </Callout>
            </Marker>


            <Marker
              coordinate={{
                latitude: searchDes.latitude,
                longitude: searchDes.longitude
              }}
              pinColor="red"
            >
              <Callout>
                <Text>
                  DROP OFF
                </Text>
              </Callout>
            </Marker>

          <MapViewDirections
            lineDashPattern={[0]}
            origin={searchLoc}
            destination={searchDes}
            apikey={"AIzaSyCfTyHPV_ZFkfogI2IXsFhMefmdZ4WSjms"}
            strokeWidth={5}
            strokeColor="orange"
          />

          </MapView>

          

        </View>

    
      
      );
    }
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

*/