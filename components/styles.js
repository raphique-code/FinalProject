import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {view} from 'react-native';
import constants from 'expo-constants';
import styled from 'styled-components/native';

const statusBarHeight = constants.statusBarHeight;
// colors
export const Colors= {
  primary: '#DA7737',
  background: '#1A130E',
  offWhite: '#F4ECE7',
  darklight: '#9ca3af',

};

const {primary,background,offWhite,darklight} = Colors;




export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${statusBarHeight + 10}px;
  background-color: ${background};
`

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-item: center;
  

`;

export const PageLogo = styled.Image`
  width: 200px;
  height: 200px;
  postion: absolute;
  align-item: center;
  

`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${primary};
  padding: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${primary}
`;

export const StyledFormArea = styled.View`
  width: 90%;

`;

export const StyledTextInput = styled.TextInput`
  background-color: ${offWhite};
  padding: 15px;
  padding-left: 55px;
  border-radius: 5px;
  font-size: 16;
  height: 65;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${background};

`;
 
export const StyledInputLabel = styled.Text`
  color: ${primary};
  font-size: 13px;
  text-align: left;

`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 68px;
  postion: absolute;
  z-index: 1;

`;
export const RightIcon = styled.TouchableOpacity`
  left: 15px;
  top: 38px;
  postion: absolute;
  z-index: 1;

`;

export const Buttons = StyleSheet.create({
    container:{
      pading:15
    },
    button:{
      flexDirection: 'row', 
      height: 50, 
      borderRadius:10,
      marginTop: 30,
      width: 150, 
      elevation:2,
      padding:10,
      backgroundColor: '#DA7737',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText:{
      color: '#F4ECE7'
    }

});

export const ButtonContainers = StyleSheet.create(
  {
      container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'

      },
  }
);