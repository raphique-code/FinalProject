import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import { Octicons } from 'react-native-vector-icons';

import { Colors } from '../components/styles';
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
    colors,
    ButtonContainers
    //the file is located in one level above the current folder
} from '../components/styles'
const { primary, background, offWhite, darklight } = Colors;
const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <View style={ButtonContainers.container}>    
                    <PageLogo resizeMode="cover"source={require('./../assets/logoV-full.png')} /> 
                </View>
                <PageTitle> Log In
                </PageTitle>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}

                >{({ handleChange, handleBlur, handleSubmit, values }) => (
                    <StyledFormArea>
                        <MyTextInput
                            label="Email Address"
                            icon="mail"
                            placeholder="Nathan@gmail.com"
                            placeholderTextColor={darklight}
                            onChangeText={handleChange('email')}
                            onBlur={handleChange('email')}
                            Value={values.email}
                            keyboardTypes="email-address"
                        />

                        <MyTextInput
                            label="password"
                            icon="lock"
                            placeholder="********"
                            placeholderTextColor={darklight}
                            onChangeText={handleChange('password')}
                            onBlur={handleChange('password')}
                            Value={values.password}
                            secureTextEntry={true}
                        />
                    </StyledFormArea>)}
                </Formik>
                <View style={ButtonContainers.container}>
                    <Butt title="Log In"/>
                </View>
            </InnerContainer>
        </StyledContainer>

    );
}

const MyTextInput = ({ label, icon, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={background} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
        </View>
    );

}
export default Login;
