import { StatusBar } from "expo-status-bar";
import React from 'react';
import { Stylesheet, Text, View} from 'react-native'

//screen
import Login from './screens/login.';
import Splitpage from './screens/splitpage';


export default function App() {

    //return <map/>
    return <Splitpage/>; //(role choosing page-ELisa)
    //return <Login />; // this change was made by raphique



}