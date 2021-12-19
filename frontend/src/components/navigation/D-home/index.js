import { useState } from 'react';
import PackageDetails from '../package_details';
import Logout from '../logout';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { userAuthStateListener } from '../../redux/actions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import { userAuthStateListener } from '../../../redux/actions';
import AuthScreen from '../../../screens/auth';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../../../redux/actions';
//import HomeScreen from '../home';
//import SavePostScreen from '../../screens/savePost';

import Maps_control from '../../../screens/map_control';
import Pick_Up from '../../maps/pick_up';


import DropOff from '../../maps/drop_off';
import OrderSummary from '../../maps/order_summary';
import OrderProgress from '../../maps/order_Progress';
import Driver_First from '../../Driver_components/drive_first';
import DriversCustomer_List from '../../Driver_components/driver_customerList';
import Driver_OrderDetails from '../../Driver_components/driver_orderDetails';
import DriverEdit_Profile from '../../Driver_components/driver_editProfile';





//setPackage_detail={setPackage_detail} setHome={setHome}
export default function D_HomeNav(){
      
    const [home, setHome] = useState(0);
    const [signOut, setSignOut] = useState(false)
    
    const [Package_details, setPackage_detail] = useState(true )
    const [maps_con,setMaps_con] = useState (false)
    const [cus_login, setCus_login] = useState(false)
    const [drive_login, setDrive_login] = useState(false)
    const [maps_nav, setMaps_nav] = useState(false);
    const [pick_up, setPick_up] = useState(false);
    const [drop_off, setDrop_off] = useState(false);
    const [Drive_detailsPage, Drive_setDetailsPage] = useState(false);
    const [order_summary, setOrder_summary] = useState (false);
    const [orderProgress, setOrderProgress]= useState (false);
    const [driver_first, setDriver_first]= useState (true);
    const [driverCustomer_list, setDriverCustomer_list]= useState (false);
    const [driver_OrderDetails, setDriver_OrderDetails]= useState (false);
    const [driverEdit_Profile, setDriverEdit_Profile]= useState (false);

    
    return(
        <View style = {{height: "100%"}}>

            {
            
            driver_first?

            <Driver_First setSignOut={setSignOut} setDriver_first = {setDriver_first} setDriverCustomer_list = {setDriverCustomer_list} setDriverEdit_Profile = {setDriverEdit_Profile}/> 
            :
            driverEdit_Profile?
        
            <DriverEdit_Profile setDriver_first = {setDriver_first} setDriverCustomer_list = {setDriverCustomer_list} setDriverEdit_Profile = {setDriverEdit_Profile}  setDriver_OrderDetails = {setDriver_OrderDetails}/> // only pass the set if you need to change value if not pass the read only variable
            :
            signOut?

            <Logout  setSignOut={setSignOut}  setDriver_first = {setDriver_first}/>
            :
            
            driverCustomer_list?

            <DriversCustomer_List setDriver_first = {setDriver_first} setDriverEdit_Profile = {setDriverEdit_Profile} setDriverCustomer_list = {setDriverCustomer_list} setDriver_OrderDetails = {setDriver_OrderDetails}/>

            :
            driver_OrderDetails?

            <Driver_OrderDetails setDriver_first = {setDriver_first} setDriverEdit_Profile = {setDriverEdit_Profile} setDriverCustomer_list = {setDriverCustomer_list} setDriver_OrderDetails = {setDriver_OrderDetails}/>
            :

            <OrderSummary  setMaps_nav = {setMaps_nav} setOrder_summary = {setOrder_summary} setOrderProgress={setOrderProgress}/>

 
                    
            }       
        </View>
    )

}
