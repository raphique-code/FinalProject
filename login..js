import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import { Octicons } from 'react-native-vector-icons';

import { Colors } from './styles'

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
    colors
    //the file is located in one level above the current folder
} from './styles'
const { primary, background, offWhite, darklight } = Colors;
const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./assets/logoV-full.png')} />
                <PageTitle> nathan and deliver
                </PageTitle>
                <Subtitle>Account Login</Subtitle>
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
                            label="pasword"
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
            </InnerContainer>
        </StyledContainer>

    );
}

const MyTextInput = ({ label, icon, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={primary} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
        </View>
    );

}
export default Login;
