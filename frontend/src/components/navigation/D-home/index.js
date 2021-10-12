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
import Maps_nav from '../../maps/maps_nav';
import Maps_control from '../../../screens/map_control';
import Pick_Up from '../../maps/pick_up';


import DropOff from '../../maps/drop_off';
import OrderSummary from '../../maps/order_summary';
import OrderProgress from '../../maps/order_Progress';





//setPackage_detail={setPackage_detail} setHome={setHome}
export default function HomeNav(){
      
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
    
    return(
        <View style = {{height: "100%"}}>

            {
            
            maps_nav?

            <Maps_nav setMaps_nav = {setMaps_nav} setPick_up={setPick_up} setDrop_off={setDrop_off} setOrder_summary={setOrder_summary}/> 

            :
            signOut?

            <Logout  setSignOut={setSignOut} setHome={setHome}/>

            :
            pick_up?
        
            <Pick_Up setMaps_nav = {setMaps_nav} setPick_up={setPick_up} setDrop_off={setDrop_off}/> // only pass the set if you need to change value if not pass the read only variable

            :
            drop_off?

            <DropOff setMaps_nav = {setMaps_nav} setPick_up={setPick_up} setDrop_off={setDrop_off}/>
            :

            order_summary?

            <OrderSummary  setMaps_nav = {setMaps_nav} setOrder_summary={setOrder_summary} setOrderProgress={setOrderProgress}/>

            :
            orderProgress?

            <OrderProgress setMaps_nav = {setMaps_nav} setOrder_summary= {setOrder_summary} setOrderProgress={setOrderProgress}/>

            :
 
            
            <PackageDetails setPackage_detail={setPackage_detail} setSignOut={setSignOut}  setMaps_nav={ setMaps_nav}/>

 
                    
            }       
        </View>
    )

}
