import { StatusBar } from "expo-status-bar";
import React from 'react';
import { Stylesheet, Text, View, Button } from 'react-native'
import { ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ReceiverDetails from "./screens/receiverDetails";
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import SenderDetails from "./screens/senderDetails";
import Constants  from "expo-constants";
import rootReducers from "./frontend/src/redux/reducers";

import firebase from "firebase";

const store = createStore(rootReducers,applyMiddleware(thunk))
if(firebase.apps.length == 0){
   firebase.initializeApp(Constants.manifest.web.config.firebase)
}


//screen

import Signup from './screens/Signup';


import SignInScreen from './screens/SignInScreen';

import PackageDetails2 from './screens/packageDetails2';
import { useEffect, useState} from "react/cjs/react.production.min";
import constants from "jest-haste-map/build/constants";
import AuthScreen from "./screens/auth";


const Stack = createStackNavigator();

export default function App() {
  
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    const authContext = React.useMemo(() => ({

        
    }));

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    },[])
    

    if( isLoading ) {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large"/>
            </View>
        );
    }

    return( //<ReceiverDetails/>
        

        <provider store ={store}>
            
            <NavigationContainer>
                <AuthScreen>
                    <Stack.Navigator>
                        <Stack.Screen name='SignInScreen'component={SignInScreen}/>
                        <Stack.Screen name="Signup" component={Signup}/>
                        <Stack.Screen name="SenderDetails" component={SenderDetails}/>
                        <Stack.Screen name="ReceiverDetails" component={ReceiverDetails}/>
                        <Stack.Screen name="PackageDetails2" component={PackageDetails2}/>
                    </Stack.Navigator>    
                </AuthScreen>
            </NavigationContainer>
        </provider>
        

        
    );
    

}
