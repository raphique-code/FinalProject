//driver's screen where thay have the button to go to google maps as well as see the customer's addres


import MapView, { Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View,  Clipboard, ToastAndroid,Modal, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Divider } from 'react-native-elements';
import { Fontisto, Ionicons } from '@expo/vector-icons';
import {OpenMapDirections} from 'react-native-navigation-directions';
//import firebase from "../../navigation/package_details/firebase";
import firebase from 'firebase';
import { styles } from './styles';
import { useState } from 'react';
import openMap from 'react-native-open-maps';

if(firebase.apps.length == 0){
  firebase.initializeApp(Constants.manifest.web.config.firebase)
  }

//in node modules folder, open react-native-navigation-direction index.js, in line 43, add  || _transportType === 'm'
// line 47, return 'm'

export default function Driver_OrderDetails({ setDriver_first, setDriverEdit_Profile, setDriverCustomer_list, setDriver_OrderDetails }) {

  
  
  const [pickUp, setPickUp] = React.useState('');
  const [dropOff, setDropOff] = React.useState('');
  const [pickUpLatLang, setPickUpLatLang] = React.useState('')
  const [dropOffLatLang, setDropOffLatLang] = React.useState('')
  const [conDropOff, setConDropOff] = React.useState(false)
  const [conPickUp, setConPickUp] = React.useState(false)
  const [OTWDropOff, setOTWDropOff] = React.useState(false)
  const [OTWPickUp, setOTWPickUp] = React.useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const[temp, setTemp] = React.useState('');
  const[temp2, setTemp2] = React.useState('');
  const [acceptOrder, setAcceptOrder]= React.useState(true)



  
  //copy address

  const copyToClipboard = () => {
    Clipboard.setString(pickUp)
    
  }
  const copyToClipboard2 = () => {
    Clipboard.setString(dropOff)
  }

  //copy notif

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Copied to Clipboard",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  // read code
  const ref =  firebase.firestore().collection("order").doc('order1');
  const ref2 =  firebase.firestore().collection("order");

  let data ={

   ConfirmDropOff: conDropOff,
   ConfirmPickOff: conPickUp,
   OtwPickUp:  OTWPickUp,
   OtwDropOff:   OTWDropOff,
   AcceptOrder: acceptOrder

  }

  function writeDoc () {
    ref2.doc('order1').update(data);
  }


  function getOrder() {//membaca function 1 doc dalam user1, trus push semua data ke array yg namanya items,
     //to read the object, use querysnapshot.get('object name in firebase (e.g DriverName)')
      ref.onSnapshot((querySnapshot) => {
          setPickUp(querySnapshot.get('PickUpAddrDetails'));
          setDropOff(querySnapshot.get('DropOffAddrDetails'));
          setPickUpLatLang(querySnapshot.get('pickUpLatLang'));
          setDropOffLatLang(querySnapshot.get('DropOffLatLang'));
          setConDropOff(querySnapshot.get('ConfirmDropOff'));
          console.log("conDropOff")
          console.log(conDropOff)
          console.log("OTWPickUp")
          console.log(OTWPickUp)
          console.log("OTWDropOff")
          console.log(OTWDropOff)
          console.log("pick up")
          console.log(pickUp)
          console.log(" drop off")
          console.log(dropOff)


      });
  }


  React.useEffect(() => {
      getOrder();
  }, []);
  
  const _callPickUp = () => {
    const startPoint = {
      longitude: null,
      latitude: null
    } 
  
    const endPoint = {
      longitude: pickUpLatLang.longitude,
      latitude: pickUpLatLang.latitude
    }


  const transportPlan = 'm';

  OpenMapDirections(startPoint, endPoint, transportPlan).then(res => {
    console.log(res)
  });
}  
  
  
  
  const _callDropOff = () => {
      const startPoint = {
        longitude: pickUpLatLang.longitude,
        latitude: pickUpLatLang.latitude
      } 
    
      const endPoint = {
        longitude: dropOffLatLang.longitude,
        latitude: dropOffLatLang.latitude
      }

  
    const transportPlan = 'm';
  
    OpenMapDirections(startPoint, endPoint, transportPlan).then(res => {
      console.log("res")
      console.log(res)
    });
  }

    return( 
  
        <View style={styles.container}>
          
          <MapView
            provider={PROVIDER_GOOGLE}
          >
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
              setTemp2(Math.ceil(result.distance))


              //setDuration_temp(Math.ceil(result.duration))

            }}

            onError={(errorMessage) => {
               console.log('GOT AN ERROR');
            }}
          />

          </MapView>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => {setDriverCustomer_list(true);  setDriver_OrderDetails(false)}}>
                  <AntDesign 
                      name="arrowleft" // panah
                      color="black"
                      size={30}
                      style= {{paddingTop: 10, paddingBottom: 20, paddingRight: 58, paddingLeft: 20}}
                  />
              </TouchableOpacity>
              <Text style={[styles.orderDetails, {marginTop: 6}]}> Order Details </Text>
            </View>


            <View style={styles.container_SB}>
                <View style={styles.containerMiddle}>
                    
                    <View style={styles.containerLeft}>
                        <Text style={styles.subText2}>Pick Up</Text>
                        <Text numberOfLines={1} style={styles.subText} >{pickUp}</Text>
                        
                        <Divider orientation="vertical" width={50} />

                        <Text style={styles.subText2}>Drop Off</Text>
                        <Text numberOfLines={1} style={styles.subText} >{dropOff}</Text>
                    </View>


                    <View style={styles.containerRight}>
                        <TouchableOpacity onPress={() => {copyToClipboard(); showToastWithGravityAndOffset()}}>
                            <Feather
                                name="copy" // copy pick UP
                                color="black"
                                size={20}
                                style= {{paddingTop: 38, paddingBottom: 0, paddingRight: 0, paddingLeft: 0}}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {copyToClipboard2(); showToastWithGravityAndOffset()}}>
                            <Feather
                                name="copy" // copy DROP OFF
                                color="black"
                                size={20}
                                style= {{paddingTop: 52, paddingBottom: 0, paddingRight: 0, paddingLeft: 0}}
                            />
                        </TouchableOpacity>
                    </View>   
                </View>
            
               {//} <TouchableOpacity  onPress={()=> _goToYosemite()}  style = {{height: "48%", marginBottom: 0}}>
}
                  
                <View style={styles.mapContainer}>
                  <MapView
                    provider={PROVIDER_GOOGLE}
                    //showsTraffic={true}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                      style={{flex: 1}} 
                      Region={{
                        latitude: 25.0199,
                        longitude: 121.3656,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                      }}
                  >

                  
                    <Marker
                      coordinate={{
                        latitude: 25.0170, // pick up loc
                        longitude: 121.4628
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
                        latitude: 24.9936, // drop off loc
                        longitude: 121.3010
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
                    origin={{latitude: 25.0170, longitude: 121.4628}}
                    destination={{latitude: 24.9936, longitude: 121.3010}}
                    apikey={"AIzaSyCfTyHPV_ZFkfogI2IXsFhMefmdZ4WSjms"}
                    strokeWidth={5}
                    strokeColor="black"
                  />

                  </MapView>
                </View>
            {//}    </TouchableOpacity>
}

                <View style={styles.containerBottom}>
                  <View style={styles.conatinerLeft2}>
                    <Fontisto
                      name="map-marker-alt" // panah
                      color="black"
                      size={20}
                      //style= {{paddingTop: , paddingBottom: 20, paddingRight: 58, paddingLeft: 20}}
                    />
                    <Text style={styles.kmMin}> {temp2} km </Text>
                  </View>


                  <View style={styles.conatinerRight2}>
                    <Ionicons
                      name="timer-outline" // panah
                      color="black"
                      size={20}
                      //style= {{paddingTop: , paddingBottom: 20, paddingRight: 58, paddingLeft: 20}}
                    /> 
                    <Text style={styles.kmMin}> {temp} min</Text>
                  </View>
                  
  
                </View>
                


              
              

                <View style={{flexDirection: 'row'}}>
                  {//<View style={styles.bottomButtonShortLeft}>
}
                       <Modal
                          animationType="slide"
                          transparent={true}
                          visible={modalVisible}
                          onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                          }}
                        >
                          <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                              <Text style={styles.modalText}>Opening google maps!</Text>
                              <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {setModalVisible(!modalVisible);_callPickUp();writeDoc();}}
                              >
                                <Text style={styles.buttonText}>Confirm</Text>
                              </Pressable>
                            </View>
                          </View>
                        </Modal>

                        <Modal
                          animationType="slide"
                          transparent={true}
                          visible={modalVisible1}
                          onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible1);
                          }}
                        >
                          <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                              <Text style={styles.modalText}>Opening google maps!</Text>
                              <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {setModalVisible1(!modalVisible1);_callDropOff();writeDoc();}}
                              >
                                <Text style={styles.buttonText}>Confirm</Text>
                              </Pressable>
                            </View>
                          </View>
                        </Modal>

                    <TouchableOpacity onPress={() => {setOTWPickUp(true); setOTWDropOff(false); writeDoc(); setModalVisible(true)}} style={styles.bottomButtonShortLeft}> 
                      <Text style={styles.buttonText}>Pick Up</Text>
                    </TouchableOpacity>
                 {//} </View>
}
                  
                  {//<View style={styles.bottomButtonShortRight}>
}
                    <TouchableOpacity onPress={() => {  setOTWDropOff(true); setOTWPickUp(false); writeDoc();  setModalVisible1(true)}} style={styles.bottomButtonShortRight}>
                    <Text style={styles.buttonText}>Drop Off</Text>
                    </TouchableOpacity>
                 {// </View>
}
                </View>
                

                <View>
                  <Pressable onPressOut={()=> {setConDropOff(true);setOTWDropOff(false);  setOTWPickUp(false); setDriver_first(true);  setDriver_OrderDetails(false); writeDoc();}} 
                                onPressIn={() => {setConDropOff(true);setOTWDropOff(false);  setOTWPickUp(false); writeDoc();}} style={styles.containerFinish}>
                    <Text style={styles.buttonText}>Complete Order</Text>
                  </Pressable>
                </View>
            </View>
        </View>
        

)};





