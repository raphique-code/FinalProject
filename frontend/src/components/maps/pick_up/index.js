//customer input pickup address and details in this screen 

import * as React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView  } from 'react-native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler';
//import styles from '../../../screens/auth/styles';
//import firebase from "../../navigation/package_details/firebase"
import firebase from 'firebase';
import styles from "./styles"
if(firebase.apps.length == 0){
  firebase.initializeApp(Constants.manifest.web.config.firebase)
  }

export default function Pick_Up({setPick_up,setDrop_off,setMaps_nav}) {

  const ref2 =  firebase.firestore().collection("order");
const [searchLoc, setSearchLoc] = React.useState({latitude: 25.0170, longitude: 121.4628, searchDetails: " "})
  
const homePlace = {
    description: 'Home',
    geometry: { location: { lat: searchLoc.latitude, lng: searchLoc.longitude } },
  };
  
const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };
//enablePoweredByContainer: false, to disble powered by google in the module folder, google places auto complete.js

const [rname, onChangeRname] = React.useState(null);
const [addrinfo, onChangeAddrinfo] = React.useState(null);
const [housenumber, onChangeHousenumber] = React.useState(null);
const [phonenumber, onChangePhonenumber] = React.useState(null);

const ref = React.useRef();
function clear(){ ref.current?.setAddressText('');}

let data ={

  PickUpName:rname,
  PickUpPhoneNumber:phonenumber,
  pickUpLatLang: new firebase.firestore.GeoPoint (searchLoc.latitude, searchLoc.longitude),
  PickUpAddrDetails: searchLoc.searchDetails,
  PickUpHouseNum:housenumber,
  PickUpAdditionalInfo:addrinfo

}

function writeDoc () {
  ref2.doc('order1').update(data);
}

    return( 
  
            <KeyboardAvoidingView style={styles.container}>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => {{setPick_up(false);setMaps_nav(true)}}}>
                  <AntDesign 
                      name="arrowleft" // panah
                      color="black"
                      size={30}
                      style= {{paddingTop: 10, paddingBottom: 20, paddingRight: 120, paddingLeft: 10}}
                  />
                </TouchableOpacity>
                <Text style={[styles.subText, {marginTop: 6}]}>Pick Up</Text>
              </View>



              <View style={styles.containerAddr}>
                <Text style={styles.subText2}>Sender Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeRname}
                    value={rname}
                    placeholder='e.g Juan'
                />

                <Text style={styles.subText2}>Additional Address Information</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeAddrinfo}
                    value={addrinfo}
                    placeholder='e.g Next to 7-11'
                />


              <View style={styles.inputAddr}>
                <View style={styles.conLeft}>
                  <Text style={styles.subText2}>House No.</Text>
                  <TextInput
                    style={styles.input2}
                    onChangeText={onChangeHousenumber}
                    value={housenumber}
                    keyboardType="numeric"
                    placeholder='e.g 666'
                />
                </View>
                

                <View style={styles.conRight}>
                  <Text style={styles.subText2}>Phone No.</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangePhonenumber}
                    value={phonenumber}
                    keyboardType="numeric"
                    placeholder='e.g 09xxxxx0989'
                />
                </View>

                </View>
              </View>




               <View  style={styles.container_SB}>
               <Text style={styles.subText3}>Address</Text>
                    <GooglePlacesAutocomplete placeholder="Pick Up Address" fetchDetails={true} GooglePlacesSearchQuery={{rankby: "distance"}}
                    
                      onPress={(data, details = null) => {console.log(data, details)
                        setSearchLoc({
                          latitude: details.geometry.location.lat,
                          longitude: details.geometry.location.lng,
                          searchDetails:details.formatted_address,
                        }) 
                        //console.log( searchDetails);
                      }}
                        
                      query={{
                        key: "AIzaSyCfTyHPV_ZFkfogI2IXsFhMefmdZ4WSjms",
                        language: "en",
                        components: "country:tw",
                        location: `${setSearchLoc.latitude}, ${setSearchLoc.longitude}`
                      
                            }}
                      //listViewDisplayed= "auto"
                      predefinedPlaces={[homePlace, workPlace]}
                      renderRightButton={() => (	
                      <TouchableOpacity onPress={clear}>
                        <AntDesign 
                        name="close"
                        color="black"
                        size={30}
                        style= {{ width: 38, height: 30, marginTop:9}}
                        />
                      </TouchableOpacity> 
                      )}
                   
                            
                      styles={{
                        textInput: {backgroundColor: '#F4ECE7', marginBottom: 0},

                        textInputContainer: {
                        borderWidth: 1,
                        borderRadius: 3,
                        borderColor: "black",
                        position: 'absolute'},
                      
                        row: {backgroundColor: '#F4ECE7'},
                        
                        listView: {
                        position: 'absolute',
                        marginTop: 55,
                        zIndex: 10},

                        separator:{
                        borderWidth: 0.5,
                        borderColor: '#F4ECE7'},
                        }}
                            
                      />
                
                    <TouchableOpacity
                        onPress = {() => writeDoc()}
                        style={[styles.confirm, {
                            borderColor: '#F0843C',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>Confirm</Text>
                    </TouchableOpacity>
                
              </View> 
           </KeyboardAvoidingView>
    )};





