import { StatusBar } from "expo-status-bar";
import React from 'react';
import { Stylesheet, Text, View} from 'react-native'

//screen
import Login from './screens/login2.';
import Splitpage from './screens/splitpage2';
import PackageDetails from './screens/packageDetails';
import PackageDetails2 from './screens/packageDetails2';

export default function App() {

    //return <map/>
    //return <Splitpage/>; //(role choosing page-ELisa)
    //return <Login />; // this change was made by raphique
    return <PackageDetails2/>;



}