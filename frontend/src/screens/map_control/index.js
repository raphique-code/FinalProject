import React, { useState } from 'react'
import { View,Text } from 'react-native'
import styles from './styles';
import Pick_up from '../../components/maps/pick_up'

import Maps_nav from '../../components/maps/maps_nav';



export default function Maps_control(){
    const [maps_nav, setMaps_nav] = useState(true);
    const [pick_up, setPick_up] = useState(false)
    const [Drive_detailsPage, Drive_setDetailsPage] = useState(false)
    return(
        <View style = {{marginTop:30}}>

            {pick_up?
            
            <Pick_up setMaps_nav = {setMaps_nav} setPick_up={setPick_up}/> // only pass the set if you need to change value if not pass the read only variable

            :

            maps_nav}

            <Maps_nav setMaps_nav = {setMaps_nav} setPick_up={setPick_up}/> 

                   

        </View>
    )

}