
import { useEffect, useState} from "react/cjs/react.production.min";
import constants from "jest-haste-map/build/constants";
import { StatusBar } from "expo-status-bar";
import React from 'react';
import { Stylesheet, Text, View, Button } from 'react-native'
import { ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";

import Constants  from "expo-constants";
import reducers from './src/redux/reducers';

import firebase from "firebase";


const store = createStore(reducers,applyMiddleware(thunk))
//if(firebase.apps.length == 0){
firebase.initializeApp(Constants.manifest.web.config.firebase)
//}


//screen


import AuthScreen from "./src/screens/auth";


const Stack = createStackNavigator();

export default function App() {
  
  

    return( 
        

        <Provider store ={store}>
            
            <NavigationContainer>
                <AuthScreen>
                   <text>placeholder</text>
                </AuthScreen>
            </NavigationContainer>
        </Provider>
        

        
    );
    

}
