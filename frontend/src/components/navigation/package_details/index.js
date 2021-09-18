import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
//import Octicons from 'react-native-vector-icons/Octicons';
import Octicons from "react-native-vector-icons"

import firebase from "./firebase"
import { Feather } from '@expo/vector-icons';
import styles from "./styles"

export default function PackageDetails( setPackage_detail, setHome) {
  const ref2 =  firebase.firestore().collection("order");
  const[boxSize, setBoxSize]= React.useState(null)
  const[boxPrice, setBoxPrice]= React.useState(null)

  let data = {
    BoxSize: boxSize,
    BoxPrice: boxPrice,
  }
  
  function writeDoc () {
    ref2.doc('order1').update(data);
  }

return( 
  
        <View style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity  onPress={() => setPackage_detail(false)} >
                  <Feather
                      name="log-out" // panah
                      color="black"
                      size={30}
                      style= {{paddingTop: 10, paddingBottom: 20, paddingRight: 80, paddingLeft: 20}}
                  />
              </TouchableOpacity>
            <Text style={[styles.subText, {marginTop: 10}]}> Package Details </Text>
          </View>

           <View  style={styles.container_SB}>
              <TouchableOpacity style={styles.confirm} onPress={() => {setBoxSize("Small Box"); writeDoc(); setBoxPrice(60)}}>
                <Octicons
                        name="package" // logo user
                        color="black"
                        size={30} //small Box
                        style= {{paddingTop: 55, paddingBottom: 25, paddingLeft: 35, paddingRight: 1, width: 90}}
                />
                <View style>
                    <Text style={styles.subText2}>Small Box </Text>
                    <Text style={[styles.insubText, {marginTop: 15, marginBottom: 12}]}>For catalogs, file folders, and CDs.{'\n'}Food and snacks are also suitable.</Text>
                    <Text style={styles.boxDimension}>Max. weight: 5 kg</Text>
                    <Text style={styles.boxDimension}>31.12 cm x 27.69 cm x 3.81 cm</Text>
                </View>
              </TouchableOpacity>



              <TouchableOpacity style={styles.confirm} onPress={() => {setBoxSize("Medium Box"); writeDoc();; setBoxPrice(75)}}>
                <Octicons
                        name="package" // logo user
                        color="black"
                        size={45} // medium Box
                        style= {{paddingTop: 55, paddingBottom: 25, paddingLeft: 28, paddingRight: 1, width: 90}}
                />
                <View style>
                    <Text style={styles.subText2}>Medium Box </Text>
                    <Text style={[styles.insubText, {marginTop: 15, marginBottom: 12}]}>For binders, books and heavy{'\n'}documents.</Text>
                    <Text style={styles.boxDimension}>Max. weight: 8 kg</Text>
                    <Text style={styles.boxDimension}>33.66 cm x 29.21 cm x 6.03 cm</Text>
                </View>
              </TouchableOpacity>


              <TouchableOpacity style={styles.confirm} onPress={() => {setBoxSize("Large Box"); writeDoc(); setBoxPrice(100)}}>
                <Octicons
                        name="package" // logo user
                        color="black"
                        size={60} // large Box
                        style= {{paddingTop: 55, paddingBottom: 25, paddingLeft: 25, paddingRight: 1, width: 90}}
                />
                <View style>
                    <Text style={styles.subText2}>Large Box </Text>
                    <Text style={[styles.insubText, {marginTop: 15, marginBottom: 12}]}>For side-by-side paper stacks, small{'\n'}parts and reports</Text>
                    <Text style={styles.boxDimension}>Max. weight: 12 kg</Text>
                    <Text style={styles.boxDimension}>45.40 cm x 31.43 cm x 7.62 cm</Text>
                </View>
              </TouchableOpacity>
              
              
              <TouchableOpacity style={styles.confirm} onPress={() => {setBoxSize("Extra Large Box"); writeDoc();setBoxPrice(130)}}>
                <Octicons
                        name="package" // logo user
                        color="black"
                        size={80} // extra large Box
                        style= {{paddingTop: 55, paddingBottom: 25, paddingLeft: 15, paddingRight: 1, width: 90}}
                />
                <View style>
                    <Text style={styles.subText2}>Extra Large Box </Text>
                    <Text style={[styles.insubText, {marginTop: 15, marginBottom: 12}]}>For heavy documents with a larger{'\n'}size. Clothes are also suitable</Text>
                    <Text style={styles.boxDimension}>Max. weight: 18 kg</Text>
                    <Text style={styles.boxDimension}>40.16 cm x 32.86 cm x 25.88 cm</Text>
                </View>
              </TouchableOpacity>
            
            
          </View> 
       </View>
)};

