
import {TouchableOpacity, Text, View} from 'react-native'
import React from 'react';
import {Buttons} from './styles';

const Butt = (props) =>{
    return(
        <>
            <View style={Buttons.container}> 
                <TouchableOpacity style ={Buttons.button}>
                    <Text style= {Buttons.buttonText}> {props.title} </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Butt;