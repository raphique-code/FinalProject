import React, { useState } from 'react'
import { View,Text } from 'react-native'
import styles from './styles';
import Pick_up from '../../components/maps/pick_up';

import Maps_nav from '../../components/maps/maps_nav';
import Drop_off from '../../components/maps/drop_off';
import OrderSummary from '../../components/maps/order_summary';
import OrderProgress from '../../components/maps/order_Progress';
import HomeNav from '../../components/navigation/home';
import DropOff from '../../components/maps/drop_off';




export default function Maps_control({setMaps_con}){
    const [maps_nav, setMaps_nav] = useState(true);
    const [pick_up, setPick_up] = useState(false);
    const [drop_off, setDrop_off] = useState(false);
    const [Drive_detailsPage, Drive_setDetailsPage] = useState(false);
    const [order_summary, setOrder_summary] = useState (false);
    const [orderProgress, setOrderProgress]= useState (false);
    
    return(
        <View style = {{height:"100%"}}>

            {pick_up?
            
            <Pick_up setMaps_nav = {setMaps_nav} setPick_up={setPick_up} setDrop_off={setDrop_off}/> // only pass the set if you need to change value if not pass the read only variable

            :
            drop_off?

            <DropOff setMaps_nav = {setMaps_nav} setPick_up={setPick_up} setDrop_off={setDrop_off}/>
            :

            order_summary?

            <OrderSummary setMaps_nav = {setMaps_nav} setOrder_summary={setOrder_summary} setOrderProgress={setOrderProgress}/>

            :
            orderProgress?

            <OrderProgress setOrder_summary= {setOrder_summary} setOrderProgress={setOrderProgress}/>

            :
            maps_nav?

            <Maps_nav setMaps_nav = {setMaps_nav} setPick_up={setPick_up} setDrop_off={setDrop_off} setOrder_summary={setOrder_summary}/> 

            :

            <HomeNav/>

            }

        </View>
    )

}