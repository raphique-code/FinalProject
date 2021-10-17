//driver's starting page after logging in 


import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SliderPicker } from 'react-native-slider-picker';
import { styles } from './styles';

export default function Driver_First({setDriver_first, setDriverCustomer_list, setDriverEdit_Profile}) {
    
    const [state, setState] = React.useState({value: 1})

    return( 
  
        <View style={styles.container}>
            <View  style={styles.container_SB}>
                <View style={styles.containerTop}>
                    <FontAwesome
                        name="user-circle-o" // driver icon + edit profile button
                        color="black"
                        size={100}
                        style= {{paddingTop: 40, paddingBottom: 15, paddingLeft: 70, paddingRight: 15, width: 235}}
                    />
                    
                    <TouchableOpacity style={styles.confirm}
                    
                    onPress={() => {setDriver_first(false); setDriverEdit_Profile(true)}}
                    >
                        <Text style={styles.edit}>EDIT PROFILE</Text> 
                    </TouchableOpacity>
                </View>
           

                <View style={styles.containerMiddle}>
                    <Text style={styles.subText2}>Display Name</Text>
                    <Text style={styles.subText} >Juan</Text>

                    <Text style={styles.subText2}>License Plate</Text>
                    <Text style={styles.subText} >12345</Text>

                    <Text style={styles.subText2}>Vehicle Type</Text>
                    <Text style={styles.subText} >TOYOTA KIJANG</Text>

                    <Text style={styles.subText2}>Vehicle Color</Text>
                    <Text style={styles.subText} >PINK</Text>
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


