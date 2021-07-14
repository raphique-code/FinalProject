import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { View, TouchableOpacity, Touchable } from 'react-native';
import { Octicons, Ionicons, fontisto } from '@expo/vector-icons';


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
const Signup = () => {
    const [hidePassword, setHidePassword] = useState(true)
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    // Actual value to be sent
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    };

    const showDatePicker = () => {
        setShow('date');
    };

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>

                <PageTitle> Account Login</PageTitle>

                <Subtitle></Subtitle>
                <Formik
                    initialValues={{ fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}

                >{({ handleChange, handleBlur, handleSubmit, values }) => (
                    <StyledFormArea>
                        <MyTextInput
                            label="Full Name"
                            placeholder="Nathan juan"
                            placeholderTextColor={darklight}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            icon="person"
                        />

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
                            label="Date of Birth"
                            placeholder="YYYY - MM - DD"
                            placeholderTextColor={darklight}
                            onChangeText={handleChange('dateOfBirth')}
                            onBlur={handleBlur('dateOfBirth')}
                            value={values.dateOfBirth}
                            value={dob ? dob.toDateString() : ''}
                            icon="calendar"
                            editable={false}
                            isDate={true}
                            showDatePicker={showDatePicker}

                        />

                        <MyTextInput
                            label="Password"
                            placeholder="* * * * * * * *"
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
                        <MyTextInput
                            label=" Confirm Password"
                            placeholder="* * * * * * * *"
                            placeholderTextColor={darklight}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
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


                        <ExtraView>
                            <ExtraText>Don't have an account already? </ExtraText>
                            <TextLink>
                                <TextLinkContent>signup</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>

                )}
                </Formik>
            </InnerContainer>
        </StyledContainer >

    );
}

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={background} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {!isDate && <StyledTextInput {...props} />}
            {isDate && <TouchableOpacity onPress={showDatePicker}>
                <StyledTextInput{...props} />
            </TouchableOpacity>}
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
export default Signup;