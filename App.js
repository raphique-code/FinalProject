import { StatusBar } from "expo-status-bar";
import React from 'react';
import { Stylesheet, Text, View} from 'react-native'

//screen
import splitpage from './splitpage';
import Login from './login.';


export default function App(){
    /*return   <Login/>;*/
    return <splitpage/>; 
    //this messege is made by elisa
}