import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

<<<<<<< HEAD
import { Colors } from '../components/styles';
import Butt from '../components/CustomButton';
=======
>>>>>>> 8183c48fff2242b3eab786cf603f60d1a01e156b

//react-native-vector-icons
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
    Buttons,
    Colors,
    ButtonContainers,
    MsgBox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent,
    ButtonText,
    StyledButton
    //the file is located in one level above the current folder
} from '../components/styles'
const { primary, background, offWhite, darklight, green } = Colors;
const Login = () => {
    const [hidePassword, setHidePassword] = useState(true)
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <View style={ButtonContainers.container}>
                    <PageLogo resizeMode="contain" source={require('./../assets/logoV-full.png')} />
                </View>
<<<<<<< HEAD
                <PageTitle> Log In
                </PageTitle>
=======
                <PageTitle> Account Login</PageTitle>

                <Subtitle></Subtitle>
>>>>>>> 8183c48fff2242b3eab786cf603f60d1a01e156b
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
<<<<<<< HEAD
                            label="password"
                            icon="lock"
                            placeholder="********"
=======
                            label="Password"
                            placeholder="* * * * * * * *"
>>>>>>> 8183c48fff2242b3eab786cf603f60d1a01e156b
                            placeholderTextColor={darklight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            icon="lock"
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MsgBox>...</MsgBox>

                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Login
                            </ButtonText>
                        </StyledButton>
                        <Line />
                        <StyledButton onPress={handleSubmit}>
                            <Fontisto name="google" color={offWhite} size={25} />
                            <ButtonText google={true}>Sign in with Google</ButtonText>
                        </StyledButton>

                        <ExtraView>
                            <ExtraText>Don't have an account already? </ExtraText>
                            <TextLink>
                                <TextLinkContent>signup</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>

                )}
                </Formik>
                <View style={ButtonContainers.container}>
                    <Butt title="Log In"/>
                </View>
            </InnerContainer>
        </StyledContainer >

    );
}

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={background} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon
                    onPress={() => {
                        setHidePassword(!hidePassword);
                    }}
                >
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darklight} />
                </RightIcon>
            )}
        </View>
    );
};
/*
const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={background} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => { setHidePassword(!hidePassword) }}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darklight} />
                </RightIcon>
            )}
        </View>
    );

}
*/
export default Login;