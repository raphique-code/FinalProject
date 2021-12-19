
//page for drivers to see and pick the available customers

import React from 'react';

import MapView, { Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';

import { ActivityIndicator, TouchableOpacity } from 'react-native';

import { StyleSheet, Text, View, Dimensions } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { styles } from './styles';

import firebase from 'firebase';

if(firebase.apps.length == 0){
  firebase.initializeApp(Constants.manifest.web.config.firebase)
  }
const PickUp= "3";
const DropOff = "6";
const ServiceFee = "300"

export default function DriversCustomer_List({ setDriver_first, setDriverEdit_Profile, setDriverCustomer_list, setDriver_OrderDetails }) {
  
  const basePrice = 10;
  const ref1 =  firebase.firestore().collection("order").doc('order1');
  const [pickUpLatLang, setPickUpLatLang] = React.useState('');
  const [dropOffLatLang, setDropOffLatLang] = React.useState('');
  const[boxPrice, setBoxPrice]= React.useState(0)
  const[temp, setTemp] = React.useState(0);
  const rate = (basePrice * temp);
  const [startOrder,setStartOrder] = React.useState(false)
  //const [acceptOrder, setAcceptOrder]= React.useState(false)

  function getOrder() {  
    ref1.onSnapshot((querySnapshot) => {
      setPickUpLatLang(querySnapshot.get('pickUpLatLang'));
      setDropOffLatLang(querySnapshot.get('DropOffLatLang'));
      setBoxPrice(querySnapshot.get('BoxPrice'))
      setStartOrder(querySnapshot.get('StartOrder'))

      console.log("order summary")
      console.log(startOrder)
   });

   }



   React.useEffect(() => {
    getOrder();
    }, []);
  


  return( 
  
        <View style={styles.container}>
           <MapViewDirections
            lineDashPattern={[0]}
            origin={pickUpLatLang}
            destination={dropOffLatLang}
            apikey={"AIzaSyCfTyHPV_ZFkfogI2IXsFhMefmdZ4WSjms"}
            strokeWidth={5}
            strokeColor= 'orange'  //"mediumseagreen"
            mode='DRIVING'

            onReady={result => {
              //console.log(`Distance: ${result.distance} km`)
              //console.log(`Duration: ${result.duration} min.`)
              setTemp(Math.ceil(result.distance))

              //setDuration_temp(Math.ceil(result.duration))

            }}

            onError={(errorMessage) => {
               console.log('GOT AN ERROR');
            }}
          />
          <View style={styles.header}>
              <TouchableOpacity onPress={() => {setDriver_first(true); setDriverCustomer_list(false)}} >
                  <AntDesign 
                      name="arrowleft" // panah
                      color="black"
                      size={30}
                      style= {{paddingTop: 10, paddingBottom: 20, paddingRight: 100, paddingLeft: 20}}
                  />
              </TouchableOpacity>
            <Text style={[styles.subText, {marginTop: 10}]}>Customer List</Text>
          </View>

           <View  style={styles.container_SB}>

             { startOrder?
              <TouchableOpacity style={styles.confirm}  onPress= {() => {setDriver_OrderDetails (true); setDriverCustomer_list(false)}}>
                <AntDesign 
                        name="user" // logo user
                        color="black"
                        size={60}
                        style= {{paddingTop: 40, paddingBottom: 15, paddingLeft: 15, paddingRight: 5,
                                    width: 75}}
                />
                <View>
                 

                    <Text style={styles.subText2}> Pick Up &ensp;

                    <AntDesign 
                    name="arrowright" // panah
                    color="black"
                    size={15}
                    style= {{paddingBottom: 25}}
                    />
                    &ensp; Drop Off</Text>

                    <Text style={styles.insubText}> {temp} km</Text>


                    <Text style={styles.subText2}> Service Fee</Text>
                    <Text style={styles.insubText}> NTD {rate}</Text>
                </View>
              </TouchableOpacity>          
              :
              console.log('order not available')
            }

        
              <TouchableOpacity style={styles.confirm}  onPress= {() => {setDriver_OrderDetails (true); setDriverCustomer_list(false)}}>
                <AntDesign 
                        name="user" // logo user
                        color="black"
                        size={60}
                        style= {{paddingTop: 40, paddingBottom: 15, paddingLeft: 15, paddingRight: 5,
                                    width: 75}}
                />
                <View>
                    

                    <Text style={styles.subText2}> Pick Up &ensp;
                    <AntDesign 
                    name="arrowright" // panah
                    color="black"
                    size={15}
                    style= {{paddingBottom: 25}}
                    />
                    &ensp; Drop Off</Text>
                    <Text style={styles.insubText}> {DropOff} km</Text>


                    <Text style={styles.subText2}> Service Fee</Text>
                    <Text style={styles.insubText}> NTD {ServiceFee}</Text>
                </View>
              </TouchableOpacity>          
          </View> 
       </View>
)};

