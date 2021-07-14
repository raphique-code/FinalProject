
import {TouchableOpacity, Text, View} from 'react-native'
import React from 'react';
import {ButtonsBlack} from './styles';


const ButtBlack = (props) =>{
    return(
        <>
            <View style={ButtonsBlack.container}> 
                <TouchableOpacity style ={ButtonsBlack.button}>
                    <Text style= {ButtonsBlack.buttonText}> {props.title} </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default ButtBlack;