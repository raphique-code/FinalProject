


import * as Location from 'expo-location';
import { Marker } from "react-native-maps";
import MapView, { Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { getDistance } from "geolib";
import firebase from '../../navigation/package_details/firebase'
import { useState } from 'react';
import React from 'react';
import { ActivityIndicator, TouchableOpacity, Modal, Pressable  } from 'react-native';
import { StyleSheet, Text, View, Picker, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
//import { SliderPicker } from 'react-native-slider-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Divider } from 'react-native-elements';
import { Fontisto, Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function OrderSummary({setMaps_nav, setOrder_summary,setOrderProgress}) {

    const [selectedValue, setSelectedValue] = React.useState("Payment Option");
    const basePrice = 10;
    //const [distance, setDistance] = React.useState(8);
    //const rate = (basePrice * temp);
    //const box = 60;
    
    const[boxSize, setBoxSize]= React.useState(0)
    const[boxPrice, setBoxPrice]= React.useState(0)
    const [pickUpLatLang, setPickUpLatLang] = React.useState('');
    const [dropOffLatLang, setDropOffLatLang] = React.useState('');
    const[temp, setTemp] = React.useState(0);
    const rate = (basePrice * temp);
    const total = (rate + boxPrice);
    const [startOrder, setStartOrder] = React.useState(false);
    const [modalVisible, setModalVisible] = useState(false);

   
    const ref1 =  firebase.firestore().collection("order").doc('order1');
      //to read the object, use querysnapshot.get('object name in firebase (e.g DriverName)')

    function getOrder() {  
     ref1.onSnapshot((querySnapshot) => {
       setPickUpLatLang(querySnapshot.get('pickUpLatLang'));
       setDropOffLatLang(querySnapshot.get('DropOffLatLang'));
       setStartOrder(querySnapshot.get('StartOrder'));
       setBoxPrice(querySnapshot.get('BoxPrice'))

       console.log("order summary")
      // console.log(pickUpLatLang)
    });

    }

    
let data = {
  StartOrder: startOrder,


}
    React.useEffect(() => {
        getOrder();
    }, []);

    function writeDoc () {
      ref1.update(data);
      console.log(data)
    }


    return( 
  
        <View style={styles.container}>
          
            <View style={styles.header}>
              <TouchableOpacity style={{marginTop: 10, marginLeft: 15}}  onPress={() =>{setOrder_summary(false); setMaps_nav(true)}}>
                  <AntDesign 
                      name="arrowleft" // panah
                      color="black"
                      size={30}
                  />
              </TouchableOpacity>
            <Text style={[styles.orderDetails, {marginTop: 6}]}>Order Summary</Text>

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

              //setDuration_temp(Math.ceil(result.duration))

            }}

            onError={(errorMessage) => {
               console.log('GOT AN ERROR');
            }}
          />

          </MapView>
          </View>


            <View style={styles.container_SB}>

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
                              <Text style={styles.modalText}>Confirm order!</Text>
                              <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {setModalVisible(!modalVisible);writeDoc();setStartOrder(true);setOrderProgress(true); setOrder_summary(false);writeDoc();}}
                              >
                                <Text style={styles.buttonText}>   Okay   </Text>
                              </Pressable>
                            </View>
                          </View>
                        </Modal>

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
                        <Text numberOfLines={1} style={styles.subText} >{temp}Km</Text>
                        <Divider orientation="vertical" width={50} style={{marginTop: 9.5}}/>
                        <Text numberOfLines={1} style={[styles.subText, {fontWeight: 'bold'}]} >NTD {rate}</Text>
                        <Text numberOfLines={1} style={styles.subText} >NTD {boxPrice}</Text>
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


                <View style= {{height: '58%', justifyContent: 'flex-end', marginBottom: 20}}>
                  <TouchableOpacity style={styles.containerFinish} onPress={() => {setStartOrder(true); writeDoc();  setModalVisible(true); }}>
                    <Text style={styles.buttonText}>Order Driver</Text> 
                  </TouchableOpacity>
                </View>


            </View>





            
        </View>
)};

