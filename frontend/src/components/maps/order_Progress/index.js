
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firebase from '../../navigation/package_details/firebase';
import styles from './styles';

export default function OrderProgress({setOrder_summary,setOrderProgress}) {

    const ref =  firebase.firestore().collection("driverProfile").doc('driver1');
      
    const [estpickup, onChangeEstpickup] = React.useState("5");
    const [estdropoff, onChangeDropoff] = React.useState("7"); 
    const [dstatus, onChangeDstatus] = React.useState("Package has been droped off"); 
    const [dName, setDName] = React.useState('')
    const [lPlate, setLPlate] = React.useState('')
    const [vType, setVType] = React.useState('')
    const [vColor, setVColor] = React.useState('')
    const [conDropOff, setConDropOff] = React.useState(false)
    
  function getOrder() {//membaca function 1 doc dalam user1, trus push semua data ke array yg namanya items,
    //to read the object, use querysnapshot.get('object name in firebase (e.g DriverName)')
     ref.onSnapshot((querySnapshot) => {
         setDName(querySnapshot.get('name'));
         setLPlate(querySnapshot.get('license'));
         setVType(querySnapshot.get('vtype'));
         setVColor(querySnapshot.get('vcolor'));
        // setConDropOff(querySnapshot.get('ConfirmDropOff'));
         

      });
  }

  React.useEffect(() => {
      getOrder();
  }, []);

  const ref2 =  firebase.firestore().collection("order");

let data ={
    ConfirmDropOff: conDropOff
 }

     function writeDoc () {
        ref2.doc('order1').update(data);
      }

      /**  function writeDoc () {
    ref2.doc('order1').update(data);
  }
 */
  
    return( 
  
        <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => {setOrder_summary(true); setOrderProgress(false)}}>
                  <AntDesign 
                      name="arrowleft" // panah
                      color="black"
                      size={30}
                      style= {{paddingTop: 10, paddingBottom: 20, paddingRight: 58, paddingLeft: 20}}
                  />
              </TouchableOpacity>
              <Text style={[styles.orderDetails, {marginTop: 6}]}>Driver Details</Text>
            </View>
         


            <View  style={styles.container_SB}>

                <View style={styles.containerTop}>
                    <FontAwesome
                        name="user-circle-o" // driver icon + edit profile button
                        color="black"
                        size={100}
                        style= {{paddingTop: 40, paddingBottom: 15, paddingLeft: 70, paddingRight: 15, width: 235}}
                    />
                </View>
{/*
                <View style ={[styles.inner_container, {marginTop:15,width: "80%",marginLeft: 50, backgroundColor: "white"}]}>
                    
          
            conDropOff?
            

            null//{() => setConDropOff(false)};console.log(`${conDropOff}`) 
            
            :
            <View>

              <Text style={[styles.textSign, {
                            color: 'black'
                            ,marginLeft:50,
                            marginBottom: 10,
                            marginTop: 20
                        }]}>Confirm dropoff</Text>

            
              <TouchableOpacity
                        onPress={() => {setConDropOff(true)}}
                        style={[styles.confirm, {
                            borderColor: '#F0843C',
                            borderWidth: 1,width: "70%", height: "30%",marginLeft: 35,

                            //marginTop: 15
                            
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>Okey</Text>
                    </TouchableOpacity>

                   </View>
            
           // console.log(`${conDropOff}`)
            
                 

          </View>   */ }
                

                <View style={styles.containerMiddle}>
                    <View style={styles.containerLeft}>
                        <Text style={styles.subText2}>Display Name</Text>
                        <Text style={styles.subText} >{dName}</Text>

                        <Text style={styles.subText2}>License Plate</Text>
                        <Text style={styles.subText} >{lPlate}</Text>
                    </View>
                    
                    <View style={styles.containerRight}>
                        <Text style={styles.subText2}>Vehicle Type</Text>
                        <Text style={styles.subText} >{vType}</Text>

                        <Text style={styles.subText2}>Vehicle Color</Text>
                        <Text style={styles.subText} >{vColor}</Text>
                    </View>
                </View>


                <View style={styles.containerMiddle2}>
                    <View style={styles.containerStatus}>
                        <View style={styles.containerLeft}>
                            <Text style={styles.subText2}>Est. Time to Pick Up</Text>
                            <Text style={styles.subText} >{estpickup} min</Text>
                        </View>

                        <View style={styles.containerRight}>
                            <Text style={styles.subText2}>Est. Time to Drop Off</Text>
                            <Text style={styles.subText} >{estdropoff} min</Text>
                        </View>
                    </View>

                    <View style={[styles.containerStatus, {flexDirection: 'column'}]}>
                        <Text style={styles.subText2}>Delivery Status</Text>
                        <Text style={styles.subText} >{dstatus}</Text>
                    </View>
                
                </View>
                    
         


                <TouchableOpacity style={styles.start}>
                    <Text style={styles.buttonText}>Contact Driver</Text> 
                </TouchableOpacity>
            </View>
        </View>
        
        

)};