//driver's starting page after logging in 


import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SliderPicker } from 'react-native-slider-picker';
import { styles } from './styles';
import { signOutUser } from '../../../redux/actions';
import { Feather } from '@expo/vector-icons';
import firebase from 'firebase';

if(firebase.apps.length == 0){
    firebase.initializeApp(Constants.manifest.web.config.firebase)
    }
  

export default function Driver_First({setSignOut,setDriver_first, setDriverCustomer_list, setDriverEdit_Profile}) {
    
    const [state, setState] = React.useState({value: 1})
    const ref =  firebase.firestore().collection("driverProfile").doc('driver1');

    const [name, setName] = React.useState('');
    const [license, setLicense] = React.useState('');
    const [vtype, setVtype] = React.useState('');
    const [vcolor, setVcolor] = React.useState('');
    
    function getOrder() {//membaca function 1 doc dalam user1, trus push semua data ke array yg namanya items,
        //to read the object, use querysnapshot.get('object name in firebase (e.g DriverName)')
         ref.onSnapshot((querySnapshot) => {
            setName(querySnapshot.get('name'));
            setLicense(querySnapshot.get('license'));
            setVtype(querySnapshot.get('vtype'));
            setVcolor(querySnapshot.get('vcolor'));
             console.log(name)
   
         });
     }
   
   
     React.useEffect(() => {
         getOrder();
     }, []);
     

    return( 
  
        <View style={styles.container}>

        <View style={styles.header}>
                    <TouchableOpacity style={{marginTop: 1}} onPress={() => {setSignOut(true); setDriver_first(false)}}>
                        <Feather
                            name="log-out" // panah
                            color="black"
                            size={30}
                            style= {{paddingTop: 20, paddingBottom:10, paddingRight: 80, paddingLeft: 5}}
                            
                        />
                    </TouchableOpacity>
                   
                </View>
            <View  style={styles.container_SB}>
                <View style={styles.containerTop}>
                
                    <FontAwesome
                        name="user-circle-o" // driver icon + edit profile button
                        color="black"
                        size={100}
                        style= {{paddingTop: 5, paddingBottom: 15, paddingLeft: 70, paddingRight: 15, width: 235}}
                    />
                    
                    <TouchableOpacity style={styles.confirm}
                    
                    onPress={() => {setDriver_first(false); setDriverEdit_Profile(true)}}
                    >
                        <Text style={styles.edit}>EDIT PROFILE</Text> 
                    </TouchableOpacity>
                </View>
           

                <View style={styles.containerMiddle}>
                    <Text style={styles.subText2}>Display Name</Text>
                    <Text style={styles.subText} >{name}</Text>

                    <Text style={styles.subText2}>License Plate</Text>
                    <Text style={styles.subText} >{license}</Text>

                    <Text style={styles.subText2}>Vehicle Type</Text>
                    <Text style={styles.subText} >{vtype}</Text>

                    <Text style={styles.subText2}>Vehicle Color</Text>
                    <Text style={styles.subText} >{vcolor}</Text>
                </View>


                <View style={styles.containerBottom}>
                <Text style={styles.radius} >SEARCH RADIUS</Text>
                <SliderPicker 
                    minLabel={'1 km'}
                    midLabel={'10 km'}
                    maxLabel={'20 km'}
                    maxValue={20}
                    callback={position => {setState({ value: position });}}
                    defaultValue={state.value}
                    labelFontColor={"#6c7682"}
                    labelFontSize={20}
                    showFill={true}
                    fillColor={'#F0843C'}
                    showNumberScale={false}
                    showSeparatorScale={false}
                    buttonBackgroundColor={'#fff'}
                    buttonBorderColor={'grey'}
                    buttonBorderWidth={1}
                    buttonDimensionsPercentage={6}
                    heightPercentage={1}
                    widthPercentage={80}
                />



                    <TouchableOpacity style={styles.start}
                    onPress={() => {setDriver_first(false);  setDriverCustomer_list(true)} }>
                        <Text style={styles.edit2}>START</Text> 
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        

)};


