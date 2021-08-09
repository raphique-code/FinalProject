import { StatusBar } from "expo-status-bar";
import React from 'react';
import { Stylesheet, Text, View } from 'react-native'

//screen
import Login from './screens/login.';
import Signup from './screens/Signup';

import Splitpage from './screens/splitpage';
import PackageDetails from './screens/packageDetails';
import PackageDetails2 from './screens/packageDetails2';

export default function App() {

    //return <map/>
    //return <Splitpage/>; //(role choosing page-ELisa)
    //return <Login />; // this change was made by raphique
    //return <PackageDetails2/>;
    //return <map />
    //return <Splitpage />; //(role choosing page-ELisa)
    //return <Login />; // this change was made by raphique
    return <Signup />;



}
/*<StyledButton onPress={handleSubmit}>
                            <fontisto name="google" color={primary} size={25} />
                            <ButtonText google={true}>Sign in with Google</ButtonText>
                        </StyledButton>
                         label="Password"
                            icon="lock"
                            placeholder="********"
                            placeholderTextColor={darklight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            Value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}*/