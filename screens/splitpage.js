import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View} from 'react-native'
import Butt from '../components/CustomButton';
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
    Colors,
    Buttons,
    ButtonContainers
} from '../components/styles'; //the file is located in one level above the current folder

const {primary,background,offWhite, darklight} = Colors;
const Splitpage = () =>{
    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <View style={ButtonContainers.container}>    
                    <PageLogo resizeMode="cover"source={require('./../assets/logoV-full.png')} /> 
                </View>
                <PageTitle> Sign In as: </PageTitle>
                <View style={ButtonContainers.container}>
                    <Butt title="Driver"/>
                    <Butt title= "Customer"/>
                </View>
            </InnerContainer>
        </StyledContainer>

    );
}

//place logo in View container to mae it center

export default Splitpage;
