import {Formik} from 'formik';
import React from 'react';
import {Octicons} from 'react-native-vector-icons';
import { TouchableOpacity, Stylesheet, Text, View} from 'react-native'
import {Colors, Buttons} from './styles'

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    Subtitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel, 
    StyledTextInput,
    RightIcon,
    colors,
    Buttons
//the file is located in one level above the current folder
} from './styles';
import {View} from 'react-native';
const {primary,background,offWhite, darklight} = Colors;
const splitpage = () =>{
    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo resizeMode="cover"source={require('./assets/logoV-full.png')} />
                <PageTitle> split page
                </PageTitle>
                <Subtitle>Sign in as</Subtitle>
            </InnerContainer>
        </StyledContainer>

    );
}

export default splitpage;
